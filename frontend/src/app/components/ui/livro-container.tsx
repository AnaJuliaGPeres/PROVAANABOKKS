import Grid from "@mui/material/Grid2";
import { useLivros } from "../../../hooks";
import { CardLivro } from "./card-livro";

export function LivroContainer() {

  const { livros } = useLivros();

  return (
    <Grid container spacing={2}
      marginTop="3rem"
    >
      {livros.map(item => (
        <Grid key={item.id} size={{ xs: 2, sm: 4, md: 3 }} >
          <CardLivro livro={item} />
        </Grid>
      ))}      
    </Grid>
  )
}