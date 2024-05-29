import { FC, ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  styles: string;
};

const Button: FC<ButtonProps> = ({ onClick, children, styles, disabled }) => {
  return (
    <button className={styles} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
