import { ChartLineDefault } from "./chart-area-default";
import { Button } from "./ui/button";
import { Circle } from "lucide-react";

type PageKey = "dashboard" | "pix" | "coins" | "folha";

interface CenterProps {
  page: PageKey;
}

const Center = ({ page }: CenterProps) => {
  if (page === "dashboard") {
    return (
      <div className="w-[944px] h-[563px] flex flex-col-1">
        <div className="m-6">
          <div className="w-[332px] h-[160px] border-1 border-b-0 border-gray-400/50 rounded-2xl  mb-0 p-6 space-y-2">
            <p className="text-white text-[12px]">Seu Saldo Bancario</p>

            <p className="text-white text-[14px]">
              R$ <span className="text-[20px]">923.751.235</span>
            </p>

            <div className="w-[272px] h-[36px] flex space-x-2">
              <Button className="w-[40px] h-[36px]  !bg-[#292929] rounded-[5px]">
                <img src="./Mao.svg" alt="Sacar" />
              </Button>
              <Button className="w-[40px] h-[36px] !bg-[#292929] rounded-[5px]">
                <img src="./Pig.svg" alt="Depositar" />
              </Button>
              <Button className="w-[172px] h-[36px] !bg-[#292929] rounded-[5px]">
                <img src="./PixWhite.svg" alt="Pix" />
              </Button>
            </div>
          </div>
          <div className="w-[332px] h-[160px] border-1 border-t-0 border-gray-400/50 rounded-2xl mt-0 p-6 space-y-2">
            <p className="text-white text-[12px]">Seu Saldo Bancario</p>
            <p className="text-gray-400/50 text-[10px] ">
              Visualize, gerencie e pague suas multas aqui.
            </p>
            <div className="w-[272px] h-[28px] border-1 border-gray-400/50 rounded-[5px] items-center flex">
              <p className="text-gray-400/50 text-[10px] pl-3">VALOR</p>
              <p className="text-white text-[10px] pl-13">
                R$ <span>966.000.000</span>
              </p>
            </div>

            <div className="w-[171px] h-[28px] rounded-[5px] items-center bg-black/38 flex justify-between space-x-2.5">
              <input type="text" className="w-[171px] h-[28px]" />
              <Button className="w-[91px] h-[28px] !bg-[#292929] rounded-[5px]">
                PAGAR
              </Button>
            </div>
          </div>
          <div className="w-[332px] h-[160px] rounded-2xl mt-5">
            <ChartLineDefault />
          </div>
        </div>
        <div className="w-[236px] h-[503px] mt-6 space-y-5">
          <div className="w-[236px] h-[403px] bg-[#292929] rounded-2xl items-center flex flex-col">
            <div className="pt-5 w-[196px] h-[257px]">
              <img src="./Card.png" alt="" />
            </div>
            <div className="w-[196px] h-[91px] items-center flex flex-col  mt-7">
              <div className="items-center flex flex-col">
                <div className="flex items-center gap-1">
                  <Circle size={6} className="bg-[#02BC77] rounded-full" />
                  <p className="text-white/35 text-[12px]">Entradas</p>
                </div>
                <p className="text-white text-[12px] font-bold">R$7.234</p>
              </div>

              <div className="items-center flex flex-col">
                <div className="flex items-center gap-1">
                  <Circle size={6} className="bg-[#FF615C] rounded-full" />
                  <p className="text-white/35 text-[12px]">Saídas</p>
                </div>
                <p className="text-white text-[12px] font-bold">R$7.234</p>
              </div>

              <div className="items-center flex flex-col">
                <div className="flex items-center gap-1">
                  <Circle size={6} className="bg-[#FFFFFF] rounded-full" />
                  <p className="text-white/35 text-[12px]">
                    Valores depositado
                  </p>
                </div>
                <p className="text-white text-[12px] font-bold">R$7.234</p>
              </div>
            </div>
          </div>
          <div className="w-[236px] h-[80px] border-1 border-gray-400/50 rounded-2xl flex items-center justify-center">
            <Button className="w-[172px] h-[36px] !bg-[#292929] rounded-[5px]">
              <img src="./Cripto.svg" alt="Pix" />
              Ver Criptomoedas
            </Button>
          </div>
        </div>
        <div className="w-[276px] h-[503px] m-6 space-y-5 border-1 border-gray-400/50 rounded-2xl ">
          <div className="flex justify-between flex-col p-5">
            <p className="text-white text-[12px]">Transações</p>
            <div className="w-[236px] h-[28px] pt-2 space-x-2">
              <Button className="w-[72px] h-[28px] !bg-[#292929] rounded-[5px]">
                Hoje
              </Button>
              <Button className="w-[72px] h-[28px] !bg-[#292929] rounded-[5px]">
                5 dias
              </Button>
              <Button className="w-[72px] h-[28px] !bg-[#292929] rounded-[5px]">
                30 dias
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render bem simples pros outros, só pra ver funcionando
  return (
    <div className="w-full  p-6">
      <h2 className="text-2xl font-semibold capitalize">
        {page.replace("-", " ")}
      </h2>
      <p className="text-sm text-muted-foreground">
        Conteúdo da página “{page}”.
      </p>
    </div>
  );
};

export default Center;
