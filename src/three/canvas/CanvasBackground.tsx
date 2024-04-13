import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import useCameraController from "../camera/useCameraController";
import useTorus from "../torus/useTorus";
import useLight from "../light/useLight";
import { useThreeContext } from "../ThreeContext";

function CanvasBackground() {
  const { scene, renderer } = useThreeContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const camera = useCameraController();
  useTorus();
  useLight();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.appendChild(renderer.domElement);

    // TODO: remove this later
    const controls = new OrbitControls(camera, renderer.domElement);

    // Infinite animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();

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
