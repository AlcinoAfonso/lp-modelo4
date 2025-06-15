// app/page.tsx
import Header from "../components/Header"
import lpData from "../lp.json"

export default function Page() {
  return (
    <main>
      <Header
        layout={lpData.header.layout}
        data={lpData.header.data}
      />
      {/* …aqui virão as outras seções (Hero, Services etc.) */}
    </main>
  )
}
