import Header from '../components/Header';
import sectionGlobals from '../config/section-globals.json';
import lpData from '../lp.json';

export default function Page() {
  return (
    <main className="p-8">
      <Header {...sectionGlobals.Header} />
      {/* Exemplo de uso de lpData, ajuste conforme necessário */}
      <h1 className="text-2xl">{lpData.hero.title}</h1>
    </main>
  );
}
