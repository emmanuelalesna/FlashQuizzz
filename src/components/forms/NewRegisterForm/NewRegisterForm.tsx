import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
};

export default function NewRegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {  
    console.log(data);
    console.log(data.Email);
  };
  console.log(watch("FirstName"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
      <input
        placeholder="First name"
        {...register("FirstName", { required: true })}
        className="form-control"
      />
      <input
        placeholder="Last name"
        {...register("LastName", { required: true })}
        className="form-control"
      />
      <input
        placeholder="Email"
        {...register("Email", { required: true })}
        className="form-control"
      />
      <input
        placeholder="Password"
        {...register("Password", { required: true })}
        className="form-control"
      />
      {errors.FirstName && <span>First name is required</span>}
      {errors.LastName && <span>Last name is required</span>}
      {errors.Email && <span>Email is required</span>}
      {errors.Password && <span>Password is required</span>}
      <input type="submit" className="btn btn-primary btn-block w-100" />
    </form>
  );
}
