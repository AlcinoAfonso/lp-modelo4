// components/Header.tsx
export default function Header({ layout, data }) {
  return (
    <header
      style={{ backgroundColor: data.backgroundColor, color: data.textColor }}
      className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-8 mb-8"
    >
      {/* logo — sempre na esquerda/linha 1 */}
      <div className="flex items-center">
        <img
          src={data.logoUrl}
          alt="Logo"
          className="h-12 w-auto max-w-[160px] object-contain"
        />
      </div>

      {/* ações — menu + telefone; escondidos em mobile */}
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

      {/* hambúrguer — só mobile */}
      <button className="md:hidden justify-self-end text-2xl" aria-label="Menu">
        ☰
      </button>
    </header>
  );
}
