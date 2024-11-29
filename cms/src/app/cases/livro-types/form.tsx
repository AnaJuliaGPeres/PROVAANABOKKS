import { TextField } from "@mui/material";
import { ILivroType } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { LivroTypeService } from "../../../services/livro-type.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type LivroTypeFormProps = {
    livroType: ILivroType;
  setLivroType: (livroType: ILivroType) => void;
  showForm: boolean;
}
function LivroTypeForm({
    livroType,
  setLivroType,
  showForm
}: LivroTypeFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (livroType.id) ? 
    LivroTypeService.update(livroType.id, livroType) :  
            LivroTypeService.create(livroType);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/livro-types');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

   
  }
  const handleDelete = () => {
    setLoading(true);

    if (livroType.id) {
        LivroTypeService.remove(livroType.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/livro-types');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Tipo de Livro"
      loading={loading}
      onSave={handleSave}
      {...(livroType.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Tipo de Livro"
        variant="outlined"
        size="small"
        value={livroType.name}
        onChange={event => setLivroType({...livroType, name: event.target.value})}
      />
    </SideForm>
  )
}

export default LivroTypeForm;