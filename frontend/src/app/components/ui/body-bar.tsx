import { Stack, Typography, Box } from '@mui/material';
import { LocalFlorist } from '@mui/icons-material'; // Ícone de flor


export function FilterBar() {
  return (
    <Stack
      gap={1.5} // Reduzindo mais o gap entre os elementos
      padding="1rem" // Menos padding para compactar ainda mais o componente
      sx={{
        backgroundColor: '#EDE7F6', // Roxo suave claro
        borderRadius: '1rem',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/flowers-embossed.png")', // Padrão floral de fundo
        backgroundSize: 'auto',
        width: '85%', // Largura reduzida
        margin: '0 auto', // Centralizando o componente
      }}
    >
      <Typography
        variant="h5" // Título ainda menor
        textAlign="center"
        sx={{
          fontWeight: 'bold',
          color: '#6A1B9A', // Roxo mais forte
          fontFamily: 'cursive', // Fonte mais fluida e elegante
        }}
      >
        Bem-vindo(a) ao AnaBook!
      </Typography>

      <Typography
        variant="body2" // Menor para o subtítulo
        textAlign="center"
        sx={{
          color: '#preto', // Roxo intermediário
          marginBottom: '1rem',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Encontre o livro perfeito para você. O AnaBook é uma comunidade para explorar diferentes tipos de livros e um momento
        para você encontrar sua nova Leitura. Explore agora!
      </Typography>

      <Typography
        variant="body2" // Menor para o texto adicional
        textAlign="center"
        sx={{
          color: '#preto', 
          fontStyle: 'italic',
          marginBottom: '1rem',
        }}
      >
        Descubra histórias encantadoras que vão encantar sua vida!
      </Typography>

      {/* Ícones de flores com cores ajustadas */}
      <Stack direction="row" justifyContent="center" alignItems="center" gap={1.5}>
        <Box>
          <LocalFlorist sx={{ fontSize: '1.8rem', color: '#8E24AA' }} />
          <Typography textAlign="center" sx={{ color: '#8E24AA', fontWeight: 'bold', fontSize: '0.8rem' }}>
           
          </Typography>
        </Box>

        <Box>
          <LocalFlorist sx={{ fontSize: '1.8rem', color: '#8E24AA' }} />
          <Typography textAlign="center" sx={{ color: '#8E24AA', fontWeight: 'bold', fontSize: '0.8rem' }}>
           
          </Typography>
        </Box>

      </Stack>

      {/* Texto adicional com mais elementos florais */}
      <Stack gap={1} sx={{ marginTop: '1rem', textAlign: 'center' }}>
     

        <Typography
          variant="body2"
          sx={{
            color: '#6A1B9A',
            fontSize: '0.75rem', // Tamanho ainda menor
            fontWeight: 'bold',
          }}
        >
          "A leitura de um bom livro nos proporciona viajar e conhecer o outro lado do mundo".
          <p>Merari Tavares</p>
          
                  </Typography>
      </Stack>

      {/* Flores no fundo (adicionando mais elementos visuais) */}
      <Box sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
        <LocalFlorist sx={{ fontSize: '2rem', opacity: 0.3, color: '#8E24AA' }} />
      </Box>
      <Box sx={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        <LocalFlorist sx={{ fontSize: '2rem', opacity: 0.3, color: '#6A1B9A' }} />
      </Box>
    </Stack>
  );
}
