import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/material";
import { TextField, TextFieldProps } from "@mui/material";
import { Dayjs } from "dayjs";

const CustomePicker = styled(DatePicker)(({ theme }) => ({
  ".MuiOutlinedInput-notchedOutline": {},
  ".MuiOutlinedInput-input": {
    padding: "12px 8px",
  },
}));

interface DateFieldValueProps {
  label: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  onBlur: () => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

export default function DateFieldValue({
  label,
  value,
  onChange,
  onBlur,
  required,
  error,
  helperText,
}: DateFieldValueProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomePicker
        label={label}
        value={value}
        onChange={(newValue) => onChange(newValue)}
        onBlur={onBlur}
        textField={(props: TextFieldProps) => (
          <TextField
            {...props}
            error={error} // Pass error prop to TextField
            helperText={helperText} // Pass helperText prop to TextField
          />
        )}
      />
    </LocalizationProvider>
  );
}
