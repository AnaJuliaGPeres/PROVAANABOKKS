import { Paper } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ptBR } from "@mui/x-data-grid/locales";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ILivroModel } from "../../../@libs/types";
import { LivroModelService } from "../../../services/livro-model.service";
import ActionMenu from "../../components/ui/action-menu";

//Definições das Colunas
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código Identificação',
    resizable: false,
    width: 350
  },
  {
    field: 'factory',
    headerName: 'Nome do Fabricante',
    resizable: false,
    width: 250,
    renderCell: (params: GridRenderCellParams) => (<>{params.row.factory.name}</>)
  },
  {
    field: 'name',
    headerName: 'Nome de Generos',
    resizable: false,
    flex: 1
  },
  {
    field: 'action',
    headerName: '',
    resizable: false,
    sortable: false,
    disableColumnMenu: true,
    align: 'right',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionMenu 
        itemId={ params.row.id }
      />
    )
  }
];

function LivroModelDataGrid() {
  const location = useLocation();

  const [livroFactories, setLivroFactories] = useState<ILivroModel[]>([]);

  useEffect(()=> {
      LivroModelService.getAll()
        .then(result => {
          setLivroFactories(result.data)
        })
        .catch(error => toast.error(String(error)))
  }, [location])

  return (
    <Paper
      sx={{
        height: '90%',
        width: '100%'
      }}
    >

      <DataGrid
        rows={livroFactories}
        columns={columns}
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none'
          }
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />

    </Paper>
  )
}

export default LivroModelDataGrid;