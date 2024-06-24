
import Styles from "./baseButton.module.scss";
import { Button, styled } from '@mui/material';
// import {  } from '@mui/system';

const CustomeButton = styled(Button)({
fontSize:"13px",
padding:"4px 1px",
// background: 'red',
textTransform:"capitalize",
   '&:hover':{
    // background:"grey",
    // color:"currentColor"
   } 
 
})


function BaseButton(props: any) {
    return (
        <CustomeButton className={`${Styles.container} ${props.className}`} onClick={props.onClick}>
            {props.children}
        </CustomeButton>
    )
}

export default BaseButton