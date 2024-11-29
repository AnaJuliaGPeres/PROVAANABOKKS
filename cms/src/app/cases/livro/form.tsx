import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { ILivro, ILivroModel, ILivroType } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { ChangeEvent, useEffect, useState } from "react";
import { LivroService } from "../../../services/livro.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LivroTypeService } from "../../../services/livro-type.service";
import { LivroModelService } from "../../../services/livro-model.service";
import { LoadingButton } from "@mui/lab";

type LivroFormProps = {
  livro: ILivro;
  setLivro: (livro: ILivro) => void;
  showForm: boolean;
}
function LivroForm({
  livro,
  setLivro,
  showForm
}: LivroFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [livroTypes, setLivrosTypes] = useState<ILivroType[]>([]);
  const [livroModels, setLivrosModels] = useState<ILivroModel[]>([]);

  useEffect(()=>{
    LivroTypeService.getAll()
      .then(result => {
        setLivrosTypes(result.data)
      });

    LivroModelService.getAll()
      .then(result => {
        setLivrosModels(result.data)
      })      
  },[]);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (livro.id) 
      ? LivroService.update(livro.id, livro) 
      : LivroService.create(livro);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/livros');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
  }
  const handleDelete = () => {
    setLoading(true);

    if (livro.id) {
      LivroService.remove(livro.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/livros');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }

  const handleChangeType = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = livroTypes.find(item => item.id === value)
    
    setLivro({...livro, type: seleted!})
  }

  const handleChangeModel = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = livroModels.find(item => item.id === value)
    
    setLivro({...livro, model: seleted!})
  }

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target;

    setLoading(true);

    if (files && files[0]) {
      const file = files[0];

      LivroService.upload(file)
        .then(result => {
          if (result.data) {
            const { fullPath } = result.data;
            setLivro({ ...livro, photo: fullPath })
          }
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Livros"
      loading={loading}
      onSave={handleSave}
      {...(livro.id && {onDelete: handleDelete})}
    >
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-type">Tipo Livro</InputLabel>
        <Select
          labelId="select-type"
          label="Tipo Livro"
          value={livro.type.id || ''}
          onChange={handleChangeType}
        >
          {livroTypes.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-model">Modelo Livro</InputLabel>
        <Select
          labelId="select-model"
          label="Modelo Livro"
          value={livro.model.id || ''}
          onChange={handleChangeModel}
        >
          {livroModels.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Stack
        direction="row"
        gap={1}
      >
        <TextField 
          required
          label="Mês de publicação"
          variant="outlined"
          size="small"
          value={livro.yearFactory}
          onChange={event => setLivro({...livro, yearFactory: Number(event.target.value)})}
        />
        <TextField
          required
          label="Ano Lançamento"
          variant="outlined"
          size="small"
          value={livro.yearModel}
          onChange={event => setLivro({...livro, yearModel: Number(event.target.value)})}
        />
        
      </Stack>
      <TextField       
        fullWidth
        required
        multiline
        rows={4}
        label="Descrição"
        variant="outlined"
        size="small"
        value={livro.description}
        onChange={event => setLivro({...livro, description: event.target.value})}
      />
      
      <fieldset className="form-fieldset">
        <legend>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(0,0,0,0,6)'
            }}
          >
            Foto do Livro
          </Typography>
        </legend>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
          gap="1rem"
        >
          {livro.photo && (
            <img 
              alt={livro.model.name} 
              src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${livro.photo}`} 
              style={{
                width: '320px'
              }}
            />
          )}
          <LoadingButton
            variant="outlined"
            component="label"
            loading={loading}
          >
            <BackupOutlinedIcon 
              sx={{
                marginRight: '1rem'
              }} 
            />
            Escolher Imagem
            <input type="file" hidden onChange={handleChangeFile} />
          </LoadingButton>
        </Stack>
      </fieldset>
    </SideForm>
  )
}

export default LivroForm;