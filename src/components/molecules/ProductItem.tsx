"use client";
import { IProduct } from "@/domain/interfaces/IProduct";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Avatar, Card, CardHeader, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

interface IProps {
  product: IProduct;
}
export default function ProductItem({ product }: IProps) {
  const router = useRouter();
  const handleShow = () => {
    const url = "/productos/" + product.id;
    router.push(url);
  };
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card sx={{ minWidth: 200 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main" }}>{product.name[0]}</Avatar>
          }
          action={
            <IconButton aria-label="show-more" onClick={handleShow}>
              <ReadMoreIcon />
            </IconButton>
          }
          title={product.name}
          subheader={"$" + product.price}
        />
      </Card>
    </Grid>
  );
}
