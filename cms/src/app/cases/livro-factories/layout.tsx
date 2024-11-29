import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import BreadCrumb from "../../components/ui/bread-crumb";
import { Outlet, useNavigate } from "react-router-dom";
import LivroFactoryDataGrid from "./datagrid.tsx";

function LivroFactoryLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/livro-factories/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <BreadCrumb title="Cadastro das Editoras" />
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

      <LivroFactoryDataGrid />

      <Outlet />
    </Stack>
  )
}

export default LivroFactoryLayout;