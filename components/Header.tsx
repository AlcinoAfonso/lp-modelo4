type MenuItem = { name: string; link: string };
type Phone = { display: string; link: string };
type LayoutHeader = {
  gridClasses: { mobile: string; md: string };
  col2: { classes: string; contentOrder: string[]; hideOn: { mobile: string[]; md: string[] } };
};
type DataHeader = {
  backgroundColor: string;
  textColor: string;
  logoUrl: string;
  menu: MenuItem[];
  phone: Phone;
};

export default function Header({
  layout,
  data,
}: {
  layout: LayoutHeader;
  data: DataHeader;
}) {
  return (
    <header
      style={{ backgroundColor: data.backgroundColor, color: data.textColor }}
      className={`grid ${layout.gridClasses.mobile} ${layout.gridClasses.md} items-center px-4 md:px-8 mb-8`}
    >
      {/* Coluna 1 – Logo */}
      <div>
        <img
          src={data.logoUrl}
          alt="Logo"
          className="h-12 w-auto max-w-[160px] object-contain"
        />
      </div>

      {/* Coluna 2 – Menu / Telefone */}
      <div className={layout.col2.classes}>
        {layout.col2.contentOrder.map((item) => {
          if (layout.col2.hideOn.mobile.includes(item)) return null;
          switch (item) {
            case 'nav':
              return (
                <nav key="nav" className="hidden md:flex space-x-4">
                  {data.menu.map((m) => (
                    <a key={m.link} href={m.link} className="mr-4">
                      {m.name}
                    </a>
                  ))}
                </nav>
              );
            case 'phone':
              return (
                <a
                  key="phone"
                  href={`tel:${data.phone.link}`}
                  className="hidden md:inline-block ml-4"
                >
                  {data.phone.display}
                </a>
              );
            case 'hamburgerIcon':
              return (
                <button key="hamburger" className="md:hidden">
                  ☰
                </button>
              );
            default:
              return null;
          }
        })}
      </div>
    </header>
  );
}
