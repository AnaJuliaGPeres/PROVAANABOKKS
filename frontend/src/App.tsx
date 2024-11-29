import { ToastContainer } from "react-toastify"
import { Header } from "./app/components/ui/header"
import { LivrosProvider } from "./contexts/LivroContext"
import { FilterBar } from "./app/components/ui/body-bar"
import { Container } from "@mui/material"
import { LivroContainer } from "./app/components/ui/livro-container"


function App() {

  return (
    <div>
        <Header />
        <main>
          <Container>
            <LivrosProvider>
              <FilterBar />
              <LivroContainer />
            </LivrosProvider>
          </Container>
        </main>
        <ToastContainer />
    </div>
  )
}

export default App