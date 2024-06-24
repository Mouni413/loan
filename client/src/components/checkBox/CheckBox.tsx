
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


const CustomeCheckbox = styled(Checkbox)(({ theme }) => ({
    // color: "red",
    '& .MuiSvgIcon-root': {
        // fontSize: "22px",
        // // width:"20px",
        // // height:"20px",
        // background:"red",
        // border: "1px solid #E1E3EA",
        // color: "green",
    }
}))


export default function CCheckBox(props: any) {
    const { onChange, setChecked, checked, name, value,disabled } = props
    // const [checked, setCheked] = useState([true, false])
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const abc = ([checked[0], event.target.checked]);
        setChecked(event.target.checked)
    };

    return (
        <CustomeCheckbox
            size='medium'
            onChange={handleChange3}
            // checked={checked}
            value={value}
            name={name}
            disabled={disabled}
            // style={{color:"red"}}
        />
        // <input
        //     className={Styles.container}
        //     type='checkbox'
        // />
    )
}
