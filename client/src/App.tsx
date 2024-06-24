import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MainLayout from "./components/MainLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./styles/theme.css";
import LoanDetailsPage from "./pages/LoanDetailsPage/LoanDetailsPage";
import TermsAndConditons from "./pages/TermsAndConditons/TermsAndConditons";
import CreditScoreCheckingForm from "./pages/CreditScoreCheckingForm/CreditScoreCheckingForm";
import Mobileotp from "./pages/EligibilityPage/Mobileotp";
import CInput from "./components/input/CInput";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="loanDetails" element={<LoanDetailsPage />} />
      <Route path="eligibilityPage" element={<Mobileotp />} />
      <Route path="termsPage" element={<TermsAndConditons />} />
      <Route
        path="creditScoreCheckingForm"
        element={<CreditScoreCheckingForm />}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
