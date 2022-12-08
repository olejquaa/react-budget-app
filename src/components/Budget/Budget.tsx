import { BudgetBadge } from "../BudgetBadge/BudgetBadge";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { BudgetContainer, Header, Title } from "./styles";

export const Budget = () => {
  return (
    <BudgetContainer>
      <Header>
        <Title>Budget app</Title>
        <CustomSelect />
      </Header>
      <BudgetBadge />
    </BudgetContainer>
  );
};
