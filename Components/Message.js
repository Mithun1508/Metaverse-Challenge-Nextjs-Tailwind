import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from './Avatar';

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  console.log(message + 12);

  return (
    <div
      className={`flex  items-end space-x-2 relative ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative w-8 h-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar userName={message.get('username')} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? 'rounded-br-none bg-cyan-300 '
            : 'rounded-bl-none bg-gray-400'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-400 pl-1 ${
          isUserMessage && 'order-first pr-1'
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-cyan-500' : 'text-gray-400'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  );
}

export default Message;
