import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth/Auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AuthRoutes;
