import { createContext, useContext } from "react";
import * as THREE from "three";

const ThreeContext = createContext({
  scene: null as unknown as THREE.Scene,
  renderer: null as unknown as THREE.WebGLRenderer,
});

function ThreeContextProvider({ children }: { children: React.ReactNode }) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  return (
    <ThreeContext.Provider value={{ scene, renderer }}>
      {children}
    </ThreeContext.Provider>
  );
}

function useThreeContext() {
  return useContext(ThreeContext);
}

export { ThreeContextProvider, useThreeContext, ThreeContext };
