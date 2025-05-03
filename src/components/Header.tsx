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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import { colors } from "../theme/theme";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const menuItems = ["Categoría 1", "Categoría 2", "Categoría 3"];

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
            Mi Tienda
          </Typography>

          {/* Menú horizontal en desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    mx: 2,
                    cursor: "pointer",
                    fontWeight: 500,
                    position: "relative",
                    py: 2,
                    color: "rgba(255,255,255,0.9)",
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
                      width: 0,
                      height: 2,
                      backgroundColor: colors.color5,
                      transition: "width 0.3s ease"
                    }
                  }}
                >
                  {item}
                </Typography>
              ))}
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
              Mi Tienda
            </Typography>
          </Box>
          
          <Divider sx={{ mb: 2 }} />
          
          <List>
            {menuItems.map((item) => (
              <ListItem 
                component="div" 
                key={item} 
                sx={{ 
                  py: 1.5,
                  cursor: 'pointer',
                  "&:hover": {
                    backgroundColor: `${colors.color3}15`,
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: colors.color2 }}>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 500,
                      color: colors.color1,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;