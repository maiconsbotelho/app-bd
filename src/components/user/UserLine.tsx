import { UserModel } from '@/core/model/UserModel';

export interface UserLineProps {
  user: UserModel;
}

const UserLine = (props: UserLineProps) => {
  return (
    <div className="flex rounded-md bg-zinc-900 p-4 items-center">
      <div className='flex flex-col'>
        <span className='text-xl font-black'>{props.user.name}</span>
        <span className='text-sm text-zinc-400'>{props.user.email}</span>
      </div>
    </div>
  );
};

export default UserLine;
