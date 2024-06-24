
import BaseButton from './baseButton';
import Styles from "./baseButton.module.scss";

function DisabledBotton(props:any) {
    return (
        <BaseButton className={Styles.disabled}>
            {props.children}
        </BaseButton>
    )
}

export default DisabledBotton