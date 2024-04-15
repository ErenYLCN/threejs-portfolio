import { useEffect, useMemo } from "react";
import * as THREE from "three";

function useTorus() {
  const torus = useMemo(() => {
    const geometry = new THREE.TorusGeometry(40, 3, 160, 100);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1f3154,
      metalness: 0.0,
      roughness: 0.0,
      transmission: 0.6,
    });
    const torus = new THREE.Mesh(geometry, material);

    torus.rotation.x = 1.16;

    torus.position.set(-2, -5, -2);

    return torus;
  }, []);

  useEffect(() => {
    function moveTorus() {
      requestAnimationFrame(moveTorus);

      torus.rotation.x += 0.001;
      torus.rotation.z += 0.009;
      torus.rotation.y += 0.003;
    }

    moveTorus();
  });

  return torus;
}

export default useTorus;
