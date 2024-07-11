import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/landingPage";
import AppLayout from "./components/layout/AppLayout";
import {
  BankDetails,
  BankTransfer,
  Buyer,
  InputEmail,
  ReviewTranSeller,
  ReviewTransaction,
  Seller,
  SendCryptoAddress,
} from "./pages/user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user" element={<AppLayout />}>
        <Route index element={<Navigate to="/user/buy" replace />} />
        {/* buy */}
        <Route path="buy">
          <Route index element={<Buyer />} />
          <Route path="ourbank" element={<BankTransfer />} />
          <Route path="receipt" element={<InputEmail />} />
          <Route path="review" element={<ReviewTransaction />} />
        </Route>
        {/* sell */}
        <Route path="sell">
          <Route index element={<Seller />} />
          <Route path="bank-details" element={<BankDetails />} />
          <Route path="receipt" element={<InputEmail />} />
          <Route path="send-crypto" element={<SendCryptoAddress />} />
          <Route path="review-sell" element={<ReviewTranSeller />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
