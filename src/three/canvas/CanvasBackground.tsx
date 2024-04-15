import { useEffect, useRef } from "react";
import useCameraController from "../camera/useCameraController";
import useLight from "../light/useLight";
import { useThreeContext } from "../ThreeContext";
import useStars from "../stars/useStars";
import useCloud from "../cloud/useCloud";
import useRain from "../rain/useRain";

function CanvasBackground() {
  const { scene, renderer } = useThreeContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const camera = useCameraController();
  // useStars();
  useCloud();
  useLight();
  useRain();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.appendChild(renderer.domElement);

    // Infinite animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      /* controls.update(); */

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      container?.removeChild(renderer.domElement);
    };
  }, [camera, renderer, scene]);

  return <div id="canvas-bg" ref={containerRef} />;
}

export default CanvasBackground;
