import TailwindProvider from "src/hoc/TailwindProvider";
import { buttonSizes, roundedClasses, variantClasses } from "./helper";

type SelfProps = {
  variant: "primary" | "no_bg";
  rounded?: "full" | "corners_rounded" | "normal";
  title?: string;
  onlyIcon?: boolean;
  size?: "medium" | "large" | "small" | "compact";
  icon?: any;
};

const Button = ({
  variant = "no_bg",
  onlyIcon = false,
  rounded = "normal",
  title,
  size = "medium",
  icon,
}: SelfProps) => {
  const elementToRender: any = !onlyIcon ? (
    title
  ) : title && icon ? (
    <div className="flex items-center">
      <div className="mr-3">{title}</div>
      <div>{icon}</div>
    </div>
  ) : title && !icon ? (
    title
  ) : !title && icon ? (
    icon
  ) : (
    ""
  );

  return (
    <button
      className={`${variantClasses[variant || "no_bg"]} ${
        buttonSizes[size || "medium"]
      } ${roundedClasses[rounded]}`}
    >
      {elementToRender}
    </button>
  );
};

export default TailwindProvider(Button);
