import { useEffect, useRef, useState } from "react";
import { popperBehaviorClass, popperPositionClass } from "./helper";
import { useOutsideClick } from "utility/hooks";

type SelfProps = {
  trigger: any;
  behavior: "dropdown" | "content_modal" | "full_modal";
  content: any;
};

export default ({ behavior = "dropdown", trigger, content }: SelfProps) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState<string[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    setShow(false);
  });

  const handleOpen = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (containerRef.current && !position && behavior === "dropdown") {
      triggerRef.current?.clientHeight;
      const offsetLeft = containerRef.current.offsetLeft;
      const offsetTop = containerRef.current.offsetTop;
      const windowInnerWidth = window.innerWidth;
      const windowInnerHeight = window.innerHeight;

      const offsetLeftPercentage = (offsetLeft / windowInnerWidth) * 100;
      const offsetTopPercentage = (offsetTop / windowInnerHeight) * 100;

      let horizontalPosition = "";
      let verticalPosition = "";
      if (offsetLeftPercentage > 70) {
        // right = 0
        horizontalPosition = "right";
      } else if (offsetLeftPercentage > 30 || offsetLeftPercentage < 70) {
        // middle
        horizontalPosition = "middle";
      } else {
        // left = 0
        horizontalPosition = "left";
      }

      if (offsetTopPercentage > 70) {
        verticalPosition = "top";
      } else {
        verticalPosition = "bottom";
      }

      setPosition([horizontalPosition, verticalPosition]);
    }
  }, [containerRef]);

  useEffect(() => {
    if (position?.length && popperRef?.current && triggerRef?.current) {
      const popperPosition = position[1] === "bottom" ? "top" : "bottom";
      popperRef.current.style[popperPosition] = popperPositionClass(
        position || [],
        triggerRef?.current?.clientHeight || 0
      )[1];
    }
  }, [position, popperRef, triggerRef, show]);

  return (
    <div className="w-auto max-w-full relative" ref={containerRef}>
      <div
        className="w-auto max-w-full cursor-pointer"
        ref={triggerRef}
        onClick={handleOpen}
      >
        {trigger}
      </div>
      {show && (
        <div
          className={`${
            popperBehaviorClass(triggerRef?.current?.clientHeight || 0)[
              behavior
            ]
          } ${
            popperPositionClass(
              position || [],
              triggerRef?.current?.clientHeight || 0
            )[0]
          }`}
          ref={popperRef}
        >
          {content}
        </div>
      )}
    </div>
  );
};
