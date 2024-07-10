import MenuItem from './MenuItem';
import { IconHome, IconUser } from '@tabler/icons-react';



const Menu = () => {
  return (
    <aside className="h-screen w-72 bg-zinc-900">
      <nav className="flex flex-col gap-1 py-7">
        <MenuItem icon={IconHome} text='Início' url='/' />
        <MenuItem icon={IconUser} text='Cadastro Usuário' url='/usuarios' />

      </nav>
    </aside>
  );
};

export default Menu;
