import { useForm, SubmitHandler } from "react-hook-form";
import { v4 } from "uuid";
import { useExpensesContext } from "../../context";
import { IExpense } from "../../context/ExpensesContext/types";
import { StyledForm, Errors, Input, Title, FormButton } from "./styles";

interface IFormValues {
  id: string;
  name: string;
  cost: number;
}

export const ExpensesForm = () => {
  const { addNewExpense } = useExpensesContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IExpense>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const newExpense = {
      id: v4(),
      name: data.name,
      cost: +data.cost,
    };
    addNewExpense(newExpense);
    reset();
  };

  return (
    <StyledForm id="expense-form" onSubmit={handleSubmit(onSubmit)}>
      <Title>Add expense</Title>
      <Input
        placeholder="Enter name ..."
        type="text"
        {...register("name", {
          required: "Please enter product/service name!",
          maxLength: { value: 25, message: "Max 20 symbols" },
          minLength: { value: 3, message: "Min 3 symbols" },
        })}
      />
      {errors.name && <Errors>{errors.name.message}</Errors>}
      <Input
        placeholder="Enter cost ..."
        type="number"
        {...register("cost", {
          required: "Please enter cost of product/service!",
          maxLength: { value: 8, message: "Max 8 symbols" },
          minLength: { value: 1, message: "Min 1 symbols" },
        })}
      />
      {errors.cost && <Errors>{errors.cost.message}</Errors>}
      <FormButton form="expense-form" type="submit">
        Done
      </FormButton>
    </StyledForm>
  );
};
