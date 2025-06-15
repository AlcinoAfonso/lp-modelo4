// components/Header.tsx
import React from "react"

type MenuItem = { name: string; link: string }
type Phone    = { display: string; link: string }

type LayoutHeader = {
  gridClasses: { mobile: string; md: string }
}

type DataHeader = {
  backgroundColor: string
  textColor:       string
  logoUrl:         string
  menu:            MenuItem[]
  phone:           Phone
}

interface HeaderProps {
  layout: LayoutHeader
  data:   DataHeader
}

export default function Header({ layout, data }: HeaderProps) {
  return (
    <header
      style={{
        backgroundColor: data.backgroundColor,
        color:           data.textColor,
      }}
      className={`grid ${layout.gridClasses.mobile} ${layout.gridClasses.md}
                  items-center gap-y-4 py-3 px-4 md:px-8`}
    >
      {/* Coluna 1 – Logo */}
      <div className="flex items-center">
        <img
          src={data.logoUrl}
          alt="Logo"
          className="h-12 w-auto max-w-[200px] object-contain"
        />
      </div>

      {/* Coluna 2 – Menu + Telefone */}
      <div className="flex items-center justify-center md:justify-end space-x-8">
        {/* Navegação – só desktop */}
        <nav className="hidden md:flex space-x-6 text-[1rem] font-semibold">
          {data.menu.map((m) => (
            <a
              key={m.link}
              href={m.link}
              className="hover:underline underline-offset-4 capitalize"
            >
              {m.name}
            </a>
          ))}
        </nav>

        {/* Telefone */}
        <a
          href={`tel:${data.phone.link}`}
          className="flex items-center space-x-2 font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75a3 3 0 013-3h.27a2 2 0 011.79 1.11l1.12 2.24a2 2 0 01-.45 2.39L6.6 10.6a15.036 15.036 0 006.79 6.79l1.87-1.87a2 2 0 012.39-.45l2.24 1.12a2 2 0 011.11 1.79v.27a3 3 0 01-3 3H17a18 18 0 01-15-15v-.27z"
            />
          </svg>
          <span>{data.phone.display}</span>
        </a>

        {/* Hambúrguer – só mobile */}
        <button
          className="md:hidden text-2xl leading-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
    </header>
  )
}
