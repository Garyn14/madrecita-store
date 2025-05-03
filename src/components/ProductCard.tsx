import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  CardActionArea,
  CardActions,
  Button,
  useTheme,
} from '@mui/material';
import { ProductResponse } from '../interfaces/response';
import { colors } from '../theme/theme';

interface ProductCardProps {
  product: ProductResponse;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        borderRadius: 2,
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <CardActionArea>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="div"
            sx={{
              height: 180,
              backgroundColor: product.photo ? 'transparent' : colors.color3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {product.photo ? (
              <img
                src={product.photo}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <Typography 
                variant="h6" 
                sx={{ 
                  textAlign: 'center', 
                  p: 2, 
                  color: theme.palette.getContrastText(colors.color3)
                }}
              >
                {product.name}
              </Typography>
            )}
          </CardMedia>
          
          {/* Price tag */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 0,
              backgroundColor: colors.color1,
              color: '#fff',
              py: 0.5,
              px: 1.5,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            S/ {product.price.toFixed(2)}
          </Box>
        </Box>

        <CardContent sx={{ pt: 2, pb: 1 }}>
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem',
              mb: 1,
              color: colors.color1,
              height: '2.4rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {product.name}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
            <Chip
              label={product.category.name}
              size="small"
              sx={{
                backgroundColor: `${colors.color3}30`,
                color: colors.color1,
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            />
            <Chip
              label={`${product.amount} ${product.unit.symbol}`}
              size="small"
              sx={{
                backgroundColor: `${colors.color4}40`,
                color: colors.color1,
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
      
      <CardActions sx={{ mt: 'auto', pt: 0 }}>
        <Button 
          size="small" 
          sx={{ 
            color: colors.color2,
            '&:hover': {
              backgroundColor: `${colors.color3}20`,
            }
          }}
        >
          Añadir al carrito
        </Button>
        <Typography
          variant="caption"
          sx={{
            ml: 'auto',
            color: theme.palette.text.secondary,
            mr: 1,
          }}
        >
          Código: {product.id.toString().padStart(3, '0')}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProductCard;