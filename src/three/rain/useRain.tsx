import { useEffect } from "react";
import * as THREE from "three";
import { useThreeContext } from "../ThreeContext";

const RAIN_COUNT = 15000;

function useRain() {
  const { scene } = useThreeContext();
  const rainVertices: number[] = [];
  const rainVelocities: number[] = [];

  for (let i = 0; i < RAIN_COUNT; i++) {
    const rainDrop = {
      x: Math.random() * 400 - 200,
      y: Math.random() * 500 - 250,
      z: Math.random() * 400 - 200,
    };
    rainVertices.push(rainDrop.x, rainDrop.y, rainDrop.z);
    rainVelocities.push(0);
  }

  useEffect(() => {
    const rainGeo = new THREE.BufferGeometry();

    rainGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(rainVertices), 3),
    );

    const rainMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.3,
      transparent: true,
    });

    const rain = new THREE.Points(rainGeo, rainMaterial);
    scene.add(rain);

    let rainSpin = 0;

    const animateRain = () => {
      rainGeo.attributes.position.array.forEach((pos, i) => {
        const yVert = i % 3;
        if (yVert === 1) {
          rainVelocities[i / 3] -= 0.1 + Math.random() * 0.01;
          rainGeo.attributes.position.array[i] += rainVelocities[i / 3];
          if (pos < -200) {
            rainGeo.attributes.position.array[i] = Math.random() * 500 - 250;
            rainVelocities[i / 3] = 0;
          }
        }
      });

      rainGeo.attributes.position.needsUpdate = true;

      // make rain pendulum effect
      rain.rotation.y += Math.sin(rainSpin) * 0.02;
      console.log(Math.sin(rainSpin) * 0.02);
      rainSpin += 0.02;

      requestAnimationFrame(animateRain);
    };

    animateRain();
  });
}

export default useRain;
