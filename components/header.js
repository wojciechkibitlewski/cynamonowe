import * as React from "react";
import { useRouter } from 'next/router'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Link from "next/link";

import styles from "../styles/Home.module.css";

const navItems = [
  {title: "Strona główna", link: "/"},
  {title: "Kontakt i informacje", link: "/kontakt"},
  {title: "Szukasz fotografa?", link: "https://agnieszkamandal.com"}
];
const drawerWidth = 340;

export default function Home(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;
  const router = useRouter()
  const path = router.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "left",
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "20px",
        height: "100vh",
      }}
    >
      <img
        src="images/splash/IMG_9561-300x200.jpg"
        alt="Cynamonowe.com Studio i szklarnia do wynajęcia"
      />
      <Typography
        variant="h6"
        component="div"
        sx={{ textTransform: "uppercase", fontSize: "1.2em" }}
      >
        cynamonowe.com - wnętrze do wynajęcia
      </Typography>
      <Typography variant="body2" gutterBottom>
        Wnętrze do wynajęcia w Katowicach. Jasna i klimatyczna przestrzeń,
        doskonała do sesji i warsztatów fotograficznych oraz do kameralnych
        nagrań filmowych.
        <br />
        <br />
        Rezerwacja terminu: 519 635 973
        <br />
        <br />
      </Typography>
      <Divider sx={{ borderColor: "#999" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ padding: "0px" }}>
              <Link href={item.link} title={item.title}>
              <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "#999" }} />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ffffff",
          color: "#000",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        href="tel: 519635973"
      >
        Zadzwoń teraz
      </Button>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <div className={path === '/kontakt' 
    ? 
    styles.splashContact 
    : 
      path === '/' ? styles.splash : ''
    
    }
    >
          
          <AppBar component="nav">
            <Toolbar sx={{ backgroundColor: "#000000" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <img
                className={styles.logo}
                src="https://cynamonowe.com/wp-content/uploads/2021/05/cynamonowe-white-2.png"
                alt="Cynamonowe.com Studio i szklarnia do wynajęcia"
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              ></Typography>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button href={item.link} key={item.title} sx={{ color: "#fff" }}>
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </div>
        
      
    </>
  );
}
