import { useMoralis } from 'react-moralis';

function ChangeUserName() {
  const { setUserData, isUserUpdating, useError, user } = useMoralis();

  const setUserName = () => {
    const userName = prompt(`
    Enter your Username
    Current : ${user.getUsername()}`);

    if (!userName) return;

    setUserData({
      username: userName,
    });
  };
  return (
    <div className="text-sm px-5 py-7 text-cyan-500 ">
      <button
        className=" font-bold text-right hover:text-cyan-600"
        disabled={isUserUpdating}
        onClick={setUserName}
      >
        Change User Name
      </button>
    </div>
  );
}

export default ChangeUserName;
