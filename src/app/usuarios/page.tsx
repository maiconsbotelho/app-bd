'use client';
import Page from '@/components/template/Page';
import Title from '@/components/template/Title';
import UserForm from '@/components/user/UserForm';
import { UserModel } from '@/core/model/UserModel';
import users from '@/data/constants/users';
import { IconUser } from '@tabler/icons-react';
import { useState } from 'react';

const Usuarios = () => {
  const [user, setUser] = useState<UserModel>(users[0]);
  function saveUser() {
    console.log('Salvar');
  }
  return (
    <div>
      <Page className="flex flex-col gap-10">
        <Title
          icon={IconUser}
          title="Usuários"
          subtitle="Cadastro de usuários"
        />
        {/* <UserList /> */}
        <UserForm user={user} onChange={setUser} save={saveUser} cancel={() => {}} />
      </Page>
    </div>
  );
};

export default Usuarios;
