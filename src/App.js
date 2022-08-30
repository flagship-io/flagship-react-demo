import { FlagshipProvider } from "@flagship.io/react-sdk";
import Header from "./components/Header/Header";
import Loader from "./components/loader/Loader";
import Payment from './components/Payment/Payment'


function App() {
  let searchParams = new URL(window.location).searchParams
  const envId = searchParams.get('envId') || process.env.REACT_APP_ENV_ID
  const apiKey = searchParams.get('apiKey') || process.env.REACT_APP_API_KEY
  return (
    <FlagshipProvider
      envId={envId}
      apiKey={apiKey}
      visitorData={{}}
      loadingComponent={<Loader />}
    >
      <Header />
      <Payment />
    </FlagshipProvider>
  );
}

export default App;
