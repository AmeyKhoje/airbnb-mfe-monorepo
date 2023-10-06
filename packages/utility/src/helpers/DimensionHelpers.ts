const convertViewportWidthToPixel = (viewPortUnit: number = 0.525) => {
  if (window) {
    const windowWidth = window.innerWidth;
    const pixel = (viewPortUnit * windowWidth) / 100;
    return pixel;
  }
  return null;
};

export { convertViewportWidthToPixel };
