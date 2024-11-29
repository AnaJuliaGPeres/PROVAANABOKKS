import { useState } from "react";
import { ILivroFactory } from "../../../@libs/types";
import LivroFactoryForm from "./form";

function LivroFactoryCreatePage() {

  const [livroFactory, setLivroFactory] = useState<ILivroFactory>({
    name: ''
  } as ILivroFactory);

  return (
    <LivroFactoryForm 
      livroFactory={livroFactory}
      setLivroFactory={setLivroFactory}
      showForm={true}
    />
  )
}

export default LivroFactoryCreatePage;