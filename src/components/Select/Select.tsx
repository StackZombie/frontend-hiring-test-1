import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';

interface Style {
  [key: string]: string | number;
}
interface Props {
  options: string[];
  style: Style;
  value: string;
  handleChange: (value: string) => void;
}
const CustomSelect = ({ options, style, value, handleChange }: Props) => {
  return (
    <Select
      value={value}
      style={style}
      onChange={(e) => handleChange(e.target.value)}
    >
      {options?.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
