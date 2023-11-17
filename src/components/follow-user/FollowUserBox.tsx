import React, { useState } from "react";
import Button from "../button/Button";
import { useHttpRequestService } from "../../service/HttpRequestService";
import UserDataBox from "../user-data-box/UserDataBox";
import { useTranslation } from "react-i18next";
import { ButtonType } from "../button/StyledButton";
import { useAppSelector } from "../../redux/hooks";
import { User } from "../../service";
import { StyledFollowUserBox } from "./FollowUserBoxContainer";



interface FollowUserBoxProps {
  profilePicture?: string;
  name?: string;
  username?: string;
  id: string;
}

const FollowUserBox = ({
  profilePicture,
  name,
  username,
  id,
}: FollowUserBoxProps) => {
  const user = useAppSelector((state) => state.user.user);
  const service = useHttpRequestService();
  const { t } = useTranslation();
  console.log(user);
  
  const [isFollowing, setIsFollowing] = useState(
    user.following.some((f: User) => f.id === id)
  );

  const handleFollow = async () => {
    if (isFollowing) {
      await service.unfollowUser(id);
    } else {
      await service.followUser(id);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <StyledFollowUserBox>
      <UserDataBox
        id={id}
        name={name!}
        profilePicture={profilePicture!}
        username={username!}
      />
      <Button
        text={isFollowing ? t("buttons.unfollow") : t("buttons.follow")}
        buttonType={isFollowing ? ButtonType.DELETE : ButtonType.FOLLOW}
        size={"SMALL"}
        onClick={handleFollow}
      />
    </StyledFollowUserBox>
  );
};

export default FollowUserBox;
