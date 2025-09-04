import { Button } from "./ui/button";
import { DialogClose, DialogContent } from "./ui/dialog";

interface ButtonTrashPIXProps {
  pix: string;
}

const ButtonTrashPIX = (props: ButtonTrashPIXProps) => {
  return (
    <form>
      <DialogContent className="w-[403px] h-[179px] flex flex-col items-center justify-center bg-[#131313]">
        <div className="w-[363px] h-[139px] border-1 border-[#fff]/25 rounded-[8px]">
          <div className="flex justify-center border-b-1 h-[43px] items-center border-[#fff]/25">
            <p className="text-white font-[500] text-[16px]">
              Apagar chave PIX
            </p>
          </div>
          <div className="h-[142px] flex flex-col items-center p-5  space-y-2">
            <p className="text-white text-[12px] font-[200]">
              Deseja apagar essa chave PIX? {props.pix}
            </p>
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

export default ButtonTrashPIX;
