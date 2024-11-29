import { useState } from "react";
import { ILivroType } from "../../../@libs/types";
import LivroTypeForm from "./form";

function LivroTypeCreatePage() {

  const [livroType, setlivroType] = useState<ILivroType>({
    name: ''
  } as ILivroType);

  return (
    <LivroTypeForm 
      livroType={livroType}
      setLivroType={setlivroType}
      showForm={true}
    />
  )
}

export default LivroTypeCreatePage;