import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Grid,
} from "@mui/material";
import CInput from "../../components/input/CInput";
import CCheckBox from "../../components/checkBox/CheckBox";
import Text from "../../components/Text/Text";
import { SubmitBotton } from "../../components/button/CButton";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import DateFieldValue from "../../components/datePicker/DatePicker";
import Styles from "./CreditScore.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { Dayjs } from "dayjs";

const genders = ["Male", "Female", "Other"];

function CreditScoreCheckingForm() {
  const [inputValues, setInputValues] = useState({
    adharName: "",
    adharNumber: "",
    panNumber: "",
    dob: null as Dayjs | null,
    gender: "" as string,
  });
  const [errors, setErrors] = useState({
    adharName: "",
    adharNumber: "",
    panNumber: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    if (!value) {
      errorMessage = `${name} is required`;
    } else if (name === "adharNumber" && !/^\d{12}$/.test(value)) {
      errorMessage = `${name} is invalid, it must be a 12-digit number`;
    } else if (
      name === "panNumber" &&
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)
    ) {
      errorMessage = `${name} is invalid`;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleDateChange = (date: Dayjs | null) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      dob: date,
    }));

    if (!date) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dob: "Date of Birth is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dob: "",
      }));
    }
  };

  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      gender: genderValue,
    }));

    if (!genderValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: "Gender is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: "",
      }));
    }
  };

  const handleDateBlur = () => {
    if (!inputValues.dob) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dob: "Date of Birth is required",
      }));
    }
  };

  const navigation = useNavigate();
  const navigateTo = () => {
    navigation("");
  };
  const company = ["infosys", "google", "konso coud"];
  return (
    <div className={Styles.creditBackgroundContainer}>
      <div>
        <BackButton />
      </div>
      <form>
        <Grid container spacing={2}>
          <Grid item sm={8} margin={"auto"}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CInput
                  placeholder="Enter Your Name as per Aadhar"
                  name="adharName"
                  type="text"
                  required={true}
                  value={inputValues.adharName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.adharName}
                  error={!!errors.adharName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput
                  placeholder="Enter Your Aadhar Number"
                  name="adharNumber"
                  type="number"
                  required={true}
                  value={inputValues.adharNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.adharNumber}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CInput
                  placeholder="Please Enter Your Pan Number"
                  name="panNumber"
                  type="text"
                  value={inputValues.panNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={true}
                  error={!!errors.panNumber}
                  helperText={errors.panNumber}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <DateFieldValue
                  label="Date of Birth"
                  value={inputValues.dob}
                  onChange={handleDateChange}
                  onBlur={handleDateBlur}
                  required={true}
                  error={!!errors.dob}
                  helperText={errors.dob}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container gap={2} mt={1}>
                  <FormControl
                    component="fieldset"
                    error={!!errors.gender}
                    required
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      value={inputValues.gender}
                      onChange={handleGenderChange}
                    >
                      {genders.map((gender) => (
                        <FormControlLabel
                          key={gender}
                          value={gender}
                          control={<Radio />}
                          label={gender}
                        />
                      ))}
                    </RadioGroup>
                    {!!errors.gender && <div>{errors.gender}</div>}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={company}
                  renderInput={(params) => (
                    <TextField {...params} label="Enter Your Company Name" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput placeholder="Enter Your Offcial Mail Id" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput placeholder="Enter Your Employe Id" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput placeholder="Enter Your Desiganation" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput placeholder="Enter Salary Crediting Bank Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput placeholder="Enter Your Net Salary" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput placeholder="Enter Your Father Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CInput placeholder="Enter Your Mother Name" />
              </Grid>
            </Grid>
            <Grid display={"flex"} alignItems={"center"}>
              <CCheckBox />
              <Text>
                I authorize Finmate to access my credit score and credit report
                supplied by our credit bureaus and have accepted the terms of
                use
              </Text>
            </Grid>
            <Grid>
              <Link to={""}>
                <SubmitBotton>Submit</SubmitBotton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreditScoreCheckingForm;
