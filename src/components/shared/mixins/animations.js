export const moveInRigth = () =>
  `
  @keyframes moveInRight
  {
    0% {
      opacity:0;
      transform: translateX(100px);
  }
    80% {
      transform: translateX(-10px);
  }
    100% {
      opacity: 1;
      transform: translate(0);
    } 
}
  `
export const moveInBottom = () =>
  `
  @keyframes moveInBottom
  {
    0% {
      opacity: 0;
      transform: translateY(30px);
  }
  
    100% {
      opacity: 1;
      transform: translate(0);
    } 
}
  `
