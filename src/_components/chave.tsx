import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog } from "./ui/dialog";
import ButtonTrashPIX from "./button-trash";

const Chave = () => {
  return (
    <>
      <div className="flex items-center pl-20">
        <p className="text-white text-[12px]">RACCOPIX</p>
      </div>
      <div className="flex items-center p-2">
        <Dialog>
          <DialogTrigger asChild>
            <img
              src="./Trash.svg"
              alt="lixeira"
              className="w-[11.25px] h-[12.19px]"
            />
          </DialogTrigger>
          <ButtonTrashPIX pix={"RACCOPIX"} />
        </Dialog>
      </div>
    </>
  );
};

export default Chave;
