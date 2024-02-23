import CardSkeleton from "@/components/atoms/CardSkeleton";
import { IStore } from "@/domain/interfaces/IStore";
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
  store: IStore;
  handleBack: () => void;
  handleUpdate: () => void;
  deleteProduct: (id: number) => void;
}

export default function StoreCard({
  store,
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
        {store.id ? (
          <Card sx={{ minWidth: 200 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings" onClick={handleBack}>
                  <ReplyIcon color="secondary" sx={{ fontSize: 30 }} />
                </IconButton>
              }
              title={store.name}
            />
            <CardContent sx={{ mt: -2 }}>
              <Typography variant="body1" color="text.secondary">
                Ciudad: {store.city}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Direccón: {store.address}
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
                onClick={() => deleteProduct(Number(store.id))}>
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
