import { IStore } from "@/domain/interfaces/IStore";
import { storeSchema } from "@/domain/schemas/StoreSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

const TYPES = ["Perecedero", "No Perecedero"];

interface IProps {
  store?: IStore;
  handleBack: () => void;
  handleSave: (store: IStore) => void;
}

export default function StoreForm({ store, handleBack, handleSave }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(storeSchema),
  });
  const onSubmit = (data: any) => {
    const _store: IStore = { products: [], ...data } as IStore;
    handleSave(_store);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Grid item xs={10} md={6} lg={4}>
        <Card sx={{ minWidth: 200 }}>
          <CardHeader
            action={
              <IconButton aria-label="settings" onClick={handleBack}>
                <ReplyIcon color="secondary" sx={{ fontSize: 30 }} />
              </IconButton>
            }
            title={
              "Formulario de " + store?.id != null ? "Creación" : "Edición"
            }
          />
          <CardContent sx={{ mt: -2 }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, minWidth: "25ch" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                sx={{ width: "100%" }}
                id="name"
                label="Nombre"
                defaultValue={store?.name}
                variant="filled"
                {...register("name")}
              />

              <TextField
                sx={{ width: "100%" }}
                id="city"
                label="Ciudad"
                defaultValue={store?.city}
                variant="filled"
                {...register("city")}
              />
              <TextField
                sx={{ width: "100%" }}
                id="address"
                label="Dirección"
                defaultValue={store?.address}
                variant="filled"
                {...register("address")}
              />
            </Box>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{
              display: "flex",
              justifyContent: "center",
              px: 2,
            }}>
            <Button
              aria-label="Delete"
              variant="outlined"
              color="secondary"
              onClick={handleSubmit(onSubmit)}>
              Aceptar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
