import { RefObject, useEffect } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Function) => {
  const handleClick = (event: any) => {
    if (ref?.current && !ref.current.contains(event?.target)) {
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
