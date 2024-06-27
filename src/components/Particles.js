// ./src/components/Particles.js
import React, { useEffect } from 'react';

export function drawParticles(containerId) {
  const app = document.querySelector(containerId);
  if (!app) return;
  
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('particles');
  app.appendChild(particlesContainer);

  const canvas = document.createElement('canvas');
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 100);
  });

  particlesContainer.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const numParticles = 80;
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
    particles.push(particle);
  }

  function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
      const rect1 = particle.getBoundingClientRect();
      const x1 = rect1.left + rect1.width / 2;
      const y1 = rect1.top + rect1.height / 2;

      for (let i = index + 1; i < particles.length; i++) {
        const rect2 = particles[i].getBoundingClientRect();
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;
        const distance = getDistance(x1, y1, x2, y2);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = 'rgba(132, 0, 255, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(drawLines);
  }

  drawLines();
}

const Particles = () => {
  useEffect(() => {
    drawParticles('#app');
  }, []);

  return (
    <style>{`
      .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
      }

      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgb(132, 0, 255);
        border-radius: 50%;
        animation: move 5s infinite ease-in-out;
        transition: transform 0.2s ease;
        transform: translate(var(--translateX, 0), var(--translateY, 0));
      }

      @keyframes move {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(30px, -30px); }
      }
    `}</style>
  );
};

export default Particles;
