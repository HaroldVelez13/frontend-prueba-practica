"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Card, CardHeader, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ProductHeader() {
  const router = useRouter();
  const handleCreate = () => {
    const url = "/productos/crear";
    router.push(url);
  };
  return (
    <Grid item xs={12} sx={{ my: 3 }}>
      <Card sx={{ minWidth: 200 }}>
        <CardHeader
          action={
            <IconButton
              aria-label="show-more"
              size="large"
              onClick={handleCreate}>
              <AddCircleOutlineIcon sx={{ fontSize: 30 }} color="primary" />
            </IconButton>
          }
          title="Listado de Productos"
        />
      </Card>
    </Grid>
  );
}
