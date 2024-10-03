import PostCard from "@/components/card/PostCard";
import Container from "@/components/shared/Container";
import EditProfileModal from "@/components/shared/modal/EditProfileModal";
import { axiosInstance } from "@/lib/AxiosInstance";
import { currentUser } from "@/services/AuthService";
import { getUserData } from "@/services/User/indext";
import { TPostComment } from "@/types/comment.interface";
import { TPost } from "@/types/post.interface";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { MapPinHouse, Phone, ShieldQuestion } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfilePage = async () => {
  const { data: followersPosts } = await axiosInstance.get("/followers/me");
  const { data: followersCount } = await axiosInstance.get("/followers/count");
  const userInfo = await getUserData();

  const userData = await currentUser();

  return (
    <Container>
     

      <div className="my-5">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <Avatar
              className="w-44 h-44"
              src={userInfo?.data?.profilePicture}
            />
            <div>
              <h1 className="font-bold text-2xl">{userInfo?.data?.name}</h1>
              <p>{userInfo?.data?.email}</p>
              <h3>{followersCount?.data?.followerCount} followers</h3>
              <h3>{followersCount?.data?.followingCount} following</h3>
            </div>
          </div>

          <div>
            <EditProfileModal userData={userInfo?.data} />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="col-span-2 my-5">
          
          </div>

          <div className="col-span-3 my-5 flex flex-col gap-5">
            {followersPosts?.data?.map(async (post: TPost) => {
              const commentsResponse = await axiosInstance.get(
                `/comments/${post._id}`
              );
              const comments: TPostComment[] = commentsResponse.data.data;
              return (
                <PostCard
                  key={post._id}
                  data={post}
                  comments={comments}
                  userData={userData}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
