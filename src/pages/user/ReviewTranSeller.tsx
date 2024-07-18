import { useSelector } from "react-redux";
import PageHeader from "../../components/molecules/PageHeader";
import ReviewSell from "../../components/organisms/ReviewSell";
import { selectUser } from "../../redux/userSlice";

const ReviewTranSeller = () => {
  const isPaymentCreated = useSelector(selectUser)?.newPaymentDetails;

  return (
    <>
      {!isPaymentCreated && <PageHeader children={"Review Transaction"} />}
      <ReviewSell />
    </>
  );
};

export default ReviewTranSeller;
