import { ChangeEvent } from "react";
import { Search } from "./styles";

interface IProps {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ExpensesSearch = ({ value, onChange }: IProps) => {
  return <Search value={value} onChange={onChange} placeholder="Search..."/>
};
