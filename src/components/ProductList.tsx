import React, { useMemo } from 'react';
import { productsData } from '../data/data';
import ProductCard from './ProductCard';
import { Typography, Box, Container } from '@mui/material';
import { colors } from '../theme/theme';
import { matchesSearch } from '../utils/stringUtils';

interface ProductListProps {
  searchTerm?: string;
  selectedCategory?: number;
}

const ProductList: React.FC<ProductListProps> = ({ 
  searchTerm = '', 
  selectedCategory = 0 
}) => {
  // Get all products
  const allProducts = productsData();
  
  // Filter products based on search term and selected category
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Filter by search term using the enhanced search matching
      const matchesSearchTerm = matchesSearch(product.name, searchTerm);
      
      // Filter by category (0 means "All categories")
      const matchesCategory = selectedCategory === 0 || 
        product.category.id === selectedCategory;
      
      return matchesSearchTerm && matchesCategory;
    });
  }, [allProducts, searchTerm, selectedCategory]);

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
          Doñis Doñis
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: 800
          }}
        >
          Los productos de la doñis doñis. Todos los derechos reservados. Prohibido su reproducción total o parcial.
        </Typography>
      </Box>

      {/* Search and filter info */}
      {(searchTerm || selectedCategory !== 0) && (
        <Box 
          sx={{ 
            mb: 3, 
            p: 2, 
            backgroundColor: `${colors.color3}10`,
            borderRadius: 2,
            border: `1px solid ${colors.color3}20`
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {searchTerm && `Búsqueda: "${searchTerm}"`}
            {searchTerm && selectedCategory !== 0 && ' | '}
            {selectedCategory !== 0 && `Categoría: ${allProducts.find(p => p.category.id === selectedCategory)?.category.name || ''}`}
          </Typography>
        </Box>
      )}

      {filteredProducts.length > 0 ? (
        <Box 
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: -1.5, // Compensate for padding
            animation: 'fadeIn 0.6s ease-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          {filteredProducts.map((product, index) => (
            <React.Fragment key={`fragment-${product.id}`}>
              {/* Category title only one for each group of category*/}
              {(index === 0 || filteredProducts[index - 1].category.id !== product.category.id) && (
                <Box
                  key={`category-${product.category.id}`}
                  sx={{
                    width: '100%',
                    padding: 1.5,
                    backgroundColor: colors.color2,
                    color: 'white',
                    fontWeight: 600,
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
                    '@keyframes fadeIn': {
                      '0%': { opacity: 0, transform: 'translateY(10px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' }
                    },
                    animationFillMode: 'both'
                  }}
                >
                  {product.category.name}
                </Box>
              )}
              <Box 
                key={`product-${product.id}`}
                sx={{
                  width: {
                    xs: '100%',
                    sm: '50%',
                    md: '33.33%',
                    lg: '25%'
                  },
                  padding: 1.5,
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                  },
                  animationFillMode: 'both'
                }}
              >
                <ProductCard product={product} />
              </Box>
            </React.Fragment>
          ))}
        </Box>
      ) : (
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
          <Typography variant="body2" sx={{ mt: 1 }}>
            Intenta con otra búsqueda o categoría
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ProductList;