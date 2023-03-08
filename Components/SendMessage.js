import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Message = Moralis.Object.extend('Message');
    const messages = new Message();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (dt) => {},
        (error) => console.log(error.message)
      )
      .then(() => setMessage(''));
    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form className="flex border-2 border-cyan-200 z-50 rounded-full w-11/12 max-w-2xl p-3 shadow-2xl">
      <input
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500 mr-5"
        type="text"
        value={message}
        placeholder={`Type a message ${user.getUsername()}...`}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="font-bold text-cyan-300"
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
