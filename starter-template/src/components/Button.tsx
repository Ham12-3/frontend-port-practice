import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secndary" | "text";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, ...rest } = props;
  return (
    <button className={twMerge("", className)} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
