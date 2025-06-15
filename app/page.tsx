// app/page.tsx
import Header from '../components/Header'
import sectionGlobals from '../config/section-globals.json'
import lpData from '../lp.json'

export default function Page() {
  return (
    <main>
      <Header
        layout={sectionGlobals.Header.layout}
        data={lpData.Header}
      />
    </main>
  )
}
