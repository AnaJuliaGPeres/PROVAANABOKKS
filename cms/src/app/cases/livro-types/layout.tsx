import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import BreadCrumb from "../../components/ui/bread-crumb";
import { Outlet, useNavigate } from "react-router-dom";
import LivroTypeDataGrid from "./datagrid.tsx";

function LivroTypeLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/livro-types/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <BreadCrumb title="Cadastro de Tipo de Livro" />
      <Box
        display="flex"
        width="100%"
        justifyContent="end"
        marginBottom="1rem"
      >
        <Button
          variant="contained"
          onClick={handleCreate}
        >
          <AddIcon />
          Adicionar
        </Button>
      </Box>

      <LivroTypeDataGrid />

      <Outlet />
    </Stack>
  )
}

export default LivroTypeLayout;