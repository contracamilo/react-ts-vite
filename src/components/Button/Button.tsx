import { FC, ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  styles: string;
};

const Button: FC<ButtonProps> = ({ onClick, children, styles }) => {
  return <button className={styles} onClick={onClick}>{children}</button>;
};

export default Button;
