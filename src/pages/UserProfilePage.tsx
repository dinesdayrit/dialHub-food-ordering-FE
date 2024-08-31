import { useUpdateMyuser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

export default function UserProfilePage() {
  const { updateUser, isLoading } = useUpdateMyuser();
  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
}
