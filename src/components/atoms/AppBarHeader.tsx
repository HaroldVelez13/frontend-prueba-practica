"use client";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AppBarHeader() {
  const router = useRouter();

  const goTo = (url: string) => {
    router.push(url);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Productos
        </Typography>
        <Button color="inherit" onClick={() => goTo("/productos")}>
          Productos
        </Button>
        <Button color="inherit" onClick={() => goTo("/tiendas")}>
          Tiendas
        </Button>
      </Toolbar>
    </AppBar>
  );
}
