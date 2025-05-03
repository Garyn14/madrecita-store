import React, { useState, ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemIcon,
  Divider,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import { colors } from "../theme/theme";
import { categories } from "../data/data";

interface HeaderProps {
  children?: ReactNode;
  onCategorySelect: (categoryId: number) => void;
  selectedCategory: number;
}

const Header: React.FC<HeaderProps> = ({ 
  children, 
  onCategorySelect, 
  selectedCategory 
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Add "Todos" category at the beginning
  const allCategories = [
    { id: 0, name: "Todos" },
    ...categories
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleCategoryClick = (categoryId: number) => {
    onCategorySelect(categoryId);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: colors.color2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {/* Ícono de bodega/tienda */}
          <StorefrontIcon 
            sx={{ 
              mr: 2, 
              fontSize: 30,
              color: "#fff",
              filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))"
            }} 
          />

          {/* Título */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#fff",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)"
            }}
          >
            La chingana
          </Typography>

          {/* Menú horizontal en desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "70%" }}>
              {allCategories.slice(0, 6).map((category) => (
                <Typography
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  sx={{
                    mx: 1.5,
                    cursor: "pointer",
                    fontWeight: selectedCategory === category.id ? 700 : 500,
                    position: "relative",
                    py: 2,
                    color: selectedCategory === category.id ? "#fff" : "rgba(255,255,255,0.9)",
                    "&:hover": {
                      color: "#fff",
                      "&::after": {
                        width: "100%",
                      }
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 12,
                      left: 0,
                      width: selectedCategory === category.id ? "100%" : 0,
                      height: 2,
                      backgroundColor: colors.color5,
                      transition: "width 0.3s ease"
                    }
                  }}
                >
                  {category.name}
                </Typography>
              ))}
              {allCategories.length > 6 && (
                <IconButton
                  size="small"
                  color="inherit"
                  aria-label="more categories"
                  onClick={toggleDrawer(true)}
                  sx={{
                    ml: 1,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          )}

          {/* Menú hamburguesa en móviles */}
          {isMobile && (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)"
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer for fixed AppBar */}
      <Toolbar />

      {/* Main content */}
      <Box sx={{ p: 2 }}>
        {children}
      </Box>

      {/* Drawer para el menú móvil */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#fff",
            width: 280,
            boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          aria-label="Menu navigation"
          sx={{ pt: 2 }}
        >
          <Box sx={{ p: 2, display: "flex", alignItems: "center", mb: 1 }}>
            <StorefrontIcon sx={{ color: colors.color2, mr: 1, fontSize: 24 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: colors.color1 }}>
              Categorías
            </Typography>
          </Box>
          
          <Divider sx={{ mb: 2 }} />
          
          <List>
            {allCategories.map((category) => (
              <ListItem 
                component="div" 
                key={category.id} 
                onClick={() => handleCategoryClick(category.id)}
                sx={{ 
                  py: 1.5,
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === category.id ? `${colors.color3}20` : 'transparent',
                  "&:hover": {
                    backgroundColor: `${colors.color3}15`,
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: selectedCategory === category.id ? colors.color1 : colors.color2 }}>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary={category.name}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: selectedCategory === category.id ? 700 : 500,
                      color: selectedCategory === category.id ? colors.color1 : 'inherit',
                    },
                  }}
                />
                {selectedCategory === category.id && (
                  <Chip 
                    size="small" 
                    label="Seleccionado" 
                    sx={{ 
                      backgroundColor: `${colors.color3}30`,
                      color: colors.color1,
                      fontSize: '0.7rem',
                      height: 24
                    }} 
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;