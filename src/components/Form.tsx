import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    checkbox1: yup.boolean().oneOf([true], "Checkbox 1 is required"),
    radioGroup: yup.string(),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input placeholder="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <div>
        <input type="checkbox" id="checkbox1" name="checkbox1" />
        <label htmlFor="checkbox1">Checkbox 1</label>
        {errors.checkbox1 && <p>{errors.checkbox1.message}</p>}
      </div>
      <div>
        <input type="radio" id="radio1" name="radioGroup" value="radio1" />
        <label htmlFor="radio1">Radio 1</label>
        <input type="radio" id="radio2" name="radioGroup" value="radio2" />
        <label htmlFor="radio2">Radio 2</label>
        {errors.radioGroup && <p>{errors.radioGroup.message}</p>}
      </div>

      <input type="submit" />
    </form>
  );
}
