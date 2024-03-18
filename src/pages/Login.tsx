import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();

  const onSubmit = async (data:FieldValues) => {
    const toastId = toast.loading("logging in...");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Logged in successfully", { id: toastId, duration: 2500 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong, please try again", { id: toastId,duration: 2500});
    }
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