// app/page.tsx
import lpData from '../lp.json';
import Header from '../components/Header';

export default function Page() {
  return (
    <main className="p-8">
      {/* Header recebe layout e dados vindos do lp.json */}
      <Header layout={lpData.header.layout} data={lpData.header.data} />

      {/* Exemplo de uso de outros dados — remova ou adapte depois */}
      <section className="mt-12">
        <h1 className="text-2xl font-bold">{lpData.hero.title}</h1>
        <p className="mt-2 text-lg">{lpData.hero.subtitle}</p>
      </section>
    </main>
  );
}
