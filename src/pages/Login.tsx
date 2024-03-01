import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
   const { register, handleSubmit } = useForm();
  const [Login, { data, error }] = useLoginMutation();
  console.log({data, error});

  const onSubmit = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    }
    Login(userInfo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input {...register('id')} type="text" title="id" id="id" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input {...register('password')} type="text" title="password" id="password" />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;