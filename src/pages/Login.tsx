import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: "A-0001",
  //     password: "admin123",
  //   },
  // });
  // const {register}=useFormContext()
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("logging in...");
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user, token: res.data.accessToken }));
    //   toast.success("Logged in successfully", { id: toastId, duration: 2500 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (error) {
    //   toast.error("Something went wrong, please try again", { id: toastId,duration: 2500});
    // }
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="id" label={"Id:"} />
      </div>
      <div>
        <PHInput type="text" name="password" label={"Password:"} />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
