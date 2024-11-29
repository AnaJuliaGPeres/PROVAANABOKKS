import { useEffect, useState } from "react";
import LivroTypeForm from "./form";
import { ILivroType } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { LivroTypeService } from "../../../services/livro-type.service";
import { toast } from "react-toastify";

function LivroTypeEditPage() {
  const params = useParams();

  const [livroType, setLivroType] = useState<ILivroType>({
    name: ''
  } as ILivroType);

  useEffect(() => {

    if (params?.id) {
        LivroTypeService.getById(params.id)
        .then(result => {
          setLivroType(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <LivroTypeForm 
      livroType={livroType}
      setLivroType={setLivroType}
      showForm={true}
    />
  )
}

export default LivroTypeEditPage;