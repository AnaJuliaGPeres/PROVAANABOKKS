import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ILivroType } from "../../../@libs/types";
import { LivroTypeService } from "../../../services/livro-type.service";

export function Header() {
  const [livroTypes, setLivroTypes] = useState<ILivroType[]>([]);

  useEffect(() => {
    LivroTypeService.getAll()
      .then(result => {
        console.log(result.data);
        setLivroTypes(result.data);
      });
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#9c27b0", // Cor roxa do AppBar
        boxShadow: 3, // Leve sombra para destacar o AppBar
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            sx={{
              color: "#ffffff", // Cor branca para o título
              fontWeight: 'bold',
            }}
          >
            AnaBook
          </Typography>

          <Box
            sx={{
              paddingLeft: "1rem",
              display: "flex",
              alignItems: "center",
              gap: 2, // Adiciona um espaçamento entre os botões
              overflowX: "auto", // Garante que os botões não ultrapassem a tela
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#ffffff", // Cor branca para o botão
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#7b1fa2", // Cor de hover para o botão
                },
              }}
              disabled
            >
              Todos
            </Button>

            {livroTypes.map(item => (
              <Button
                key={item.id}
                variant="text"
                sx={{
                  color: "#ffffff", // Cor branca para os botões
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#7b1fa2", // Hover roxo mais escuro
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
