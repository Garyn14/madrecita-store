import React from 'react';
import { Box, Container, Paper, useTheme } from '@mui/material';
import Header from './Header';
import Search from './Search';
import { colors } from '../theme/theme';

interface MainContainerProps {
  children: React.ReactNode;
  onSearch: (searchTerm: string) => void;
  onCategorySelect: (categoryId: number) => void;
  selectedCategory: number;
}

const MainContainer: React.FC<MainContainerProps> = ({ 
  children, 
  onSearch, 
  onCategorySelect,
  selectedCategory 
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Header - The Header component now handles its own spacing */}
      <Header 
        onCategorySelect={onCategorySelect}
        selectedCategory={selectedCategory}
      />
      
      {/* Background gradient */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '300px',
          background: `linear-gradient(160deg, ${colors.color2} 0%, ${colors.color3} 100%)`,
          zIndex: 0,
        }}
      />
      
      {/* Decorative wave */}
      <Box
        sx={{
          position: 'fixed',
          top: '250px',
          left: 0,
          right: 0,
          height: '100px',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.8C384 29 480 34 576 41.2C672 48.3 768 57.7 864 58.3C960 59 1056 51 1152 45.7C1248 40.3 1344 37.7 1392 36.3L1440 35V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill={theme.palette.background.default}
          />
        </svg>
      </Box>
      
      {/* Search component */}
      <Search onSearch={onSearch} />
      
      {/* Main content */}
      <Container 
        maxWidth="lg" 
        component="main"
        sx={{
          mt: { xs: 2, sm: 3, md: 4 }, // Reduced top margin to account for search component
          mb: 6,
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            flex: 1,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default MainContainer;