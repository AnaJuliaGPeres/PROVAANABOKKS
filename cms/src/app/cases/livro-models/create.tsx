import { useState } from "react";
import { ILivroModel } from "../../../@libs/types";
import LivroModelForm from "./form";

function LivroModelCreatePage() {

  const [livroModel, setLivroModel] = useState<ILivroModel>({
    name: '',
    factory: {}
  } as ILivroModel);

  return (
    <LivroModelForm 
      livroModel={livroModel}
      setLivroModel={setLivroModel}
      showForm={true}
    />
  )
}

export default LivroModelCreatePage;