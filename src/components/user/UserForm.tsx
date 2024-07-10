import { UserModel } from '@/core/model/UserModel';
import TextInput from '@/components/shared/TextInput';

export interface UserFormProps {
  user: UserModel;
  onChange: (user: UserModel) => void;
  save: () => void;
  cancel: () => void;
}

const UserForm = (props: UserFormProps) => {
  return (
    <div className="flex flex-col gap-5">
      <TextInput
        label="Nome"
        type="text"
        value={props.user.name}
        onChange={e => props.onChange?.({...props.user, name: e.target.value})}
      />
      <TextInput
        label="Email"
        type="email"
        value={props.user.email}
        onChange={e => props.onChange?.({...props.user, email: e.target.value})}
      />
      <TextInput
        label="Senha"
        type="password"
        value={props.user.password}
        onChange={e => props.onChange?.({...props.user, password: e.target.value})}
      />
      <div className="flex gap-5">
        <button className="rounded-md bg-blue-500 px-4 py-2" onClick={props.save}>Salvar</button>
        <button className="rounded-md bg-zinc-500 px-4 py-2" onClick={props.cancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default UserForm;
