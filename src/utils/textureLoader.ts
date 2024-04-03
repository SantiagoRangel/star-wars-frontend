import { TextureLoader } from "three";
const loader = new TextureLoader();
const cityColorMap = loader.load("/textures/city/albedo.png");
const cityDisplacementMap = loader.load("/textures/city/displacement.png");
const cityNormalMap = loader.load("/textures/city/normal.png");
const cityRoughnessMap = loader.load("/textures/city/roughness.png");
const desertColorMap = loader.load("/textures/desert/albedo.png");
const desertDisplacementMap = loader.load("/textures/desert/displacement.png");
const desertNormalMap = loader.load("/textures/desert/normal.png");
const desertRoughnessMap = loader.load("/textures/desert/roughness.png");
const gasgiantColorMap = loader.load("/textures/gasgiant/albedo.png");
const gasgiantDisplacementMap = loader.load(
  "/textures/gasgiant/displacement.png"
);
const gasgiantNormalMap = loader.load("/textures/gasgiant/normal.png");
const gasgiantRoughnessMap = loader.load("/textures/gasgiant/roughness.png");
const glaciarColorMap = loader.load("/textures/glaciar/albedo.png");
const glaciarDisplacementMap = loader.load(
  "/textures/glaciar/displacement.png"
);
const glaciarNormalMap = loader.load("/textures/glaciar/normal.png");
const glaciarRoughnessMap = loader.load("/textures/glaciar/roughness.png");
const islandsColorMap = loader.load("/textures/islands/albedo.png");
const islandsDisplacementMap = loader.load(
  "/textures/islands/displacement.png"
);
const islandsNormalMap = loader.load("/textures/islands/normal.png");
const islandsRoughnessMap = loader.load("/textures/islands/roughness.png");
const jungleColorMap = loader.load("/textures/jungle/albedo.png");
const jungleDisplacementMap = loader.load("/textures/jungle/displacement.png");
const jungleNormalMap = loader.load("/textures/jungle/normal.png");
const jungleRoughnessMap = loader.load("/textures/jungle/roughness.png");
const lavaColorMap = loader.load("/textures/lava/albedo.png");
const lavaDisplacementMap = loader.load("/textures/lava/displacement.png");
const lavaNormalMap = loader.load("/textures/lava/normal.png");
const lavaRoughnessMap = loader.load("/textures/lava/roughness.png");
const oceanColorMap = loader.load("/textures/ocean/albedo.png");
const oceanDisplacementMap = loader.load("/textures/ocean/displacement.png");
const oceanNormalMap = loader.load("/textures/ocean/normal.png");
const oceanRoughnessMap = loader.load("/textures/ocean/roughness.png");

export const textures = {
  city: {
    albedo: cityColorMap,
    displacement: cityDisplacementMap,
    normal: cityNormalMap,
    roughness: cityRoughnessMap,
  },
  desert: {
    albedo: desertColorMap,
    displacement: desertDisplacementMap,
    normal: desertNormalMap,
    roughness: desertRoughnessMap,
  },
  gasgiant: {
    albedo: gasgiantColorMap,
    displacement: gasgiantDisplacementMap,
    normal: gasgiantNormalMap,
    roughness: gasgiantRoughnessMap,
  },
  glaciar: {
    albedo: glaciarColorMap,
    displacement: glaciarDisplacementMap,
    normal: glaciarNormalMap,
    roughness: glaciarRoughnessMap,
  },
  islands: {
    albedo: islandsColorMap,
    displacement: islandsDisplacementMap,
    normal: islandsNormalMap,
    roughness: islandsRoughnessMap,
  },
  jungle: {
    albedo: jungleColorMap,
    displacement: jungleDisplacementMap,
    normal: jungleNormalMap,
    roughness: jungleRoughnessMap,
  },
  lava: {
    albedo: lavaColorMap,
    displacement: lavaDisplacementMap,
    normal: lavaNormalMap,
    roughness: lavaRoughnessMap,
  },
  ocean: {
    albedo: oceanColorMap,
    displacement: oceanDisplacementMap,
    normal: oceanNormalMap,
    roughness: oceanRoughnessMap,
  },
};
