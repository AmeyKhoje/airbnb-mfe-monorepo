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
    if (position?.length && triggerRef.current) {
      console.log(
        popperPositionClass(position, triggerRef.current.clientHeight)
      );
    }
  }, [position, triggerRef]);

  return (
    <div className="w-auto max-w-full relative" ref={containerRef}>
      <div className="w-auto max-w-full" ref={triggerRef} onClick={handleOpen}>
        {trigger}
      </div>
      {show && (
        <div
          className={`${
            popperBehaviorClass(triggerRef?.current?.clientHeight || 0)[
              behavior
            ]
          } ${popperPositionClass(
            position || [],
            triggerRef?.current?.clientHeight || 0
          )} top-[3.5rem]`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
