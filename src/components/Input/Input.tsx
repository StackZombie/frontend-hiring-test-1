import { TextField } from '@mui/material';

interface Props {
  fullWidth?: boolean;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  required?: boolean;
  value?: string;
  type: string;
}

const Input = ({
  name,
  label,
  onChange,
  required,
  value,
  fullWidth,
  type,
}: Props) => {
  return (
    <TextField
      required={required}
      label={label}
      name={name}
      autoFocus
      type={type}
      fullWidth={fullWidth}
      onChange={onChange}
      value={value}
      margin="normal"
    />
  );
};

export { Input };
