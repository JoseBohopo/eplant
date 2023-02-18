import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  StyledAuthButton,
  StyledContainer,
  StyledFormControl,
} from "../sign-up/css/styles";
import { Inputs } from "../sign-up/types";

export default function LoginLayout(): any {
  const { logIn, logOut } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Inputs, "password_confirm">>();
  const onSubmit: SubmitHandler<Omit<Inputs, "password_confirm">> = async (
    data
  ) => {
    try {
      await logIn(data.email, data.password);
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <StyledFormControl
            defaultValue="test"
            {...(register("email"), { required: true })}
            type="email"
            placeholder="Email"
            required
          />
          {errors.email?.message && <span>This field is required</span>}
        </div>
        {/* group */}

        <div className="form-group">
          <StyledFormControl
            defaultValue="test"
            {...(register("password"), { required: true })}
            type="password"
            placeholder="Password"
            required
          />
          <p>
            {" "}
            {errors.password?.message && <span>This field is required</span>}
          </p>
        </div>

        <StyledAuthButton type="submit">Login</StyledAuthButton>
      </form>
      <a onClick={handleLogout}>LogOut</a>
    </StyledContainer>
  );
}
