import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      sx={{
        zIndex: 'tooltip'
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
        >
          AnaBook - Gestão de Livros
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;