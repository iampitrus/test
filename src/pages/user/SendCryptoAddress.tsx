import PageHeader from "../../components/molecules/PageHeader";
import SendCrypto from "../../components/organisms/SendCrypto";

const SendCryptoAddress = () => {
  return (
    <>
      <PageHeader children={"Send Crypto To Our Address"} />
      <SendCrypto />
    </>
  );
};

export default SendCryptoAddress;
