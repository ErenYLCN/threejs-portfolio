import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useThreeContext } from "../ThreeContext";

// TODO: Change this into scroll controller
function useCameraController() {
  const { cube } = useThreeContext();
  document.body.onscroll = handleScrollMovements;
  const camera = useMemo(
    () =>
      new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000,
      ),
    [],
  );

  camera.position.y = 2;
  camera.position.z = 1;
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;

  function handleScrollMovements() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.y = t * 0.007;

    cube.rotation.x = t * -0.002;
    cube.rotation.y = t * -0.0013;
    cube.rotation.z = t * 0.001;
  }

  let x = 0;

  useEffect(() => {
    function moveCamera() {
      requestAnimationFrame(moveCamera);

      //make pendulum effect on camera z rotation
      camera.rotation.z = Math.sin(x) * 0.04;
      x += 0.004;
    }

    moveCamera();
  }, [camera]);

  return camera;
}

export default useCameraController;
