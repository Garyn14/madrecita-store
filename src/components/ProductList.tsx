import React from 'react';
import { products } from '../data/data';
import ProductCard from './ProductCard';
import { Grid, Typography, Box, Container } from '@mui/material';
import { colors } from '../theme/theme';

const ProductList: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 600, 
            color: colors.color1,
            mb: 1
          }}
        >
          Nuestros Productos
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: 800
          }}
        >
          Descubre nuestra selección de productos naturales y orgánicos, elaborados con ingredientes de la más alta calidad.
        </Typography>
      </Box>

      <Grid 
        container 
        spacing={3}
        sx={{
          animation: 'fadeIn 0.6s ease-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        {products.map((product, index) => (
          <Grid 
            item 
            key={product.id} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}
            sx={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              },
              animationFillMode: 'both'
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      
      {products.length === 0 && (
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 8,
            color: 'text.secondary'
          }}
        >
          <Typography variant="h6">
            No se encontraron productos
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ProductList;