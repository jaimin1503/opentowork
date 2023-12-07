import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = Cookies.get("token");
    if (!token) {
      navigate("/Login");
    }
  }, [navigate]);
  return (
    <div>
      <Component />
    </div>
  );
};
export default ProtectedRoute;
