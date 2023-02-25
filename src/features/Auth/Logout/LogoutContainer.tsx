import React from "react";
import Logout from "./Logout";
import { useAuth } from "../../../context/auth.context";
import Spinner from "../../../shared/ui/Spinner";

const LogoutContainer: React.FC = () => {
  const { logout, isLoadingLogout } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onLogout = () => {
    logout?.();
    handleClose();
  };

  if (isLoadingLogout) return <Spinner />;

  return (
    <Logout
      handleOpen={handleOpen}
      handleClose={handleClose}
      open={open}
      onLogout={onLogout}
    />
  );
};

export default LogoutContainer;
