import Styles from "./Card1.module.css";
import { PrimaryButton, SecondaryButton } from "../button/CButton";
import { useNavigate } from "react-router-dom";
function Card1(props: any) {
  const { data } = props;
  const navigation = useNavigate();
  const navigateLoadDetails = (loanDetails: any) => {
    navigation("/loanDetails", { state: loanDetails });
  };
  const navigateEligibiltyPage = (data: any) => {
    navigation("/eligibilityPage", { state: data });
  };
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.title}>{data.title}</div>
      <div className={Styles.desc}>{data.desc.slice(0, 100)}...</div>
      <div className={Styles.buttonContainer}>
        <PrimaryButton onClick={() => navigateLoadDetails(data)}>
          Know More
        </PrimaryButton>
        <SecondaryButton onClick={() => navigateEligibiltyPage(data)}>
          Check Eligibility
        </SecondaryButton>
      </div>
    </div>
  );
}

export default Card1;
