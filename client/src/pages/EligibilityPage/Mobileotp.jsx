import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Styles from "./Mobileotp.module.css";
import { Button, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import { SubmitBotton } from "./../../components/button/CButton";

const Mobileotp = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const navigation = useNavigate();
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        navigation("/creditScoreCheckingForm");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className={Styles.container}>
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className={Styles.phoneContainer}>
            <Typography variant="h4">Welcome to FineMate</Typography>
            {showOTP ? (
              <>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <LockIcon />
                  <Typography>Enter your OTP</Typography>
                </Box>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <SubmitBotton onClick={onOTPVerify}>
                  {loading ? (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  ) : (
                    <span>Verify OTP</span>
                  )}
                </SubmitBotton>
              </>
            ) : (
              <>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <PhoneIcon />
                  <Typography>Verify your phone number</Typography>
                </Box>
                <PhoneInput
                  country={"in"}
                  value={ph}
                  onChange={setPh}
                  className={Styles.phoneInput}
                />
                <SubmitBotton onClick={onSignup}>
                  {loading ? (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  ) : (
                    <span>Send code via SMS</span>
                  )}
                </SubmitBotton>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mobileotp;
