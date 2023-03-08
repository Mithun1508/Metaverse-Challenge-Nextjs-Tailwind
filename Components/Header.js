import Image from 'next/image';
import { useMoralis } from 'react-moralis';

import Avatar from './Avatar';
import ChangeUserName from './ChangeUserName';

function Header() {
  const { user, logout } = useMoralis();
  return (
    <header className=" shadow-md backdrop-blur-xl py-3 sticky top-0 left-0 right-0 z-50">
      <div className="grid grid-cols-1 justify-between px-2 md:px-10 gap-6">
        <div className="flex items-center justify-between">
          <div className="relative h-16 w-16 my-auto lg:inline-grid">
            <Image
              className="rounded-full"
              objectFit="cover"
              src="/owner.jpg"
              layout="fill"
            />
          </div>
          <h1 className="flex text-lg truncate md:text-2xl lg:text-3xl text-center text-cyan-600">
            Welcome to the Jim's Web-3 group chat space
          </h1>
          <ChangeUserName />
        </div>

        <div className=" flex items-center justify-between text-center">
          <div className="relative h-20 w-20 border-steal-400 border-4 rounded-full">
            <Avatar logOutOnPress />
          </div>
          <h2 className="text-lg md:text-2xl lg:text-5xl  capitalize truncate text-center text-cyan-700">
            {user.getUsername()}
          </h2>
          <button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg px-10 py-4  font-bold hover:bg-gradient-to-l"
            onClick={logout}
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
