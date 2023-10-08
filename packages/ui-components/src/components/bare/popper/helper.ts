import { convertViewportWidthToPixel } from "utility/helpers";

const popperBehaviorClass = (height: number = 0) => ({
  dropdown: `absolute top-[${height}px]`,
  content_modal:
    "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  full_modal:
    "fixed top-[1rem] height-[calc(100vh - 1rem)] left-[50%] translate-x-[-50%]",
});

const popperPositionClass = (
  positionArray: string[],
  triggerHeight: number
) => {
  if (positionArray.length && triggerHeight) {
    const hPos = positionArray[0];
    const vPos = positionArray[1];

    const horizontalClasses: any = {
      left: "left-0",
      right: "right-0",
      middle: "translate-x-[-50%] left-[50%]",
    };

    const oneRemValueToPixel = convertViewportWidthToPixel();
    const topBasedOnHeight = triggerHeight / oneRemValueToPixel;

    const verticalClasses: any = {
      top: `bottom-[${topBasedOnHeight}rem]`,
      bottom: `top-[${topBasedOnHeight}rem]`,
    };

    return [`${horizontalClasses[hPos]}`, `${topBasedOnHeight + 0.5}rem`];
  } else return "";
};

export { popperBehaviorClass, popperPositionClass };
