import { ReactElement, ElementType } from "react";
import "../index.css";

const TailwindProvider = (Component: any) => {
  const WrappedComponent = (props: any) => {
    return <Component {...props} />;
  };
  return WrappedComponent;
};

export default TailwindProvider;
