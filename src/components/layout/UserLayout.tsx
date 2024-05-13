import LoadingToRedirect from "../molecules/Redirect";
import Cookies from "js-cookie";

const UserLayout = ({ children }: any) => {
  const userDetails = Cookies.get("userData");

  let access: any;

  if (userDetails) {
    try {
      access = JSON.parse(userDetails);
      access = access.accessToken;
    } catch (error) {
      console.error("Error parsing JSON from cookie:", error);
    }
  }

  return access ? (
    <div className="fixed left-0 top-0 w-full h-full bg-slate-900 transition justify-center items-center">
      {children}
    </div>
  ) : (
    <LoadingToRedirect />
  );
};

export default UserLayout;
