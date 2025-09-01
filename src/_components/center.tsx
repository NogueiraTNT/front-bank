type PageKey = "dashboard" | "pix" | "coins" | "folha";

interface CenterProps {
  page: PageKey;
}

const Center = ({ page }: CenterProps) => {
  if (page === "dashboard") {
    return <div className="w-[944px] h-[563px]"></div>;
  }

  // Render bem simples pros outros, só pra ver funcionando
  return (
    <div className="w-full border-2 rounded-2xl p-6">
      <h2 className="text-2xl font-semibold capitalize">
        {page.replace("-", " ")}
      </h2>
      <p className="text-sm text-muted-foreground">
        Conteúdo da página “{page}”.
      </p>
    </div>
  );
};

export default Center;
