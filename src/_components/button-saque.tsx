import { Button } from "./ui/button";
import { DialogClose, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";

interface ButtonSaqueProps {
  title: string;
}

const ButtonSaque = (props: ButtonSaqueProps) => {
  let sizeDialog = "";
  let sizeDiv = "";
  if (props.title === "PIX") {
    sizeDialog = "w-[403px] h-[294px]";
    sizeDiv = "w-[363px] h-[244px]";
  } else {
    sizeDialog = "w-[403px] h-[225px]";
    sizeDiv = "w-[363px] h-[185px]";
  }

  return (
    <form>
      <DialogContent
        className={`${sizeDialog} flex flex-col items-center justify-center bg-[#131313]`}
      >
        <div className={`${sizeDiv} border-1 border-[#fff]/25 rounded-[8px]`}>
          <div className="flex justify-center border-b-1 h-[43px] items-center border-[#fff]/25">
            <p className="text-white font-[500] text-[16px]">{props.title}</p>
          </div>
          <div className="h-[142px] flex flex-col items-center p-5  space-y-2">
            {props.title === "PIX" && (
              <div className="flex flex-col items-center">
                <p className="text-white text-[12px]">
                  Para quem quer transferir?
                </p>
                <Input
                  className="mt-2 w-[229px] h-[36px] border-0 bg-[#000]/38 rounded-[5px] text-white"
                  placeholder="PIX"
                  type="text"
                />
              </div>
            )}
            <p className="text-white text-[12px]">Digite o valor desejado</p>
            <Input
              className="mt-2 w-[229px] h-[36px] border-0 bg-[#000]/38 rounded-[5px] text-white"
              placeholder="R$"
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

export default ButtonSaque;
