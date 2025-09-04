type HeaderProps = {
  title: string;
  description: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="w-[944px] h-[70px] border border-gray-400/50">
      <div className="pt-5 pl-8 flex space-x-2 items-center">
        <img src="./logo.png" alt="Logo" className="w-[129px] h-[25.09px]" />
        <h1 className="text-white">
          <span className="text-gray-400/50 text-[16px]">-</span> {title}{" "}
          <span className="text-gray-400/50">|</span>
        </h1>
        <p className="text-gray-400/50 font-[200] text-[12px] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;
