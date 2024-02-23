import CardSkeleton from "@/components/atoms/CardSkeleton";
import { IProduct } from "@/domain/interfaces/IProduct";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

interface IProps {
  product: IProduct;
  handleBack: () => void;
  handleUpdate: () => void;
  deleteProduct: (id: number) => void;
}

export default function ProductCard({
  product,
  handleBack,
  handleUpdate,
  deleteProduct,
}: IProps) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Grid item xs={10} md={6} lg={4}>
        {product.id ? (
          <Card sx={{ minWidth: 200 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings" onClick={handleBack}>
                  <ReplyIcon color="primary" sx={{ fontSize: 30 }} />
                </IconButton>
              }
              title={product.name}
            />
            <CardContent sx={{ mt: -2 }}>
              <Typography variant="body1" color="text.secondary">
                Precio: ${product.price}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Tipo: {product.type}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 2,
              }}>
              <Button
                aria-label="Delete"
                color="error"
                variant="outlined"
                onClick={() => deleteProduct(Number(product.id))}>
                Eliminar
              </Button>
              <Button
                aria-label="add to favorites"
                color="error"
                variant="outlined"
                onClick={handleUpdate}>
                Editar
              </Button>
            </CardActions>
          </Card>
        ) : (
          <CardSkeleton />
        )}
      </Grid>
    </Grid>
  );
}
