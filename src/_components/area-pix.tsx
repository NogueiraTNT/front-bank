import ButtonCreatePIX from "./button-create-pix";
import ButtonSaque from "./button-saque";
import ChavePix from "./chave-pisx";
import TypeTransaction from "./type-transactio";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

const PixArea = () => {
  return (
    <div className="w-[944px] h-[563px] flex flex-col-1">
      <div className="m-6 pb-0 space-y-5">
        <div className="w-[300px] h-[142px] bg-[#292929] rounded-2xl p-5 space-y-2">
          <p className="text-white text-[12px]">Saldo Disponível</p>

          <p className="text-white text-[14px]">
            R$ <span className="text-[20px]">923.751.235</span>
          </p>

          <div className="w-[272px] h-[36px] flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-[260px] h-[38px] !bg-[#292929] border-1 border-gray-400/50 rounded-[5px] font-[200]">
                  Realizar Transferência
                </Button>
              </DialogTrigger>
              <ButtonSaque title={"PIX"} />
            </Dialog>
          </div>
        </div>
        <div className="w-[300px] h-[341px] border-1 border-gray-400/50 rounded-2xl  mb-0 p-8 space-y-2">
          <p className="text-white text-[12px]">Minhas chaves Pix</p>
          <div className="w-[240px] h-[181px] mb-10">
            <ChavePix />
          </div>
          <div className="w-[240px] h-[38px]  mt-auto mb-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-[240px] h-[38px] !bg-[#292929] rounded-[5px] font-[200]">
                  Cadastrar chave PIX
                </Button>
              </DialogTrigger>
              <ButtonCreatePIX />
            </Dialog>
          </div>
        </div>
      </div>
      <div className="w-[564px] h-[503px] m-6 space-y-5 bg-gradient-to-t from-[#292929] to-[#292929]/0 rounded-2xl ">
        <div className="flex justify-between flex-col p-5">
          <p className="text-white text-[12px]">Transações</p>
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
                type={"transferencia"}
                date={"11/09/2023 ás 15:15"}
                amount={525627}
                width={"w-[300px]"}
              />
            </div>
            {/* Saque */}

            <div className="w-[524px] h-[35px] flex space-x-3">
              <TypeTransaction
                type={"saque"}
                date={"11/09/2023 ás 15:15"}
                amount={105626}
                width={"w-[300px]"}
              />
            </div>
            {/* Deposito */}

            <div className="w-[524px] h-[35px] flex space-x-3">
              <TypeTransaction
                type={"deposito"}
                date={"11/09/2023 ás 15:15"}
                amount={75893}
                width={"w-[300px]"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixArea;
