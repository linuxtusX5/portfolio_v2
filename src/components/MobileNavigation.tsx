import { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <HomeRoundedIcon />, name: "Home", Route: "/home" },
  { icon: <ConstructionRoundedIcon />, name: "Skills", Route: "/skills" },
  { icon: <WorkRoundedIcon />, name: "Projects", Route: "/projects" },
  { icon: <ContactMailRoundedIcon />, name: "Contact", Route: "/contact" },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
    handleClose();
  };
  return (
    <div className="fixed end-6 bottom-6 group">
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClick(action.Route)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
