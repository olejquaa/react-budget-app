import { BudgetBadge, CustomSelect, RemainingBadge, SpentBadge } from "..";
import { BudgetContainer, Header, Title } from "./styles";

export const Budget = () => {
  return (
    <BudgetContainer>
      <Header>
        <Title>Budget app</Title>
        <CustomSelect />
      </Header>
      <BudgetBadge />
      <RemainingBadge />
      <SpentBadge />
    </BudgetContainer>
  );
};
