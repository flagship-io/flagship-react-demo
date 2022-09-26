import { FlagshipProvider } from "@flagship.io/react-sdk";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/loader/Loader";
import Payment from './Pages/Payment/Payment'
import Success from "./Pages/Success/Success";
import Credential from "./Pages/Credential/Credential";
import { osName } from 'react-device-detect'
import React, { useState } from "react";


export const FS_DEMO_CREDENTIAL = "FS_DEMO_CREDENTIAL"

export const appContext = React.createContext({ credential: { envId: "", apiKey: "" }, setCredential: () => { } })

function App() {
  const [credential, setCredential] = useState(() => {
    const storeCredential = JSON.parse(localStorage.getItem(FS_DEMO_CREDENTIAL))
    return storeCredential ?? { envId: "", apiKey: "" }
  })

  return (
    <appContext.Provider value={{ credential, setCredential }}>
      <FlagshipProvider
        envId={credential.envId}
        apiKey={credential.apiKey}
        visitorData={{
          // id:"put_your_visitor_id", // if not set, the SDK will generate one 
          context: {
            osName
          }
        }}
        loadingComponent={(credential.apiKey && credential.envId) && <Loader />}
      >
        <Header />
        <Routes>
          <Route index path="/" element={<Credential />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="payment-success" element={<Success />} />
        </Routes>
      </FlagshipProvider>
    </appContext.Provider>
  );
}

export default App;
