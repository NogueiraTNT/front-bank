import { Button } from "./ui/button";
import { DialogClose, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";

const ButtonCreatePIX = () => {
  return (
    <form>
      <DialogContent className="w-[403px] h-[225px] flex flex-col items-center justify-center bg-[#131313]">
        <div className="w-[363px] h-[1185px] border-1 border-[#fff]/25 rounded-[8px]">
          <div className="flex justify-center border-b-1 h-[43px] items-center border-[#fff]/25">
            <p className="text-white font-[500] text-[16px]">CADASTRAR CHAVE</p>
          </div>
          <div className="h-[142px] flex flex-col items-center p-5  space-y-2">
            <p className="text-white text-[12px] font-[200]">
              DIGITE UMA CHAVE ÚNICA
            </p>
            <Input
              className="mt-2 w-[229px] h-[36px] border-0 bg-[#000]/38 rounded-[5px] text-white"
              type="text"
            />
            <div className="flex gap-2">
              <DialogClose asChild>
                <Button className="w-[102px] h-[33px] !bg-[#fff]/3 font-[200]">
                  CANCELAR
                </Button>
              </DialogClose>
              <Button
                className="w-[102px] h-[33px] !bg-[#fff]/10 font-[200]"
                type="submit"
              >
                CONFIRMAR
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </form>
  );
};

export default ButtonCreatePIX;
