import { ArrowRightFromLine } from "lucide-react";
import { useMemo } from "react";

type PageKey = "dashboard" | "pix" | "coins" | "folha";

type MenuLeftProps = {
  page: PageKey;
  onChangePage: (p: PageKey) => void;
};

const MenuLeft = ({ page, onChangePage }: MenuLeftProps) => {
  // Se quiser evitar repetição, monta a lista:
  const items = useMemo(
    () =>
      [
        {
          key: "dashboard",
          src: "./Dashboard.svg",
          activeSrc: "./DashboardWhite.svg",
          alt: "Dashboard",
        },
        {
          key: "pix",
          src: "./Pix.svg",
          activeSrc: "./PixWhite.svg",
          alt: "Pix",
        },
        {
          key: "coins",
          src: "./Coins.svg",
          activeSrc: "./CoinsWhite.svg",
          alt: "Coins",
        },
        {
          key: "folha",
          src: "./Folha.svg",
          activeSrc: "./FolhaWhite.svg",
          alt: "Folha",
        },
      ] as const,
    []
  );

  return (
    <div className="flex flex-col w-[70px] h-[563px] border border-gray-400/50">
      <div className="m-5 space-y-5 flex flex-col items-center w-[25px]">
        {items.map((it) => (
          <img
            key={it.key}
            src={page === it.key ? it.activeSrc : it.src}
            alt={it.alt}
            className="w-full cursor-pointer"
            onClick={() => onChangePage(it.key)}
          />
        ))}
      </div>

      <div className="m-5 space-y-5 flex justify-center items-center w-[25px] mt-auto">
        <ArrowRightFromLine className="text-white" />
      </div>
    </div>
  );
};

export default MenuLeft;
