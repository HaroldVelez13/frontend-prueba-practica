import { IProduct } from "@/domain/interfaces/IProduct";
import { productSchema } from "@/domain/schemas/ProdcutSchema";
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
  MenuItem,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

const TYPES = ["Perecedero", "No Perecedero"];

interface IProps {
  product?: IProduct;
  handleBack: () => void;
  handleSave: (prodcut: IProduct) => void;
}

export default function ProductForm({
  product,
  handleBack,
  handleSave,
}: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  const onSubmit = (data: any) => {
    const product: IProduct = { stores: [], ...data } as IProduct;
    handleSave(product);
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
                <ReplyIcon color="primary" sx={{ fontSize: 30 }} />
              </IconButton>
            }
            title={
              "Formulario de " + product?.id != null ? "Creación" : "Edición"
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
                defaultValue={product?.name}
                variant="filled"
                {...register("name")}
              />
              <TextField
                sx={{ width: "100%" }}
                id="price"
                label="Precio"
                type="number"
                defaultValue={product?.price}
                variant="filled"
                {...register("price")}
              />
              <TextField
                id="type"
                label="Tipo"
                defaultValue={product?.type ?? "Perecedero"}
                sx={{ width: "100%" }}
                select
                variant="filled"
                {...register("type")}>
                {TYPES.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
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
              onClick={handleSubmit(onSubmit)}>
              Aceptar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
