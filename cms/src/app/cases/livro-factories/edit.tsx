import { useEffect, useState } from "react";
import LivroFactoryForm from "./form";
import { ILivroFactory } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { LivroFactoryService } from "../../../services/livro-factory.service";
import { toast } from "react-toastify";

function LivroFactoryEditPage() {
  const params = useParams();

  const [livroFactory, setLivroFactory] = useState<ILivroFactory>({
    name: ''
  } as ILivroFactory);

  useEffect(() => {

    if (params?.id) {
        LivroFactoryService.getById(params.id)
        .then(result => {
          setLivroFactory(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <LivroFactoryForm 
      livroFactory={livroFactory}
      setLivroFactory={setLivroFactory}
      showForm={true}
    />
  )
}

export default LivroFactoryEditPage;