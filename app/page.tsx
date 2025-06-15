import globals from '@/config/section-globals.json';
import lp from '@/lp.json';

import Header from '@/components/Header';

const componentsMap: Record<string, any> = {
  Header,
  // Hero, Benefits etc. serão registrados aqui depois
};

export default function Page() {
  return (
    <main>
      {lp.order.map((section) => {
        const Comp = componentsMap[section];
        const layout = globals[section];
        const data = (lp as any)[section];
        return <Comp key={section} layout={layout} data={data} />;
      })}
    </main>
  );
}
