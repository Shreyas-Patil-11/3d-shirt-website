import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#8b22cd",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
