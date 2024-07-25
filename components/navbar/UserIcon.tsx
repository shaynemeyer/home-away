"use client";
import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";
import { useEffect, useState } from "react";
import Image from "next/image";

function UserIcon() {
  const [userProfileImage, setUserProfileImage] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const profileImage = await fetchProfileImage();

      if (profileImage) {
        setUserProfileImage(profileImage);
      }
    };
    checkUser();
  }, []);

  if (userProfileImage) {
    return (
      <Image
        src={userProfileImage}
        className="w-6 h-6 rounded-full object-cover"
        alt="User profile image"
        width={38}
        height={38}
      />
    );
  }

  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
