import Content from "../../content/Content";
import { ThreeContextProvider } from "../../three/ThreeContext";
import CanvasBackground from "../../three/canvas/CanvasBackground";

function App() {
  return (
    <>
      <Content />

      <ThreeContextProvider>
        <CanvasBackground />
      </ThreeContextProvider>
    </>
  );
}

export default App;
