import { TextField, styled } from '@mui/material';


const CustomeInput = styled(TextField)(({ theme }) => ({
    boxSizing: "border-box",
    fontFamily: "Inter",
    width: 40,
    height: 40,

    '.MuiOutlinedInput-notchedOutline': {
        borderRadius: '6px',
        border: '1px solid black',
    },
    '& input': {
        /* 14.5px = 18.5px - 4px (note: 18.5px is the input's default padding top and bottom) */
        padding: "0px",
        fontSize: "16px"

    },

}))

export default function OtpInput(props: any) {
    const { type, placeholder, value, name, onChange } = props

    return (
        <CustomeInput
            fullWidth
            // className={Styles.inputContainer}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            inputProps={{
                maxLength: 1,
            }}

        // pattern={"[0-9]"}

        />
    )
}
