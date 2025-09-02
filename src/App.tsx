import { useState } from "react";
import Center from "./_components/center";
import Header from "./_components/header";
import MenuLeft from "./_components/menu-left";

type PageKey = "dashboard" | "pix" | "coins" | "folha";

const headerMap: Record<PageKey, { title: string; description: string }> = {
  dashboard: {
    title: "Dashboard",
    description: "Visualize sua conta bancária e seus investimentos.",
  },
  pix: {
    title: "PIX",
    description: "Efetue transferências, altere sua chave.",
  },
  coins: {
    title: "Criptomoedas",
    description: "Analise o mercado, compre e venda moedas e consiga lucros!",
  },
  folha: {
    title: "Multas",
    description: "Veja seu histórico de mutas, livre-se delas.",
  },
};

function App() {
  const [page, setPage] = useState<PageKey>("dashboard");
  const { title, description } = headerMap[page];

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[1014px] h-[633px] bg-[#0A0A0A] flex flex-col rounded-2xl">
        <div className="flex">
          {/* Quadrado */}
          <div className="w-[70px] h-[70px] border border-gray-400/50">
            {/* vazio */}
          </div>

          {/* HEADER */}
          <Header title={title} description={description} />
        </div>

        {/* BODY */}
        <div className="flex">
          <MenuLeft page={page} onChangePage={setPage} />
          <Center key={page} page={page} />
        </div>
      </div>
    </div>
  );
}

export default App;
