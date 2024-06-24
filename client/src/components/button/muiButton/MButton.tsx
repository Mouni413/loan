"use client";
import { Button, styled } from "@mui/material";

const ColorButton = styled(Button)(() => ({
  border:"none",
  borderRadius:"12px",
  padding:"6px",
  margin:"0",
  paddingRight:"0px",

  '&:hover': {
    backgroundColor: "#63AE45",
  },
}));

export const MButton = (props: any) => {
  return (
    <ColorButton
    //  className={`${Styles.button}`}
     onClick={props.onClick}
     >
      {props.children}
    </ColorButton>
  )
}