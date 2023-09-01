import { useFlagship } from "@flagship.io/react-sdk";
import { useState, useContext, useEffect } from "react";
import { appContext, FS_DEMO_CREDENTIAL } from "../../App";
import "./Sidebar.scss";

const FormInput = ({ name, label, value, required, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        required={required}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const context = useContext(appContext);
  const [fsData, setFsData] = useState(context.fsData);

  const fs = useFlagship();

  useEffect(() => {
    setFsData((item) => ({ ...item, visitorId: fs.visitorId }));

    if (fsData.envId) {
      // eslint-disable-next-line no-undef
      analytics.identify(fsData.envId, {
        apiKey: fsData.apiKey,
        visitorId: fs.visitorId,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fs.visitorId]);

  function onSideMenuToggle() {
    setIsOpen((x) => !x);
    // eslint-disable-next-line no-undef
    analytics.track("Flagship panel button", {});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { ...fsData, hasVisitorIdField: true };
    context.setFsData(data);
    localStorage.setItem(FS_DEMO_CREDENTIAL, JSON.stringify(data));
    // eslint-disable-next-line no-undef
    analytics.track("valid button", {
        envId:data.envId,
        apiKey: data.apiKey,
        visitorId: data.visitorId,
      });

    window.location.reload();
  };
  return (
    <div className={`fs-side-menu ${isOpen ? "opened" : null} `}>
      <div className="inner">
        <button className="fs-side-menu-open" onClick={onSideMenuToggle}>
          <i className={`fa-regular fa-arrow-${isOpen ? "down" : "up"}`}></i>
          <div>Flagship</div>
        </button>
        <div className="title">Flagship Credentials</div>
        <form method="post" onSubmit={onSubmit}>
          <FormInput
            name="envId"
            label="Env ID"
            value={fsData.envId}
            required={true}
            onChange={(value) => {
              setFsData((item) => ({ ...item, envId: value }));
            }}
          />
          <FormInput
            name="apiKey"
            label="Api Key"
            value={fsData.apiKey}
            required={true}
            onChange={(value) => {
              setFsData((item) => ({ ...item, apiKey: value }));
            }}
          />
          {fsData.hasVisitorIdField && (
            <FormInput
              name="visitorId"
              label="Visitor ID"
              value={fsData.visitorId}
              onChange={(value) => {
                setFsData((item) => ({ ...item, visitorId: value }));
              }}
            />
          )}
          <button>Validate</button>
        </form>
      </div>
    </div>
  );
}
