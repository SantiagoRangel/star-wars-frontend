import { Canvas } from "@react-three/fiber";
import HeroLogo from "../components/HeroLogo";
import PlanetGrid from "../components/PlanetGrid";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Preload, View } from "@react-three/drei";
import CreateButton from "../components/CreateButton";
import Filters from "../components/Filters/Filters";
import Sorter from "../components/Sorter";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-center pb-20">
        <div className="flex flex-col  items-center xl:w-[1400px] ">
          <TextGenerateEffect
            words="A long time ago in a galaxy far, far away...."
            className="mt-14 px-8 text-2xl lg:text-3xl xl:text-4xl xl:mt-20 "
          />
          <HeroLogo className="-translate-x-2 w-screen h-[400px] mt-10 absolute z-0" />
        </div>
        <div className="mt-80 md:mt-80 flex gap-4 ">
          <CreateButton />
          <Filters />
          <Sorter />
        </div>
        <PlanetGrid />
        <Canvas
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            zIndex: 0,
          }}
          eventSource={document.getElementById("root")!}
        >
          <View.Port />
          <Preload all />
        </Canvas>
      </div>
    </>
  );
}
