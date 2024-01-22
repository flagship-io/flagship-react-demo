import { FlagshipProvider } from "@flagship.io/react-sdk";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/loader/Loader";
import Payment from "./Pages/Payment/Payment";
import Success from "./Pages/Success/Success";
import { osName } from "react-device-detect";
import React, { useState } from "react";

export const FS_DEMO_CREDENTIAL = "FS_DEMO_CREDENTIAL";

export const appContext = React.createContext({
  fsData: { envId: "", apiKey: "", visitorId: "", hasVisitorIdField: false },
  setFsData: () => {},
});

function App() {
  const [fsData, setFsData] = useState(() => {
    const storeFsData = JSON.parse(localStorage.getItem(FS_DEMO_CREDENTIAL));
    if (storeFsData) {
      storeFsData.visitorId = storeFsData.visitorId ?? "";
      return storeFsData;
    }
    return { envId: "", apiKey: "", visitorId: "", hasVisitorIdField: false };
  });

  return (
    <appContext.Provider value={{ fsData, setFsData: setFsData }}>
      {/*start step 1 block*/}
      <FlagshipProvider
        envId={fsData.envId}
        apiKey={fsData.apiKey}
        visitorData={{
          id: fsData.visitorId, // if empty, the SDK will generate one
          context: {
            osName,
          },
        }}
        loadingComponent={fsData.apiKey && fsData.envId && <Loader />}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="payment-success" element={<Success />} />
        </Routes>
      </FlagshipProvider>
      {/*end step 1 block*/}
    </appContext.Provider>
  );
}

export default App;
