import { FC } from "react";
import { MenuItem } from "../../types";
import Button from "../Button/Button";

interface MenuItemProps {
  item: MenuItem;
  onClick?: () => void;
}

const MenuItemBox: FC<MenuItemProps> = ({ item }) => {
  return (
    <Button
      onClick={() => {}}
      styles={
        "border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg"
      }
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </Button>
  );
};

export default MenuItemBox;
