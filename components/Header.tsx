// components/Header.tsx
import React from 'react';

type MenuItem = { name: string; link: string };
type Phone = { display: string; link: string };

type LayoutHeader = {
  gridClasses: { mobile: string; md: string };
};

type DataHeader = {
  backgroundColor: string;
  textColor: string;
  logoUrl: string;
  menu: MenuItem[];
  phone: Phone;
};

interface HeaderProps {
  layout: LayoutHeader;
  data: DataHeader;
}

export default function Header({ layout, data }: HeaderProps) {
  return (
    <header
      style={{
        backgroundColor: data.backgroundColor,
        color: data.textColor,
      }}
      /* 1 coluna no mobile, 2 colunas ≥ md */
      className={`grid ${layout.gridClasses.mobile} ${layout.gridClasses.md} items-center px-4 md:px-8 mb-8`}
    >
      {/* Coluna 1 – logo */}
      <div className="flex items-center">
        <img
          src={data.logoUrl}
          alt="Logo"
          className="h-12 w-auto max-w-[160px] object-contain"
        />
      </div>

      {/* Coluna 2 – menu + telefone (desktop) */}
      <div className="hidden md:flex items-center justify-end space-x-6">
        <nav className="flex space-x-4">
          {data.menu.map((m) => (
            <a key={m.link} href={m.link}>
              {m.name}
            </a>
          ))}
        </nav>
        <a href={`tel:${data.phone.link}`}>{data.phone.display}</a>
      </div>

      {/* Ícone hambúrguer (só mobile) */}
      <button
        className="md:hidden justify-self-end text-2xl leading-none"
        aria-label="Menu"
      >
        ☰
      </button>
    </header>
  );
}
