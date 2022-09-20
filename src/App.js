import { FlagshipProvider } from "@flagship.io/react-sdk";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/loader/Loader";
import Payment from './Pages/Payment/Payment'
import Credential from "./Pages/Credential/Credential";
import Success from "./Pages/Success/Success";
import { osName } from 'react-device-detect'


function App() {
  let searchParams = new URL(window.location).searchParams
  const envId = searchParams.get('envId') || process.env.REACT_APP_ENV_ID
  const apiKey = searchParams.get('apiKey') || process.env.REACT_APP_API_KEY
  return (
    <FlagshipProvider
      envId={envId}
      apiKey={apiKey}
      visitorData={{
        // id:"put_your_visitor_id", // if not set, the SDK will generate one 
        context: {
          osName
        }
      }}
      loadingComponent={<Loader />}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Credential />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="payment-success" element={<Success />} />
      </Routes>

    </FlagshipProvider>
  );
}

export default App;
