import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ILivroFactory, ILivroModel } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useEffect, useState } from "react";
import { LivroModelService } from "../../../services/livro-model.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LivroFactoryService } from "../../../services/livro-factory.service";

type LivroModelFormProps = {
  livroModel: ILivroModel;
  setLivroModel: (livroModel: ILivroModel) => void;
  showForm: boolean;
}
function LivroModelForm({
  livroModel,
  setLivroModel,
  showForm
}: LivroModelFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [factories, setFactories] = useState<ILivroFactory[]>([]);

  useEffect(() => {
    LivroFactoryService.getAll()
      .then(result => {
        setFactories(result.data)
      })
      .catch(error => toast.error(String(error)))
  }, [])

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (livroModel.id) 
      ? LivroModelService.update(livroModel.id, livroModel) 
      : LivroModelService.create(livroModel);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/livro-models');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
  }
  const handleDelete = () => {
    setLoading(true);

    if (livroModel.id) {
      LivroModelService.remove(livroModel.id)
        .then(() => {
          toast.success('Registro excluído com sucesso!');
          navigate('/livro-models');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;

    const selected = factories.find(item => item.id === value)
    setLivroModel({...livroModel, factory: selected!})
  }

  return (
    <SideForm
      open={showForm}
      title="Cadastro de Generos de livros"
      loading={loading}
      onSave={handleSave}
      {...(livroModel.id && {onDelete: handleDelete})}
    >
      <FormControl 
        fullWidth 
        size="small" 
        margin="normal" 
        required
      >
      <InputLabel>Editora</InputLabel>
      <Select
        value={livroModel.factory?.id || ''}
        onChange={handleChange}
        label="Editoras"
      >
        {factories.map((factory) => (
          <MenuItem key={factory.id} value={factory.id}>
            {factory.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

      <TextField 
        fullWidth
        required
        label="Nome do Genero"
        variant="outlined"
        size="small"
        value={livroModel.name}
        onChange={event => setLivroModel({...livroModel, name: event.target.value})}
      />
    </SideForm>
  )
}

export default LivroModelForm;