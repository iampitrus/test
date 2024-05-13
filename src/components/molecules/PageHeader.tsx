import { BsArrowLeft } from "react-icons/bs";
import TextInput from "../atoms/TextInput";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ children }: any) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-[5px]">
      <BsArrowLeft onClick={() => navigate(-1)} className="text-white" />
      <TextInput>{children}</TextInput>
    </div>
  );
};

export default PageHeader;
