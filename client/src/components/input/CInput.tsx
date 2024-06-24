import { TextField, styled } from "@mui/material";

const CustomeInput = styled(TextField)(({ theme }) => ({
  height: "48px",
  boxSizing: "border-box",
  fontFamily: "Inter",

  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: "6px",
    border: "1px solid #E1E3EA",
  },

  "& label.Mui-focused": {
    // color: 'orange',
    fontSize: "14px",
  },
  "& input": {
    /* 14.5px = 18.5px - 4px (note: 18.5px is the input's default padding top and bottom) */
    // padding:"20px",
  },
  "& label, input::placeholder": {
    top: "-1px",
    color: "#7E8299",
    fontSize: "12px",
    fontWeight: "500",
  },
  // '& input::placeholder': { color: "#7E8299" },

  "& .MuiOutlinedInput-root": {
    height: "100%",
    "& fieldset": {
      borderRadius: "6px",
      border: "1px solid #E1E3EA",
    },
    "&:hover fieldset": {
      borderColor: "#E1E3EA",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid",
      borderColor: "blue",
    },
  },
}));

interface CInputProps {
  label?: string;
  type?: string;
  placeholder: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

export default function CInput({
  label,
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  required = false,
  onBlur,
  error,
  helperText,
}: CInputProps) {
  return (
    <CustomeInput
      fullWidth
      placeholder={placeholder}
      label={label || placeholder}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    />
  );
}
