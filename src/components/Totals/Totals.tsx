import Button from "../Button/Button";
import { OrderItem } from "../../types/dataSchema";
import { FC, useMemo } from "react";
import { currencyFormatter } from "../../Helpers";
import { TipForm } from "..";

type TotalsProps = {
  order: OrderItem[];
  tip: number;
  setTip: (tip:number) => void;
  storeOrder: () => void;
};

export const Totals: FC<TotalsProps> = ({ order, tip, setTip, storeOrder }) => {

  const subtotalAmount = useMemo(
    () => order?.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => (subtotalAmount * tip), [tip, subtotalAmount]);
  const grandTotal = subtotalAmount + tipAmount;

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totals & Tips</h2>
        <p>
          Subtotal to pay: <span className="font-black">{currencyFormatter(subtotalAmount)}</span>
        </p>
        <p>
          Tip: <span className="font-black">{currencyFormatter(tipAmount)}</span>
        </p>
        <TipForm tip={tip} setTip={setTip}/>
        <p>
          Total to pay: <span className="font-black">{currencyFormatter(grandTotal)}</span>
        </p>
      </div>
      <Button 
        styles={"bg-black w-full p-3 text-white font-bold mt-10 rounded-lg disabled:bg-gray-300"}
        disabled={order.length === 0}
        onClick={storeOrder}
        >
        Store order
      </Button>
    </>
  );
};
