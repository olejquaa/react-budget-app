import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";



export const Expenses = () => {
  const { balance } = useBudgetContext();
  console.log("thsis is from expenses")
  console.log(balance)
  return (
  
    <div>Expenses </div>
  
  )
}
