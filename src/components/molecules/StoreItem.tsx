"use client";
import { IStore } from "@/domain/interfaces/IStore";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Avatar, Card, CardHeader, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

interface IProps {
  store: IStore;
}
export default function StoreItem({ store }: IProps) {
  const router = useRouter();
  const handleShow = () => {
    const url = "/tiendas/" + store.id;
    router.push(url);
  };
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card sx={{ minWidth: 200 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "secondary.main" }}>{store.name[0]}</Avatar>
          }
          action={
            <IconButton aria-label="show-more" onClick={handleShow}>
              <ReadMoreIcon />
            </IconButton>
          }
          title={store.name}
          subheader={store.city}
        />
      </Card>
    </Grid>
  );
}
