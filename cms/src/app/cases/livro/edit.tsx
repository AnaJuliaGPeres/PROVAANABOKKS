import { useEffect, useState } from "react";
import LivroForm from "./form";
import { ILivro } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { LivroService } from "../../../services/livro.service";
import { toast } from "react-toastify";

function LivroEditPage() {
  const params = useParams();

  const [livro, setLivro] = useState<ILivro>({
    description: '',
    photo: '',
    yearFactory: 2024,
    yearModel: 2024,
    type: {},
    model: {},
  } as ILivro);

  useEffect(() => {

    if (params?.id) {
      LivroService.getById(params.id)
        .then(result => {
          setLivro(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <LivroForm 
      livro={livro}
      setLivro={setLivro}
      showForm={true}
    />
  )
}

export default LivroEditPage;