import "./App.css";
import Balance from "./components/Balance";
import Dropdown from "./components/Dropdown";
import Userinfo from "./components/Userinfo";
import { useState } from "react";
import Transactions from "./components/Transactions";
import ScheduledTransactions from "./components/ScheduledTransactions";
import Table from "./components/Table";
import CreateSchedule from "./components/Createschedule";

function Dashboard() {
  const [modal, openModal] = useState(false);

  return (
    <div>
      <Balance />
      <Dropdown />
      <Userinfo />
      <div className="App" style={{ width: "100%", height: "100%" }}>
        <Table {...{ openModal }} />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {modal && <CreateSchedule {...{ openModal }} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
