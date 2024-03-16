import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data: { id: string; password: string }) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user, token: res.data.accessToken }));
    navigate(`/${user.role}/dashboard`);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input {...register("id")} type="text" title="id" id="id" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          {...register("password")}
          type="text"
          title="password"
          id="password"
        />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
