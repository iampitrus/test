import { ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, showAuth } from "../../redux/authSlice";

function ModalContainer({ children }: { children: ReactNode }) {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const show = useSelector(selectAuth).showAuth;

  useEffect(() => {
    window.onclick = (e) => {
      if (e.target == modalRef.current) {
        dispatch(showAuth(false));
      }
    };
  }, []);

  return (
    <div
      ref={modalRef}
      style={show ? { display: "flex" } : { display: "none" }}
      className="fixed z-10 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.85)] transition justify-center items-center"
    >
      {children}
    </div>
  );
}

export default ModalContainer;
