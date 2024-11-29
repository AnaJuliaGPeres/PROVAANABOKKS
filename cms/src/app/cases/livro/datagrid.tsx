import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ILivro } from "../../../@libs/types";
import { LivroService } from "../../../services/livro.service";
import ActionMenu from "../../components/ui/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

//Definições das Colunas
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código Identificação',
    resizable: false,
    width: 350
  },
  {
    field: 'type',
    headerName: 'Modelo livro',
    resizable: false,
    width: 160,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.type.name}</>
    )
  },
  {
    field: 'model',
    headerName: 'Modelo',
    resizable: false,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.model.name}</>
    )
  },
  {
    field: 'year',
    headerName: 'Ano',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <>{`${params.row.yearFactory}/${params.row.yearModel}`}</>
    )
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

function LivroDataGrid() {
  const location = useLocation();

  const [livros, setLivros] = useState<ILivro[]>([]);

  useEffect(()=> {
      LivroService.getAll()
        .then(result => {
          setLivros(result.data)
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
        rows={livros}
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

export default LivroDataGrid;