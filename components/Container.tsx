import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {}

const Container = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Container;
