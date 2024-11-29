import { ToastContainer } from "react-toastify"
import LivroTypeEditPage from "./app/cases/livro-types/edit"
import LivroTypeLayout from "./app/cases/livro-types/layout"
import Header from "./app/components/ui/header"
import SideMenu from "./app/components/ui/side-menu"
import {Route, Routes} from "react-router-dom"
import LivroTypeCreatePage from "./app/cases/livro-types/create"
import LivroFactoryLayout from "./app/cases/livro-factories/layout"
import LivroFactoryCreatePage from "./app/cases/livro-factories/create"
import LivroFactoryEditPage from "./app/cases/livro-factories/edit"
import LivroModelLayout from "./app/cases/livro-models/layout"
import LivroModelCreatePage from "./app/cases/livro-models/create"
import LivroModelEditPage from "./app/cases/livro-models/edit"
import LivroLayout from "./app/cases/livro/layout"
import LivroCreatePage from "./app/cases/livro/create"
import LivroEditPage from "./app/cases/livro/edit"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>
          <Route path="/livro-types" element={ <LivroTypeLayout /> }>
            <Route path="new" element={ <LivroTypeCreatePage /> } />
            <Route path=":id" element={ <LivroTypeEditPage /> } />
          </Route>
          <Route path="/livro-factories" element={ <LivroFactoryLayout /> }>
            <Route path="new" element={ <LivroFactoryCreatePage /> } />
            <Route path=":id" element={ <LivroFactoryEditPage /> } />
          </Route>
          <Route path="/livro-models" element={ <LivroModelLayout /> }>
            <Route path="new" element={ <LivroModelCreatePage /> } />
            <Route path=":id" element={ <LivroModelEditPage /> } />
          </Route>
          <Route path="/livros" element={ <LivroLayout /> }>
            <Route path="new" element={ <LivroCreatePage /> } />
            <Route path=":id" element={ <LivroEditPage /> } />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App