import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
  const LINK = 'https://links.papareact.com/';

  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-screen w-full items-center justify-center space-y-4">
        <div className="backdrop-blur-md rounded-lg flex p-10 flex-col items-center justify-center">
          <Image
            className="object-cover rounded-full"
            src="/owner.jpg"
            width={200}
            height={200}
          />
          <h1 className="font-bold text-white text-2xl text-center m-5">
            Welcome To Meteverse
          </h1>
          <button
            onClick={authenticate}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg p-5 font-bold animate-pulse"
          >
            Login to the METAVERSE
          </button>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <Image src="/bg.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
