import Head from 'next/head';
import { useMoralis } from 'react-moralis';

import Login from '../Components/Login';
import Authenticating from '../Components/Authenticating';
import Header from '../Components/Header';
import Messages from '../Components/Messages';

export default function Home() {
  const { isAuthenticated, logout, isAuthenticating } = useMoralis();

  if (!isAuthenticated) {
    if (isAuthenticating) return <Authenticating />;
    return <Login />;
  }

  return (
    <div className="h-screen  bg-slate-800 overflow-hidden overflow-y-scroll">
      <Head>
        <title>AHJ - Metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
