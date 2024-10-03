import Followers from "@/components/shared/Followers";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

const Sidebar = ({ users, userData, premiumPosts }: { users: any; userData: any; premiumPosts: any }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full space-y-6">
        <Card>
          <CardHeader>
            <h1>Who to Follow</h1>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {users.map(
                ({
                  _id,
                  profilePicture,
                  email,
                }: {
                  _id: string;
                  profilePicture: string;
                  email: string;
                }) => (
                  <div key={_id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar src={profilePicture || ""} />
                      <div>
                        <p className="font-medium">User </p>
                        <p className="text-sm text-gray-500">{email}</p>
                      </div>
                    </div>
                    <Followers userData={userData} userId={_id} />
                  </div>
                )
              )}
            </div>
          </CardBody>
        </Card>
      </div>

      
    </div>
  );
};

export default Sidebar;
