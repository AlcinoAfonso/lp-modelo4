// app/page.tsx
import lpData from '../lp.json';
import Header from '../components/Header';

export default function Page() {
  return (
    <main className="p-8">
      {/* Header montado a partir do JSON */}
      <Header layout={lpData.header.layout} data={lpData.header.data} />

      {/* outras seções virão aqui */}
    </main>
  );
}
