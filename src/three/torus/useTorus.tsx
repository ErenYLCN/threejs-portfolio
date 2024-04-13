import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useThreeContext } from "../ThreeContext";

function useTorus() {
  const { scene } = useThreeContext();

  const torus = useMemo(() => {
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);

    return torus;
  }, []);

  useEffect(() => {
    scene.add(torus);

    function moveTorus() {
      requestAnimationFrame(moveTorus);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
    }

    moveTorus();
  });

  return null;
}

export default useTorus;
