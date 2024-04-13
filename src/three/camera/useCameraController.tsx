import { useEffect, useMemo } from "react";
import * as THREE from "three";

function useCameraController() {
  const camera = useMemo(
    () =>
      new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      ),
    []
  );

  camera.position.setZ(30);

  useEffect(() => {
    function moveCamera() {
      requestAnimationFrame(moveCamera);

      camera.position.z += 0.0;
    }

    moveCamera();
  }, [camera]);

  return camera;
}

export default useCameraController;
