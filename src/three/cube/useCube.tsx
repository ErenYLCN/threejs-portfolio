import * as THREE from "three";
import me from "../../../assets/me.png";

function useCube() {
  const meTexture = new THREE.TextureLoader().load(me);

  const meBox = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial({ map: meTexture }),
  );
  meBox.position.set(-1.4, -5, -0.9);

  meBox.rotation.x = 1.16;
  return meBox;
}

export default useCube;
