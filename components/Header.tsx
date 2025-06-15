// components/Header.tsx
import React from 'react'

type MenuItem = { name: string; link: string }
type Phone = { display: string; link: string }

type LayoutHeader = {
  gridClasses: { mobile: string; md: string }
}

type DataHeader = {
  backgroundColor: string
  textColor: string
  logoUrl: string
  menu: MenuItem[]
  phone: Phone
}

interface HeaderProps {
  layout: LayoutHeader
  data: DataHeader
}

export default function Header({ layout, data }: HeaderProps) {
  return (
    <header
      style={{
        backgroundColor: data.backgroundColor,
        color: data.textColor,
      }}
      /* grid-cols-1 no mobile, grid-cols-2 ≥ md  */
      className={`grid ${layout.gridClasses.mobile} ${layout.gridClasses.md} items-center gap-y-4 px-4 md:px-8 mb-8`}
    >
      {/* Coluna 1 — logo */}
      <div className="flex items-center">
        <img
          src={data.logoUrl}
          alt="Logo"
          className="h-12 w-auto max-w-[160px] object-contain"
        />
      </div>

      {/* Coluna 2 — menu + telefone */}
      <div
        /* justify-center mobile, justify-end md+ */
        className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-6"
      >
        <nav className="flex space-x-4 text-sm font-medium">
          {data.menu.map((m) => (
            <a
              key={m.link}
              href={m.link}
              className="hover:underline underline-offset-4"
            >
              {m.name}
            </a>
          ))}
        </nav>

        <a
          className="font-semibold"
          href={`tel:${data.phone.link}`}
        >
          {data.phone.display}
        </a>
      </div>

      {/* Hambúrguer (só mobile) — fica absolutamente à direita abaixo do logo */}
      <button
        className="md:hidden justify-self-end text-2xl leading-none absolute right-4 top-4"
        aria-label="Menu"
      >
        ☰
      </button>
    </header>
  )
}
