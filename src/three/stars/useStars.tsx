import * as THREE from "three";
import { useEffect } from "react";
import { useThreeContext } from "../ThreeContext";

function useStars() {
  const { scene } = useThreeContext();

  useEffect(() => {
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.1, 24, 24);
      const material = new THREE.MeshBasicMaterial({ color: 0x6bd5ff });
      const star = new THREE.Mesh(geometry, material);

      star.position.x = Math.random() * 1600 - 800;
      star.position.y = Math.random() * 200 + 200;
      star.position.z = Math.random() * 800 - 400;

      scene.add(star);
    }

    Array(200).fill(0).forEach(addStar);

    return () => {
      scene.children.forEach((child) => {
        if (child.type === "Mesh") {
          scene.remove(child);
        }
      });
    };
  });

  return null;
}

export default useStars;
