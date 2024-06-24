
import { InputAdornment, TextField, styled } from '@mui/material';


const CustomeInput = styled(TextField)(({ theme }) => ({
    height: "inherit",
    width: "100%",
    // boxSizing: "border-box",
    // fontFamily: "Inter",

    '.MuiOutlinedInput-notchedOutline': {
        borderRadius: '9px',
        border: '1px solid red',

    },

    '& label.Mui-focused': {
        // color: 'orange',
        fontSize: "14px"
    },
    '& input': {
        /* 14.5px = 18.5px - 4px (note: 18.5px is the input's default padding top and bottom) */
        padding: "20px 4px",
        boxSizing: " border-box",
        height: "inherit"
    },
    '& label, input::placeholder': {
        top: '-1px', color: "#7E8299",
        fontSize: "18px", fontWeight: "600"
    },
    // '& input::placeholder': { color: "#7E8299" },

    '& .MuiOutlinedInput-root': {
        height: "100%",
        '& fieldset': {
            borderRadius: '9px',
            border: '1px solid #F1F1F2',
        },
        '&:hover fieldset': {
            borderColor: '#E1E3EA',
        },
        '&.Mui-focused fieldset': {
            border: "1px solid",
            borderColor: 'blue',
        },
    },


}))

export default function InputWithIcon(props: any) {
    const { icon1, icon2, label, type, placeholder, value, name, onChange } = props

    return (
        <CustomeInput
            fullWidth
            placeholder={placeholder}
            type={type}
            InputProps={{
                // ...params.InputProps,
                startAdornment: (
                    <InputAdornment position="start">
                        {icon1 && icon1}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        {icon2 && icon2}
                    </InputAdornment>
                )
            }}

        />
    )
}
