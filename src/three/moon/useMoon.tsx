import * as THREE from "three";
import moonImg from "./../../../assets/moon.jpg";
import moonNormalImg from "./../../../assets/normal.jpg";
import { useThreeContext } from "../ThreeContext";
import { useEffect } from "react";

function useMoon() {
  const { scene } = useThreeContext();

  useEffect(() => {
    const moonTexture = new THREE.TextureLoader().load(moonImg);
    const normalTexture = new THREE.TextureLoader().load(moonNormalImg);
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    ambientLight.position.set(3, -24, -2.5);

    scene.add(ambientLight);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      }),
    );

    moon.position.set(3, -21, -2.5);

    scene.add(moon);

    function spinMoon() {
      moon.rotation.z += 0.009;

      requestAnimationFrame(spinMoon);
    }

    spinMoon();
  });
}

export default useMoon;
