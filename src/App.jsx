import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <main className="h-screen w-full bg-black">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#030303"]} />
        <fog attach="fog" args={["#030303", 5, 18]} />
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html>
            <Overlay />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}

export default App;
