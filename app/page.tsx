import lpData from '@/lp.json'
import Header from '@/components/Header'

export default function Page() {
  return (
    <main>
      <Header
        layout={lpData.header.layout}
        data={lpData.header.data}
      />
      {/* …other sections… */}
    </main>
  )
}
