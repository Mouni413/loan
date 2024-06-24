import Styles from "./baseButton.module.scss";
import BaseButton from "./baseButton";

export function PrimaryButton(props: any) {
  return (
    <BaseButton className={Styles.primary} onClick={props.onClick}>
      {props.children}
    </BaseButton>
  );
}

export function SecondaryButton(props: any) {
  return (
    <BaseButton className={Styles.secondary} onClick={props.onClick}>
      {props.children}
    </BaseButton>
  );
}
export function SubmitBotton(props: any) {
  return (
    <BaseButton className={Styles.submitBtn} onClick={props.onClick}>
      {props.children}
    </BaseButton>
  );
}
