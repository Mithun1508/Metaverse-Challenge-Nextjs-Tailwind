import React, { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

const DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    'Message',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * DURATION)),
    [],
    {
      live: true,
    }
  );

  console.log(data);

  return (
    <div className="pb-48 md:pb-56">
      <div className="my-5">
        <ByMoralis variant="dark" style={{ margin: '10px auto' }} />
      </div>

      <div className="space-y-10 p-4">
        {React.Children.toArray(
          data.map((message) => <Message message={message} />)
        )}
      </div>

      <div className="flex justify-center absolute bottom-10 w-full">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You are seeing all Updated {user.getUsername}</p>
      </div>
    </div>
  );
}

export default Messages;
