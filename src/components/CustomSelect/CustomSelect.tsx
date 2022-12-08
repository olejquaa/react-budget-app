import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context";

export const CustomSelect = () => {
  const { currencies, currentCurrency, setNewCurrency } = useCurrencyContext();
  const handleSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };
  return (
    <Select
      options={currencies}
      isSearchable={false}
      value={currentCurrency}
      onChange={handleSelect}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          boxSizing: "border-box",
          minHeight: 10,
          padding: 0,
          fontSize: 12,
          borderColor: state.isFocused ? "blue" : "gray",
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          padding: 2,
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          padding: 0,
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          padding: 2,
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          fontSize: 12,
          padding: 2,
          borderRadius: 10,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          top: 20,
        }),
      }}
    />
  );
};
