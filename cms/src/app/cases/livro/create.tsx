import { useState } from "react";
import { ILivro } from "../../../@libs/types";
import LivroForm from "./form";

function LivroCreatePage() {

  const [livro, setLivro] = useState<ILivro>({
    description: '',
    photo: '',
    yearFactory: 2024,
    yearModel: 2024,
    type: {},
    model: {},
  } as ILivro);

  return (
    <LivroForm 
      livro={livro}
      setLivro={setLivro}
      showForm={true}
    />
  )
}

export default LivroCreatePage;