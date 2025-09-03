import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  FileText,
} from "lucide-react";

type TypeTransactionProps = {
  type: string;
  date: string;
  amount: number;
  width?: string;
};

const TypeTransaction = ({
  type,
  date,
  amount,
  width = "w-[77px]",
}: TypeTransactionProps) => {
  let iconSelect: React.ElementType = () => null;
  let title = "";
  let textColor = "";

  if (type === "transferencia") {
    iconSelect = ArrowRightLeft;
    title = "Transferência";
    textColor = "text-[#FF615C]";
  } else if (type === "saque") {
    iconSelect = ArrowUpRight;
    title = "Saque";
    textColor = "text-[#FF615C]";
  } else if (type === "deposito") {
    iconSelect = ArrowDownLeft;
    title = "Deposito";
    textColor = "text-[#02BC77]";
  } else if (type === "multas") {
    iconSelect = FileText;
    title = "Multas";
    textColor = "text-[#FF615C]";
  }

  const Icon = iconSelect;

  return (
    <>
      <div className="w-[35px] h-[35px] border border-gray-400/50 rounded-[10px] flex justify-center items-center">
        <Icon className={textColor} />
      </div>

      <div className="w-[117px] h-[35px] flex flex-col">
        <div className="w-[97px] h-[35px] flex justify-center flex-col">
          <p className="text-white text-[11px]">{title}</p>
          <p className="text-white/55 text-[9px]">{date}</p>
        </div>
      </div>

      <div className={`${width} h-[35px] flex justify-end items-center`}>
        <p className={`${textColor} text-[11px]`}>
          R$ {amount.toLocaleString()}
        </p>
      </div>
    </>
  );
};

export default TypeTransaction;
