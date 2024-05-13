const Transaction = ({
  type,
}: {
  type: "success" | "processing" | "cancel";
}) => {
  switch (type) {
    case "success":
      return (
        <div className="w-[30rem] h-[30rem] border-none rounded-2xl bg-boxcolor"></div>
      );
    case "processing":
      return (
        <div className="w-[30rem] h-[30rem] border-none rounded-2xl bg-boxcolor"></div>
      );
    case "cancel":
      return (
        <div className="w-[30rem] h-[30rem] border-none rounded-2xl bg-boxcolor"></div>
      );

    default:
      break;
  }
};

export default Transaction;
