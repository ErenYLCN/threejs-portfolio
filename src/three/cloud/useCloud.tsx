import { useEffect } from "react";
import { useThreeContext } from "../ThreeContext";
import * as THREE from "three";

function useCloud() {
  const { scene } = useThreeContext();

  useEffect(() => {
    const flash = new THREE.PointLight(0x2b52e0, 400, 540, 1.7);
    flash.position.set(200, 300, 100);
    scene.add(flash);

    const cloudParticles = [] as THREE.Mesh[];
    const loader = new THREE.TextureLoader();
    loader.load("../../../assets/cloud.png", (texture) => {
      const cloudGeo = new THREE.PlaneGeometry(500, 500);
      const cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
      });

      for (let p = 0; p < 25; p++) {
        const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
          Math.random() * 700 - 350,
          500,
          Math.random() * 500 - 450,
        );
        // clouds face the camera
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 360;
        cloud.material.opacity = 0.4;
        cloud.material.transparent = true;

        cloudParticles.push(cloud);
        scene.add(cloud);

        // animate clouds
        const animateClouds = () => {
          cloudParticles.forEach((p) => {
            p.rotation.z -= 0.00005;
          });

          if (Math.random() > 0.98) {
            flash.power = 5000000 + Math.random() * 500000;
            flash.position.set(
              Math.random() * 400 - 200,
              100 + Math.random() * 200,
              Math.random() * 400 - 200,
            );
          } else {
            flash.power = 100000;
            flash.position.set(-200, 170, -100);
          }

          requestAnimationFrame(animateClouds);
        };

        animateClouds();
      }
    });
  });

  return null;
}

export default useCloud;
