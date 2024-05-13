import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoadingToRedirect() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate("/");

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <section className="h-screen w-screen bg-formPrimary flex items-center justify-center bg-dark">
      <div className="h-1/2 w-2/3 p-6 text-center shadow-lg bg-[#2C2D3A] rounded-lg flex justify-between flex-col">
        <h1 className="text-2xl text-white clas font-bold">
          You are not allowed to access this page
        </h1>
        <p className="text-slate-400">You don' t have an account? Create one</p>{" "}
        <p className="text-xl text-white">
          Redirecting you in <span className="text-primary">{count}</span>{" "}
          sec...
        </p>
      </div>
    </section>
  );
}

export default LoadingToRedirect;
