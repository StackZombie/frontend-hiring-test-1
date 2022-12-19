import { Button } from '@mui/material';

interface Props {
  label?: string;
  className?: string;
  click(): any;
  size: string;
}

const CustomButton = ({ label, click, className, size }: Props) => {
  if (size === 'small') {
    return (
      <Button
        variant="contained"
        onClick={click}
        className={className}
        size="small"
      >
        {label}
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        onClick={click}
        className={className}
        size="medium"
      >
        {label}
      </Button>
    );
  }
};

export { CustomButton };
