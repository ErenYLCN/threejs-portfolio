import * as THREE from "three";
import { useThreeContext } from "../ThreeContext";
import { useEffect } from "react";

function useLight() {
  const { scene } = useThreeContext();
  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.position.set(10, 10, 10);

  const pointLight = new THREE.PointLight(0xffffff, 100, 1000);

  const pointLightHelper = new THREE.PointLightHelper(pointLight);
  const gridHelper = new THREE.GridHelper(200, 50);

  useEffect(() => {
    scene.add(ambientLight);
    scene.add(pointLight);
    scene.add(pointLightHelper);
    scene.add(gridHelper);
  });

  return null;
}

export default useLight;
