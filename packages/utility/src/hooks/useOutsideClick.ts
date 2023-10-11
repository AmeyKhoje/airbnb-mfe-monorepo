import { RefObject, useEffect } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Function) => {
  const handleClick = (event: any) => {
    console.log(event, ref.current, ref?.current.contains(event?.target));

    if (ref?.current && !ref.current.contains(event?.target)) {
      console.log("in");

      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useOutsideClick;
