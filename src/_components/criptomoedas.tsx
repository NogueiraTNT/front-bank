import { TableCripto } from "./cripto-table";

const Criptomoedas = () => {
  return (
    <div className="m-6 space-y-5">
      <div className="w-[884px] h-[66px] bg-[#ffffff]/10 rounded-[15px]">
        <p className="text-white text-[12px] p-5 pb-0">Criptomoedas</p>
        <p className="text-white/35 text-[12px] pl-5">
          Analise o mercado, compre e venda moedas e consiga lucros!
        </p>
      </div>
      <div className="w-[884px] h-[417px] border-1 border-gray-400/50 rounded-2xl">
        <TableCripto />
      </div>
    </div>
  );
};

export default Criptomoedas;
