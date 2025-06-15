import layoutConfig from '../config/section-globals.json';

const headerLayout = (layoutConfig as any).Header.layout;

export default function Header() {
  return (
    <header className={`grid ${headerLayout.gridClasses.mobile} ${headerLayout.gridClasses.md}`}>
      {/* Coluna 1 – Logo */}
      <div>
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Coluna 2 – Conteúdo dinâmico */}
      <div className={headerLayout.col2.classes}>
        {headerLayout.col2.contentOrder.map((item) => {
          if (headerLayout.col2.hideOn.mobile.includes(item)) return null;
          switch (item) {
            case 'nav':
              return <nav key="nav">/* links */</nav>;
            case 'phone':
              return <span key="phone">(11) 99999-0000</span>;
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
