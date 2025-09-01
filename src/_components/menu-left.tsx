import { ArrowRightFromLine } from "lucide-react";
import Center from "./center";
import { useState } from "react";

type PageKey = "dashboard" | "pix" | "coins" | "folha";

const MenuLeft = () => {
  const [page, setPage] = useState<PageKey>("dashboard");

  const pageSelect = (namePageRender: PageKey) => {
    setPage(namePageRender);
  };
  return (
    <div className="flex">
      <div className="flex flex-col w-[70px] h-[563px] border-1 border-gray-400/50">
        <div className="m-5 space-y-5 justify-center items-cente w-[25px]">
          <img
            src="./Dashboard.svg"
            alt="Dashboard"
            className="w-full"
            onClick={() => pageSelect("dashboard")}
          />
          <img
            src="./Pix.svg"
            alt="Pix"
            className="w-full"
            onClick={() => pageSelect("pix")}
          />
          <img
            src="./Coins.svg"
            alt="Coins"
            className="w-full"
            onClick={() => pageSelect("coins")}
          />
          <img
            src="./Folha.svg"
            alt="Folha"
            className="w-full"
            onClick={() => pageSelect("folha")}
          />
        </div>
        <div className="m-5 space-y-5 justify-center items-cente w-[25px] mt-auto">
          <ArrowRightFromLine className="text-white" />
        </div>
      </div>
      <Center key={page} page={page} />
    </div>
  );
};

export default MenuLeft;
