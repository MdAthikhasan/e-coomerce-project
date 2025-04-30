"use client";

import Avatar from "@mui/material/Avatar";
import { useSession } from "next-auth/react";
const UserAvatar = () => {
  const { data, status } = useSession();
  const { user } = data;
  return (
    <Avatar sx={{ width: 32, height: 32 }}>
      {user.name.charAt(0).toUpperCase()}
    </Avatar>
  );
};

export default UserAvatar;
