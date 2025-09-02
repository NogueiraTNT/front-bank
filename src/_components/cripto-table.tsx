import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/ui/table";
import { Button } from "./ui/button";

const invoices = [
  {
    criptoIcon: (
      <div className="w-[35px] h-[35px] border-1 border-[#ffffff] rounded-[10px] flex items-center justify-center">
        <img src="./Cripto.svg" alt="cripto" />
      </div>
    ),
    carteira: "0.00000000",
    preco: "R$149.249,50",
    oneH: "-0,16%",
    DayH: "-1,83%",
    sevenDay: "-4,59%",
    button: (
      <Button className="w-[91px] h-[23px] !bg-[#fff]/10 text-[12px]">
        Negociar
      </Button>
    ),
  },
  {
    criptoIcon: (
      <div className="w-[35px] h-[35px] border-1 border-[#ffffff] rounded-[10px] flex items-center justify-center">
        <img src="./Cripto.svg" alt="cripto" />
      </div>
    ),
    carteira: "0.00000000",
    preco: "R$149.249,50",
    oneH: "-0,16%",
    DayH: "-1,83%",
    sevenDay: "-4,59%",
    button: (
      <Button className="w-[91px] h-[23px] !bg-[#fff]/10 text-[12px]">
        Negociar
      </Button>
    ),
  },
  {
    criptoIcon: (
      <div className="w-[35px] h-[35px] border-1 border-[#ffffff] rounded-[10px] flex items-center justify-center">
        <img src="./Cripto.svg" alt="cripto" />
      </div>
    ),
    carteira: "0.00000000",
    preco: "R$149.249,50",
    oneH: "-0,16%",
    DayH: "-1,83%",
    sevenDay: "-4,59%",
    button: (
      <Button className="w-[91px] h-[23px] !bg-[#fff]/10 text-[12px]">
        Negociar
      </Button>
    ),
  },
  {
    criptoIcon: (
      <div className="w-[35px] h-[35px] border-1 border-[#ffffff] rounded-[10px] flex items-center justify-center">
        <img src="./Cripto.svg" alt="cripto" />
      </div>
    ),
    carteira: "0.00000000",
    preco: "R$149.249,50",
    oneH: "-0,16%",
    DayH: "-1,83%",
    sevenDay: "-4,59%",
    button: (
      <Button className="w-[91px] h-[23px] !bg-[#fff]/10 text-[12px]">
        Negociar
      </Button>
    ),
  },
  {
    criptoIcon: (
      <div className="w-[35px] h-[35px] border-1 border-[#ffffff] rounded-[10px] flex items-center justify-center">
        <img src="./Cripto.svg" alt="cripto" />
      </div>
    ),
    carteira: "0.00000000",
    preco: "R$149.249,50",
    oneH: "-0,16%",
    DayH: "-1,83%",
    sevenDay: "-4,59%",
    button: (
      <Button className="w-[91px] h-[23px] !bg-[#fff]/10 text-[12px]">
        Negociar
      </Button>
    ),
  },
  {
    criptoIcon: (
      <div className="w-[35px] h-[35px] border-1 border-[#ffffff] rounded-[10px] flex items-center justify-center">
        <img src="./Cripto.svg" alt="cripto" />
      </div>
    ),
    carteira: "0.00000000",
    preco: "R$149.249,50",
    oneH: "-0,16%",
    DayH: "-1,83%",
    sevenDay: "-4,59%",
    button: (
      <Button className="w-[91px] h-[23px] !bg-[#fff]/10 text-[12px]">
        Negociar
      </Button>
    ),
  },
  {
    criptoIcon: (
      <div className="w-[35px] h-[35px] border-1 border-[#ffffff] rounded-[10px] flex items-center justify-center">
        <img src="./Cripto.svg" alt="cripto" />
      </div>
    ),
    carteira: "0.00000000",
    preco: "R$149.249,50",
    oneH: "-0,16%",
    DayH: "-1,83%",
    sevenDay: "-4,59%",
    button: (
      <Button className="w-[91px] h-[23px] !bg-[#fff]/10 text-[12px]">
        Negociar
      </Button>
    ),
  },
];

export function TableCripto() {
  return (
    <Table className="text-white [&_tr:hover]:bg-transparent">
      <TableHeader>
        <TableRow>
          <TableHead className="text-white text-[12px]">Criptomoedas</TableHead>
          <TableHead className=" text-white text-[12px]">Carteira</TableHead>
          <TableHead className=" text-white text-[12px]">Preço</TableHead>
          <TableHead className=" text-white text-[12px]">1h%</TableHead>
          <TableHead className=" text-white text-[12px]">24h%</TableHead>
          <TableHead className=" text-white text-[12px]">7d%</TableHead>
          <TableHead className=" text-white text-[12px] justify-end">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((criptoIcon) => (
          <TableRow key={criptoIcon.carteira} className="border-b-0">
            <TableCell>{criptoIcon.criptoIcon}</TableCell>
            <TableCell>{criptoIcon.carteira}</TableCell>
            <TableCell>{criptoIcon.preco}</TableCell>
            <TableCell>{criptoIcon.oneH}</TableCell>
            <TableCell>{criptoIcon.DayH}</TableCell>
            <TableCell>{criptoIcon.sevenDay}</TableCell>
            <TableCell className="justify-end">{criptoIcon.button}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
