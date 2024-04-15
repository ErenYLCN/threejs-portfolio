import { createContext, useContext } from "react";
import * as THREE from "three";

import useCube from "./cube/useCube";
import useTorus from "./torus/useTorus";

const ThreeContext = createContext({
  scene: null as unknown as THREE.Scene,
  renderer: null as unknown as THREE.WebGLRenderer,
  cube: null as unknown as THREE.Mesh,
  torus: null as unknown as THREE.Mesh,
});

function ThreeContextProvider({ children }: { children: React.ReactNode }) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const cube = useCube();
  const torus = useTorus();

  scene.add(cube);
  scene.add(torus);

  return (
    <ThreeContext.Provider value={{ scene, renderer, cube, torus }}>
      {children}
    </ThreeContext.Provider>
  );
}

function useThreeContext() {
  return useContext(ThreeContext);
}

export { ThreeContextProvider, useThreeContext, ThreeContext };
