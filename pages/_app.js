import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={`F14s9Pcb13VwecDLJuSq9vYZKNNad3MKHrdVElQ3`}
      serverUrl={`https://4maa47wocjom.usemoralis.com:2053/server`}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
