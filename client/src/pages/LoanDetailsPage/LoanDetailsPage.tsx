
import { useLocation, useNavigate } from 'react-router-dom'
import Styles from "./loanDetails.module.scss";
import BackButton from '../../components/BackButton/BackButton';

function LoanDetailsPage() {
    const location = useLocation();
    const data = location.state
    console.log("locate", data.state);
    const navigation = useNavigate()

   
    return (
        <div className={Styles.container}>
            <div>
                <BackButton />
                <h2 className={Styles.heading}>{data.title} </h2>
            </div>

            <p>
                {data.desc}
            </p>
            <p>
                {data.des01}
            </p>
            <p>
                {data.des02}
            </p>
            <p>
                {data.des03}
            </p>
            <p>
                {data.des04}
            </p>
            <p>
                {data.des05}
            </p>
        </div>
    )
}

export default LoanDetailsPage