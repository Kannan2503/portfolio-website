import React, { useEffect, useRef } from 'react';

export const SemiconductorBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Matrix falling binary code configuration
    const columns = Math.floor(width / 20);
    const yPositions = Array.from({ length: columns }, () => Math.random() * -height);
    const dropSpeeds = Array.from({ length: columns }, () => 1 + Math.random() * 2);

    // Grid config
    const gridSize = 80;
    const dots: Array<{ x: number; y: number; originalX: number; originalY: number; glow: number }> = [];

    // Generate grid dots
    for (let x = 0; x < width + gridSize; x += gridSize) {
      for (let y = 0; y < height + gridSize; y += gridSize) {
        dots.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          originalX: x,
          originalY: y,
          glow: Math.random(),
        });
      }
    }

    // Electrons (moving particles along grid lines)
    interface Electron {
      x: number;
      y: number;
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      progress: number;
      speed: number;
      color: string;
    }
    const electrons: Array<Electron> = [];
    const maxElectrons = 15;

    const findNeighbors = (dot: typeof dots[0], range = gridSize * 1.5) => {
      return dots.filter(
        (d) => d !== dot && Math.hypot(d.x - dot.x, d.y - dot.y) < range
      );
    };

    const spawnElectron = () => {
      if (dots.length === 0 || electrons.length >= maxElectrons) return;
      const startDot = dots[Math.floor(Math.random() * dots.length)];
      const neighbors = findNeighbors(startDot);
      if (neighbors.length === 0) return;
      const endDot = neighbors[Math.floor(Math.random() * neighbors.length)];

      const colors = ['#00f2fe', '#0072ff', '#a015fa'];
      electrons.push({
        x: startDot.x,
        y: startDot.y,
        startX: startDot.x,
        startY: startDot.y,
        endX: endDot.x,
        endY: endDot.y,
        progress: 0,
        speed: 0.003 + Math.random() * 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    // Mouse interactive position
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Scanline Y position
    let scanlineY = 0;

    const draw = () => {
      // Very dark background
      ctx.fillStyle = '#010208';
      ctx.fillRect(0, 0, width, height);

      // 1. Draw subtle Sci-Fi falling binary code stream (Matrix rain style in ECE cyan/purple)
      ctx.font = '8px monospace';
      for (let i = 0; i < yPositions.length; i++) {
        const char = Math.random() > 0.5 ? '1' : '0';
        const x = i * 20;
        const y = yPositions[i];

        // Draw character
        ctx.fillStyle = i % 5 === 0 ? 'rgba(160, 21, 250, 0.04)' : 'rgba(0, 242, 254, 0.04)';
        ctx.fillText(char, x, y);

        // Update y position
        yPositions[i] += dropSpeeds[i];
        if (yPositions[i] > height) {
          yPositions[i] = Math.random() * -100;
          dropSpeeds[i] = 1 + Math.random() * 2;
        }
      }

      // 2. Draw semiconductor circuit wafer grid in the background
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.025)';
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 0; j < height; j += 50) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      // 3. Draw connection traces between neighboring dots
      ctx.strokeStyle = 'rgba(0, 114, 255, 0.04)';
      ctx.lineWidth = 1;
      dots.forEach((dot) => {
        const neighbors = findNeighbors(dot, gridSize * 1.2);
        neighbors.forEach((n) => {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        });
      });

      // Update and draw electrons
      if (electrons.length < maxElectrons && Math.random() < 0.08) {
        spawnElectron();
      }

      for (let i = electrons.length - 1; i >= 0; i--) {
        const el = electrons[i];
        el.progress += el.speed;
        el.x = el.startX + (el.endX - el.startX) * el.progress;
        el.y = el.startY + (el.endY - el.startY) * el.progress;

        // Draw electron trace
        ctx.beginPath();
        ctx.moveTo(el.startX, el.startY);
        ctx.lineTo(el.x, el.y);
        ctx.strokeStyle = el.color;
        ctx.globalAlpha = 0.25;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Draw electron head (glowing circle)
        ctx.beginPath();
        ctx.arc(el.x, el.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = el.color;
        ctx.shadowColor = el.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (el.progress >= 1) {
          electrons.splice(i, 1);
        }
      }

      // 4. Draw grid dots with cursor glow
      dots.forEach((dot) => {
        const distToMouse = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
        const maxDist = 180;
        let isGlow = false;
        let glowFactor = 0;

        if (distToMouse < maxDist) {
          isGlow = true;
          glowFactor = (1 - distToMouse / maxDist) * 1.5;
        }

        dot.glow += (Math.random() - 0.5) * 0.05;
        dot.glow = Math.max(0.2, Math.min(0.8, dot.glow));

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, isGlow ? 2.5 : 1.5, 0, Math.PI * 2);

        if (isGlow) {
          ctx.fillStyle = '#00f2fe';
          ctx.shadowColor = '#00f2fe';
          ctx.shadowBlur = 10 * glowFactor;
        } else {
          ctx.fillStyle = `rgba(0, 114, 255, ${dot.glow * 0.25})`;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Mouse hover connection lines (circuit pathways to mouse)
        if (isGlow && mouse.active) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          // Draw orthogonal trace lines like real PCB layouts
          const midX = dot.x + (mouse.x - dot.x) * 0.5;
          ctx.lineTo(midX, dot.y);
          ctx.lineTo(midX, mouse.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${glowFactor * 0.15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // 5. Draw a glowing laser scanning line (vertical sweep)
      scanlineY += 1.5;
      if (scanlineY > height) {
        scanlineY = 0;
      }
      ctx.beginPath();
      ctx.moveTo(0, scanlineY);
      ctx.lineTo(width, scanlineY);
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.05)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 6. Draw real-time mouse coordinate HUD in the corner for sci-fi look
      if (mouse.active) {
        ctx.fillStyle = 'rgba(0, 242, 254, 0.35)';
        ctx.font = '9px monospace';
        ctx.fillText(`LOC: X_${Math.floor(mouse.x)} Y_${Math.floor(mouse.y)}`, mouse.x + 15, mouse.y - 10);
        
        // Circular ambient pool
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 120);
        gradient.addColorStop(0, 'rgba(0, 242, 254, 0.06)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};
