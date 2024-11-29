import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material"; // Ícones de curtida
import { useState } from "react";
import { IntlProvider } from "react-intl";
import { ILivro } from "../../../@libs/types";

type CardLivroProps = {
  livro: ILivro;
};

export function CardLivro({ livro }: CardLivroProps) {
  const [liked, setLiked] = useState(false); // Estado para controlar curtidas

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#f3e5f5", // Cor de fundo do Card - roxo claro
        borderRadius: "0.5rem",
        boxShadow: 3, // Adicionando uma leve sombra
        display: 'flex',
        flexDirection: 'column',  // Garantir que o conteúdo seja disposto em coluna
        height: '100%', // Altura máxima do card
        minHeight: '450px', // Definindo altura mínima para o card
      }}
    >
      <Stack padding="1rem" gap={1} sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{
            color: "#9c27b0", // Cor roxa para o título
            fontWeight: "bold",
          }}
        >
          {livro.model.name}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#7b1fa2", // Cor roxa mais escura para a descrição
          }}
        >
          {livro.description}
        </Typography>

        <Stack justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
          <img
            src={livro.photo ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${livro.photo}` : "/path/to/default-image.jpg"}
            alt={livro.model.name}
            style={{
              width: "100%",  // Faz a imagem ocupar toda a largura do card
              maxWidth: "244px", // Largura máxima para evitar que a imagem fique muito grande
              height: "auto", // Manter a proporção da imagem
              borderRadius: "0.5rem", // Borda arredondada à imagem
              objectFit: "cover", // Garante que a imagem cubra o espaço disponível
            }}
          />
        </Stack>

        <Typography
          padding="0.5rem"
          variant="body2"
          textAlign="center"
          sx={{
            backgroundColor: "#f8bbd0", // Cor de fundo rosa
            color: "#880e4f", // Texto roxo mais forte
            borderRadius: "0.25rem",
            marginTop: "0.5rem", // Adicionando um pouco de espaço superior
          }}
        >
          <IntlProvider locale="pt-BR">
            {/* Espaço para conteúdo adicional */}
          </IntlProvider>
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginTop: "1rem" }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#9c27b0", // Cor roxa para o botão
              color: "white", // Cor do texto do botão
              "&:hover": {
                backgroundColor: "#7b1fa2", // Hover roxo mais escuro
              },
              borderRadius: "1rem", // Bordas arredondadas no botão
            }}
          >
            VER MAIS SOBRE O LIVRO
          </Button>

          <IconButton
            onClick={handleLike}
            sx={{
              color: liked ? "#e91e63" : "#9e9e9e", // Ícone rosa quando curtido, cinza quando não curtido
              transition: "color 0.3s ease", // Animação suave ao mudar de estado
            }}
          >
            {liked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
