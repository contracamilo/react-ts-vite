import { FC } from "react";
import { tipOptions } from "../../api/db";

type TipFormProps = {
  tip: number;
  setTip: (tip: number) => void;
};

export const TipForm: FC<TipFormProps> = ({ setTip, tip }) => {
  return (
    <div>
      <h3></h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2 mb-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              name={"tipOption"}
              id={tipOption.id}
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
