import Header from "./_components/header";
import MenuLeft from "./_components/menu-left";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[1014px] h-[633px] bg-[#0A0A0A] flex flex-col rounded-2xl">
        <div className="flex">
          {/* Quadrado */}
          <div className="w-[70px] h-[70px] border border-gray-400/50">
            {/* vazio */}
          </div>

          {/* HEADER */}
          <Header />
        </div>

        {/* BODY */}
        <MenuLeft />
      </div>
    </div>
  );
}

export default App;
