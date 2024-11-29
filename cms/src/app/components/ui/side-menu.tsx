import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText 
          primary="Cadastros" />
        <ListItemButton
          href="/livro-types"
        >
          <ListItemText primary="Tipos de Livros" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/livro-factories"
        >
          <ListItemText primary="Editoras" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/livro-models"
        >
          <ListItemText primary="Generos de Livros" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/livros"
        >
          <ListItemText primary="Livros" />
        </ListItemButton>
      </List>
    </aside>
  )
}

export default SideMenu;