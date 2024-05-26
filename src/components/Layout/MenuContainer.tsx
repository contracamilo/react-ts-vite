import { FC } from "react";
import { ReactNode } from "react";

interface ContainerProps {
  MenuList: ReactNode;
  CheckList: ReactNode;
}

export const Container: FC<ContainerProps> = ({ MenuList, CheckList }) => {
  return (
    <main>
      <nav className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black mb-2">Menu</h2>
          <div className="space-y-3">{MenuList}</div>
        </div>
        <div>
          <h2 className="text-3xl font-black  mb-2">Check</h2>
          <div className="space-y-3">{CheckList}</div>
        </div>
      </nav>
    </main>
  );
};
