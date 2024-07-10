import user from '@/data/constants/users';
import { UserModel } from '@/core/model/UserModel';
import UserLine from '@/components/user/UserLine';

const UserList = () => {
  return (
    <div className="flex flex-col gap-4">
      {user.map((user: UserModel) => {
        return <UserLine key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
