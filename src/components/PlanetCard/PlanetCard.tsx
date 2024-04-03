import { Planet } from "../../types/types";
import { View } from "@react-three/drei";
import { ComponentProps, useState } from "react";
import { cn } from "../../utils/cn";
import { Texture } from "three";
import PlanetMesh from "./PlanetMesh";
import PlanetLabel from "./PlanetLabel";
import { Card, CardTitle } from "../../ui/card";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

interface PlanetCardProps extends ComponentProps<"div"> {
  planet: Planet;
  className?: string;
  textures: {
    [key: string]: {
      albedo: Texture;
      displacement: Texture;
      normal: Texture;
      roughness: Texture;
    };
  };
}

export default function PlanetCard({
  planet,
  className,
  textures,
  ...props
}: PlanetCardProps) {
  const [open, setOpen] = useState<boolean>(false);

  const getTextures = (
    terrain: string
  ): {
    albedo: Texture;
    displacement: Texture;
    normal: Texture;
    roughness: Texture;
  } => {
    const terrains = terrain.split(", ");
    let answer = textures.lava;
    terrains.forEach((terrain) => {
      if (terrain === "urban") {
        answer = textures.city;
      } else if (terrain === "desert") {
        answer = textures.desert;
      } else if (terrain === "volcanoes" || terrain === "lava rivers") {
        answer = textures.lava;
      } else if (terrain === "airless asteroid") {
        answer = textures.gasgiant;
      } else if (
        terrain === "oceans" ||
        terrain === "seas" ||
        terrain === "ocean"
      ) {
        answer = textures.ocean;
      } else if (terrain === "jungles" || terrain === "rainforests") {
        answer = textures.jungle;
      } else if (terrain === "glaciers" || terrain === "ice caves") {
        answer = textures.glaciar;
      } else if (terrain === "lakes" || terrain === "swamps") {
        answer = textures.islands;
      }
    });
    return answer;
  };

  const handleOpen = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };
  const currentTextures = getTextures(planet.terrain);

  return (
    <>
      <Card
        className={cn(
          className,
          "border-yellow-100 glowing-yellow-border md:w-[520px] min-w-[250px]  text-yellow-300 flex "
        )}
        {...props}
      >
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="w-full md:w-1/2 md:p-5 md:pr-0">
            <View style={{ width: "100%", height: 200 }}>
              <pointLight position={[-3, 2.5, 3]} intensity={100} />
              <pointLight position={[3, 2.5, 3]} intensity={50} />

              <ambientLight intensity={1} />

              <PlanetMesh
                map={currentTextures.albedo}
                roughnessMap={currentTextures.roughness}
                normalMap={currentTextures.normal}
                displacementMap={currentTextures.displacement}
              />
            </View>
          </div>

          <div className="md:w-1/2 w-full p-5 md:pl-0 h-full flex flex-col justify-between">
            <div className="flex flex-col items-start">
              <CardTitle className="-mt-5 md:mt-4">{planet.name}</CardTitle>
              <div className="flex flex-row flex-wrap gap-1 md:flex-col md:space-y-1 mt-4">
                <PlanetLabel label="Diameter" value={planet.diameter} />
                <PlanetLabel label="Terrain" value={planet.terrain} />
                <PlanetLabel label="Climate" value={planet.climate} />
                <PlanetLabel label="Population" value={planet.population} />
                {open ? (
                  <PlanetLabel label="Residents" value={planet.residents} />
                ) : null}
              </div>
              <p
                className="hover:cursor-pointer mt-2"
                onClick={(event) => {
                  handleOpen(event);
                }}
              >
                {open ? "view less" : "view more"}
              </p>
            </div>
            <div className="flex gap-4 justify-around md:justify-end items-end mt-5">
              <EditButton planet={planet} />
              <DeleteButton planet={planet} />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
