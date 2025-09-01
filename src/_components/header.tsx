const Header = () => {
  return (
    <div className="w-[944px] h-[70px] border-1 border-gray-400/50">
      <div className="pt-5 pl-8 flex space-x-2">
        <img
          src="./logo.png"
          alt="Foto da Logo da Cidade"
          className="w-[129px] h-[25.09px]"
        />

        <h1 className="text-white">
          <span className="text-gray-400/50">-</span> Dashboard{" "}
          <span className="text-gray-400/50">|</span>
        </h1>
        <p className="text-gray-400/50 text-sm">
          Visualize sua conta bancária e seus investimentos.
        </p>
      </div>
    </div>
  );
};

export default Header;
