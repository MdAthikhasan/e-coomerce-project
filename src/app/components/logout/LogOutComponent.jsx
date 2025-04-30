"use client";
import { doLogout } from "@/app/actions";

import Logout from "@mui/icons-material/Logout";
import { MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";

function LogOutComponent() {
  return (
    <MenuItem onClick={() => doLogout()}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  );
}

export default LogOutComponent;
