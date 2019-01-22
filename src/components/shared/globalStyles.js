import { createGlobalStyle } from "styled-components";
import { TheWoodlands } from "../fonts";

export default createGlobalStyle`

  @font-face {
    font-family: "TheWoodlands";
    font-style: normal;
    font-weight: normal;
    src: local("TheWoodlands"), url(${TheWoodlands}) format("opentype");
  }`