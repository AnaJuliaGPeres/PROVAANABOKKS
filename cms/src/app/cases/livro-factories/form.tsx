import { TextField } from "@mui/material";
import { ILivroFactory } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { LivroFactoryService } from "../../../services/livro-factory.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type LivroFactoryFormProps = {
    livroFactory: ILivroFactory;
  setLivroFactory: (livroFactory: ILivroFactory) => void;
  showForm: boolean;
}
function LivroFactoryForm({
    livroFactory,
  setLivroFactory,
  showForm
}: LivroFactoryFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (livroFactory.id) ? 
    LivroFactoryService.update(livroFactory.id, livroFactory) :  
            LivroFactoryService.create(livroFactory);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/livro-factories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

   
  }
  const handleDelete = () => {
    setLoading(true);

    if (livroFactory.id) {
        LivroFactoryService.remove(livroFactory.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/livro-factories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Editora"
      loading={loading}
      onSave={handleSave}
      {...(livroFactory.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Nome da editora"
        variant="outlined"
        size="small"
        value={livroFactory.name}
        onChange={event => setLivroFactory({...livroFactory, name: event.target.value})}
      />
    </SideForm>
  )
}

export default LivroFactoryForm;