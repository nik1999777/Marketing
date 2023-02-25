import React from "react";
import Login from "./Login";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginRequestDto } from "../../../api/model";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../../context/auth.context";
import Spinner from "../../../shared/ui/Spinner";

const LoginContainer: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestDto>({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: yupResolver(
      yup.object({
        userName: yup.string().required("username is required"),
        password: yup.string().required("password is required"),
      })
    ),
  });
  const { login, isLoadingLogin } = useAuth();

  const onLogin: SubmitHandler<LoginRequestDto> = ({ userName, password }) => {
    login?.(userName, password);
  };

  if (isLoadingLogin) return <Spinner />;

  return (
    <Login
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      onLogin={onLogin}
    />
  );
};

export default LoginContainer;
