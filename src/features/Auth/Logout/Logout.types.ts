export interface ILogout {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  onLogout: () => void;
}
