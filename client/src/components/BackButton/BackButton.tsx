
import { useNavigate } from 'react-router-dom'
import Styles from "./backbutton.module.scss";
function BackButton() {
    const navigation = useNavigate()

    const backPage = () => navigation(-1)
    return (
        <button className={Styles.backButton}
            onClick={backPage}>
            Back
        </button>
    )
}

export default BackButton