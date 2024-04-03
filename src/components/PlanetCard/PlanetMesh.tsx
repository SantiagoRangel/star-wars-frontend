import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Texture } from "three";

interface PlanetMeshProps {
  rotationSpeed?: number;
  displacementMap?: Texture;
  normalMap?: Texture;
  roughnessMap?: Texture;
  map?: Texture;
}

export default function PlanetMesh({
  rotationSpeed = 0.005,
  roughnessMap,
  displacementMap,
  normalMap,
  map,
}: PlanetMeshProps) {
  const planetRef = useRef<Mesh>(null!);

  useFrame(() => {
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh scale={1.8} ref={planetRef}>
      <sphereGeometry />
      <meshStandardMaterial
        map={map}
        roughnessMap={roughnessMap}
        displacementMap={displacementMap}
        displacementScale={0.15}
        normalMap={normalMap}
        metalness={0}
        roughness={0.2}
      />
    </mesh>
  );
}
