import { useEffect, useState } from "react";
import LivroModelForm from "./form";
import { ILivroModel } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { LivroModelService } from "../../../services/livro-model.service";
import { toast } from "react-toastify";

function LivroModelEditPage() {
  const params = useParams();

  const [livroModel, setLivroModel] = useState<ILivroModel>({
    name: '',
    factory: {}
  } as ILivroModel);

  useEffect(() => {

    if (params?.id) {
      LivroModelService.getById(params.id)
        .then(result => {
          setLivroModel(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <LivroModelForm 
      livroModel={livroModel}
      setLivroModel={setLivroModel}
      showForm={true}
    />
  )
}

export default LivroModelEditPage;