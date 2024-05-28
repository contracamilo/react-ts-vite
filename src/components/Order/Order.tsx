import { FC } from "react";
import { OrderItem } from "../../types/dataSchema";
import { currencyFormatter } from "../../Helpers";
import Button from "../Button/Button";

interface OrderProps {
  order: OrderItem[];
  removeItemFromOrder: (id: number) => void;
}

export const Order: FC<OrderProps> = ({ order, removeItemFromOrder }) => {

  return (
    <>
      <div className="flex justify-between">
        <p className="font-black">QTY:</p>
        <p className="font-black">ORDER</p>
      </div>
      <div>
        {order.length === 0 ? (
          <p>No items in order</p>
        ) : (
          order.map((item) => (
            <div key={item.id} className="flex justify-between mb-2 border border-dashed p-5 border-slate-300 rounded-lg">
              <p className="font-black">{item.quantity} </p>
              <div className="flex justify-between items-center content-center">
                <p>
                  {item.name} {currencyFormatter(item.price)}
                </p>
                <Button
                  styles={
                    "bg-red-600 h-7 w-7 rounded-full text-white font-black ml-2 font-light lh-0 p-0"
                  }
                  onClick={() => removeItemFromOrder(item.id)}
                >
                  x
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
