import React, { useState, useEffect } from 'react';
import { 
  TextField, 
  InputAdornment, 
  IconButton,
  Paper,
  Container,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { colors } from '../theme/theme';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  initialSearchTerm?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, initialSearchTerm = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const theme = useTheme();

  // Update local state when initialSearchTerm prop changes
  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, mt: -3, mb: 3 }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 50,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)'
          },
          border: `1px solid ${colors.color3}20`
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: colors.color2 }} />
              </InputAdornment>
            ),
            endAdornment: searchTerm && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear search"
                  onClick={handleClearSearch}
                  edge="end"
                  size="small"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: colors.color1
                    }
                  }}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              py: 0.5,
              px: 1,
              '& fieldset': {
                border: 'none'
              }
            }
          }}
        />
      </Paper>
    </Container>
  );
};

export default Search;