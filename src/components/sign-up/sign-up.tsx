import {
  StyledAuthButton,
  StyledContainer,
  StyledFormControl,
} from "./css/styles";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Inputs } from "./types";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function SingUpLayout() {
  const { signUp } = useAuth();
  const router = useRouter();
  const methods = useForm<Inputs>({ mode: "onBlur" });
  console.log(useAuth());
  const [shown, setShown] = useState(false);
  console.log(shown);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      await signUp(data.email, data.password);
      router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              defaultValue="test"
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              required
            />
            {errors.email && <span>This field is required</span>}
          </div>
          {/* group */}

          <div className="form-group">
            <label htmlFor="" className="block mb-3 font-sans text-blue-900">
              Password
            </label>
            <StyledFormControl
              defaultValue="test"
              {...register("password", { required: true })}
              type={shown ? "text" : "password"}
              placeholder="Password"
            />
            <StyledFormControl
              type="checkbox"
              onChange={(e) => setShown(e?.target.checked)}
            />{" "}
            {errors.password && <span>This field is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="">Confirm Password</label>
            <StyledFormControl
              defaultValue="test"
              {...register("password_confirm", { required: true })}
              type={shown ? "text" : "password"}
              placeholder="Confirm Password"
            />

            {errors.password_confirm?.message && (
              <span>This field is required</span>
            )}
          </div>
          <StyledAuthButton type="submit">Login</StyledAuthButton>
        </form>
      </StyledContainer>
    </FormProvider>
  );
}
