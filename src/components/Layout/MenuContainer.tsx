import { FC } from "react";
import { ReactNode } from "react";
import { Totals } from "../Totals/Totals";
import { OrderItem } from "../../types/dataSchema";

interface ContainerProps {
  MenuList: ReactNode;
  OrderContent: () => JSX.Element;
  order: OrderItem[];
  tip: number;
  setTip: (tip:number) => void;
  storeOrder: () => void;
}

export const Container: FC<ContainerProps> = ({ MenuList, OrderContent, order, tip,  setTip, storeOrder }) => {

  return (
    <main>
      <nav className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black mb-2 text-center">Menu</h2>
          <div className="space-y-3">{MenuList}</div>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-2 text-center">Order</h2>
          <div className="space-y-8 pl-10">
            <OrderContent/>
            <Totals order={order} tip={tip}  setTip={setTip} storeOrder={storeOrder}/>
          </div>
        </div>
      </nav>
    </main>
  );
};
