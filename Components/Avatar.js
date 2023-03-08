import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ userName, logOutOnPress }) {
  const { user } = useMoralis();
  return (
    <Image
      className="rounded-full bg-slate-700 cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/gridy/${
        userName || user.get('username')
      }.svg`}
      layout="fill"
    />
  );
}

export default Avatar;
