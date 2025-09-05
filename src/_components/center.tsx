import Dashboard from "./dashboard";
import PixArea from "./area-pix";
import Criptomoedas from "./criptomoedas";
import MutasPage from "./mutas";

type PageKey = "dashboard" | "pix" | "coins" | "folha";

interface CenterProps {
  page: PageKey;
}

const Center = ({ page }: CenterProps) => {
  if (page === "dashboard") {
    return <Dashboard />;
  } else if (page === "pix") {
    return <PixArea />;
  } else if (page === "coins") {
    return <Criptomoedas />;
  } else if (page === "folha") {
    return <MutasPage />;
  } else {
    return <div>Nenhuma pagina encontrada!</div>;
  }
};

export default Center;
