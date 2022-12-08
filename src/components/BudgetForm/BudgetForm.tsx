import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useToggle } from "../../hooks/useToggle";
import { Balance } from "../Balance/Balance";
import { Badge, Button, Form, StyledInput } from "./styles";

interface IFormValues {
  value: string;
}

export const BudgetForm = () => {
  const [isEditMode, setEditMode] = useState(true);

  const { setNewBalanceValue } = useBudgetContext();
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (data) {
      setNewBalanceValue(data);
    }
  };

  const handleClick = () => {
    setEditMode(!isEditMode);
  };


  return (
    <Badge>
      <Form id="balance-form" onSubmit={handleSubmit(onSubmit)}>
        {isEditMode ? (
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
      </Form>
      <Button form="balance-form" type="submit" onClick={handleClick}>
        {" "}
        {isEditMode ? "Edit" : "Save"}
      </Button>
    </Badge>
  );
};
