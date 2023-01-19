import { SearchTypes } from "../../Context/Interfaces";

const SearchInput: React.FC<SearchTypes> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  type,
  className,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      type={type}
      className={className}
    />
  );
};

export default SearchInput;
