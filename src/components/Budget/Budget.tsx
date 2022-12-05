import { BudgetBadge } from "../BudgetBadge/BudgetBadge";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Title } from "./styles";

export const Budget = () => {
  return (
    <div>
      <Title>
        <h2>Budget</h2>
        <CustomSelect />
      </Title>
      <BudgetBadge />
    </div>
  );
};
