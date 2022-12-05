import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { Balance } from "../Balance/Balance";
import { StyledButton, StyledForm, StyledInput } from "./styles";
interface IFormValues {
  value: string;
}

export const BudgetForm = () => {
  const [active, setActive] = useState(true);

  const { setNewBalanceValue } = useBudgetContext();
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (data) {
      setNewBalanceValue(data);
    }
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <StyledForm>
      <form id="balance-form" onSubmit={handleSubmit(onSubmit)}>
        {active ? (
          <Balance />
        ) : (
          <StyledInput
            type="number"
            min="0"
            max="999999999"
            className="form-control"
            placeholder="Enter budget..."
            {...register("value")}
          />
        )}
      </form>
      <StyledButton form="balance-form" type="submit" onClick={handleClick}>
        {" "}
        {active ? "Edit" : "Save"}
      </StyledButton>
    </StyledForm>
  );
};
