import { ThreeContextProvider } from "../../three/ThreeContext";
import CanvasBackground from "../../three/canvas/CanvasBackground";

function App() {
  return (
    <>
      <div>Eren Yalçın</div>

      <ThreeContextProvider>
        <CanvasBackground />
      </ThreeContextProvider>
    </>
  );
}

export default App;
