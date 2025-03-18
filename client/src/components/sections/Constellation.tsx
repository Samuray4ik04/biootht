import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Установка размеров canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Инициализация точек
    const initPoints = () => {
      const numPoints = Math.floor(window.innerWidth * window.innerHeight / 20000);
      points.current = Array.from({ length: numPoints }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };
    initPoints();

    // Анимация
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(147, 51, 234, 0.5)';
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';

      // Обновление позиций точек
      points.current.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Отражение от границ
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Притяжение к курсору
        const dx = mousePos.current.x - point.x;
        const dy = mousePos.current.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          point.vx += dx / dist * 0.02;
          point.vy += dy / dist * 0.02;
        }

        // Ограничение скорости
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
        if (speed > 2) {
          point.vx = (point.vx / speed) * 2;
          point.vy = (point.vy / speed) * 2;
        }

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Соединение близких точек
      points.current.forEach((point, i) => {
        points.current.slice(i + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    // Отслеживание курсора
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
