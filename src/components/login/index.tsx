import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import "./styles";
import { useAuth } from "../providers/Auth";
import { TextField, Box, Button } from "@material-ui/core";
import { FormBox } from "./styles";

interface dataSchema {
  email: string;
  password: string;
}
const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataSchema>({ resolver: yupResolver(schema) });

  const { signIn } = useAuth();

  const onSubmit = (data: dataSchema) => {
    signIn(data);
    console.log(data);
  };
  return (
    <>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          margin="normal"
          size="small"
          color="secondary"
          variant="filled"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Senha"
          margin="normal"
          size="small"
          color="secondary"
          variant="filled"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </FormBox>
    </>
  );
};
export default Login;
