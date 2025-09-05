import TypeTransaction from "./type-transactio";
import { Button } from "./ui/button";

const MutasPage = () => {
  return (
    <div className="w-[944px] h-[563px] flex flex-col-1">
      <div className="m-6 pb-0 space-y-5">
        <div className="w-[300px] h-[142px] bg-[#292929] rounded-2xl p-5 space-y-2">
          <p className="text-white text-[12px]">Você está devendo</p>

          <p className="text-white text-[14px]">
            R$ <span className="text-[20px]">923.751.235</span>
          </p>

          <div className="w-[272px] h-[36px] flex space-x-2">
            <Button className="w-[260px] h-[38px] !bg-[#292929] border-1 border-gray-400/50 rounded-[5px] text-[12px]">
              Realizar pagamento total
            </Button>
          </div>
        </div>

        <div className="w-[300px] h-[97px] border-1 border-[#fff]/25 rounded-2xl p-6">
          <div className="w-[138px] h-[37px]">
            <p className="text-white text-[12px]">Saldo disponível</p>

            <p className="text-white text-[14px]">
              R$ <span className="text-[20px]">923.751.235</span>
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[157px] border-1 border-gray-400/50 rounded-2xl  mb-0 p-8 space-y-2">
          <p className="text-white text-[12px]">Pagar multas</p>
          <p className="text-white/35 text-[10px]">
            Pague o valor que desejar e reduza o saldo negativo!
          </p>
          <div className="w-[240px] h-[28px] justify-between items-center flex gap-2">
            <input
              type="text"
              className="w-[171px] h-[28px] bg-[#000]/38 rounded-[5px]"
            />
            <Button className="w-[59px] h-[28px] !bg-[#fff]/10 rounded-[5px] text-[12px]">
              PAGAR
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[564px] h-[503px] m-6 space-y-5 bg-gradient-to-t from-[#292929] to-[#292929]/0 rounded-2xl ">
        <div className="flex justify-between flex-col p-5">
          <p className="text-white text-[12px]">Multas Recebidas</p>
          <div className="w-[236px] h-[28px] pt-2 space-x-2">
            <Button className="w-[72px] h-[28px] !bg-[#fff]/10 rounded-[5px] font-[300]">
              Hoje
            </Button>
            <Button className="w-[72px] h-[28px] !bg-[#fff]/10 rounded-[5px] font-[300]">
              5 dias
            </Button>
            <Button className="w-[72px] h-[28px] !bg-[#fff]/10 rounded-[5px] font-[300]">
              30 dias
            </Button>
          </div>
        </div>
        <div className="w-[524px] h-[392px] ml-6 space-y-4">
          <p className="text-white/55 text-[11px]">Hoje</p>
          <div className="w-[524px] h-[177px] flex flex-col space-y-3">
            {/* Trasferencias */}
            <div className="w-[524px] h-[35px] flex space-x-3">
              <TypeTransaction
                type={"multas"}
                date={"11/09/2023 ás 15:15"}
                amount={525627}
                width={"w-[300px]"}
              />
            </div>
            <div className="w-[524px] h-[35px] flex space-x-3">
              <TypeTransaction
                type={"multas"}
                date={"11/09/2023 ás 15:15"}
                amount={525627}
                width={"w-[300px]"}
              />
            </div>
            <div className="w-[524px] h-[35px] flex space-x-3">
              <TypeTransaction
                type={"multas"}
                date={"11/09/2023 ás 15:15"}
                amount={525627}
                width={"w-[300px]"}
              />
            </div>
            <div className="w-[524px] h-[35px] flex space-x-3">
              <TypeTransaction
                type={"multas"}
                date={"11/09/2023 ás 15:15"}
                amount={525627}
                width={"w-[300px]"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutasPage;
