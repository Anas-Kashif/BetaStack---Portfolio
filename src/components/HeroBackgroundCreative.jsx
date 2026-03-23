import React, { useRef, useEffect } from 'react';

const HeroBackgroundCreative = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const viewportRef = useRef({ width: 0, height: 0 });
  const isVisibleRef = useRef(true);
  const isTabVisibleRef = useRef(true);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let time = 0;
    const targetFrameMs = 1000 / 30;

    // Set canvas size
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Draw using CSS pixel coordinates while keeping sharp rendering.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      viewportRef.current = { width, height };
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause heavy drawing when the hero leaves viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isTabVisibleRef.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Draw dimensional grid
    const drawDimensionalGrid = (t) => {
      const { width, height } = viewportRef.current;
      const gridSize = 80;
      
      ctx.strokeStyle = 'rgba(103, 100, 242, 0.5)';
      ctx.lineWidth = 1;

      // Horizontal lines with wave distortion
      for (let y = 0; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
          const distortY = Math.sin(x * 0.01 + t * 0.5) * 20 * 
                          Math.sin(y * 0.005 + t * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y + distortY);
          } else {
            ctx.lineTo(x, y + distortY);
          }
        }
        ctx.stroke();
      }

      // Vertical lines with wave distortion
      for (let x = 0; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= height; y += 10) {
          const distortX = Math.sin(y * 0.01 + t * 0.5) * 20 * 
                          Math.cos(x * 0.005 + t * 0.3);
          
          if (y === 0) {
            ctx.moveTo(x + distortX, y);
          } else {
            ctx.lineTo(x + distortX, y);
          }
        }
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = (timestamp) => {
      const elapsed = timestamp - lastFrameTimeRef.current;
      if (elapsed < targetFrameMs) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = timestamp;

      if (!isVisibleRef.current || !isTabVisibleRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      time += elapsed * 0.001;

      const { width, height } = viewportRef.current;

      // Clear canvas
      ctx.fillStyle = 'rgba(5, 5, 5, 1)';
      ctx.fillRect(0, 0, width, height);

      // Draw dimensional grid
      drawDimensionalGrid(time);

      // Draw mouse glow
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0 && my > 0) {
        const mouseGradient = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
        mouseGradient.addColorStop(0, 'rgba(103, 100, 242, 0.15)');
        mouseGradient.addColorStop(0.5, 'rgba(103, 100, 242, 0.05)');
        mouseGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGradient;
        ctx.fillRect(mx - 200, my - 200, 400, 400);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Overlay gradients for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background-dark/80 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-background-dark/40 pointer-events-none" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,5,5,0.4) 100%)',
        }}
      />
    </div>
  );
};

export default HeroBackgroundCreative;
