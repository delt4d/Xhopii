import "./App.css"
import { Header } from "./components/Header"
import { ProductContainer } from "./components/ProductContainer"

export function App() {
  return (
    <section>
      <Header />
      <main>
        <section>
          <ProductContainer />
        </section>
      </main>
    </section>
  )
}
