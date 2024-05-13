import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/landingPage";
import AppLayout from "./components/layout/AppLayout";
import {
  BankDetails,
  BankTransfer,
  Buyer,
  ReviewTranSeller,
  ReviewTransaction,
  Seller,
  SendCryptoAddress,
} from "./pages/user";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<AppLayout />}>
          <Route index element={<Buyer />} />
          <Route path="ourbank" element={<BankTransfer />} />
          <Route path="review" element={<ReviewTransaction />} />
          <Route path="sell" element={<Seller />} />
          <Route path="bank-details" element={<BankDetails />} />
          <Route path="review-sell" element={<ReviewTranSeller />} />
          <Route path="send-crypto" element={<SendCryptoAddress />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
