"use client";

import Avatar from "@mui/material/Avatar";
import { useSession } from "next-auth/react";
const UserAvatar = () => {
  const { data, status } = useSession();
  const name = Object.values(data?.user)[0];
  if (status === "loading") {
    return <Avatar sx={{ width: 32, height: 32 }} />;
  }
  return (
    <Avatar sx={{ width: 32, height: 32 }}>
      {name?.charAt(0).toUpperCase()}
    </Avatar>
  );
};

export default UserAvatar;
