import { useRef, useEffect } from "react";

export const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    const updateMousePosition = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", updateMousePosition);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const orbSize = canvas.width > 600 ? 300 : 150;

      // Create a radial gradient for the glowing effect
      const gradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        orbSize * 0.1,
        mouse.current.x,
        mouse.current.y,
        orbSize
      );
      
      gradient.addColorStop(0, "rgba(75, 0, 130, 0.4)");   // Indigo
      gradient.addColorStop(0.5, "rgba(0, 75, 130, 0.2)"); // Dark Blue
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");         // Transparent

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, orbSize, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "#0a0a0a" // A very dark background
      }}
    />
  );
};