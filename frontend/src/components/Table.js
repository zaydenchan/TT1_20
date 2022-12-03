import { useState } from "react";
import Transactions from "./Transactions";
import ScheduledTransactions from "./ScheduledTransactions";

function Table({ openModal }) {
  const [toggleState, setToggleState] = useState(1);

  const create = () => {
    openModal(true);
  };

  return (
    <div
      className="App"
      style={{
        width: "70%",
        height: "100%",
        position: "absolute",
        left: "300px",
        top: "20%",
        fontSize: 13,
        textAlign: "center"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: 300,
            color: "white",
          }}
        >
          <div
            style={{
              position: 'relative',
              top: 21,
              top: 11,
              height: 30,
              background: "#ec1d25",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
              marginRight: 10,
              cursor: 'pointer'
            }}
            onClick={() => setToggleState(1)}
          >
            Transactions
          </div>
          <div
            style={{
              position: 'relative',
              top: 21,
              top: 11,
              height: 30,
              background: "#ec1d25",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
              whiteSpace: "nowrap",
              cursor: 'pointer'
            }}
            onClick={() => setToggleState(2)}
          >
            Scheduled Transactions
          </div>
        </div>
        <div
          style={{
            padding: 6,
            marginBottom: 10,
            fontSize: 14,
            color: "white",
            borderRadius: 10,
            background: "#ec1d25",
            cursor: 'pointer'
          }}
          onClick={() => create()}
        >
          Create Scheduled Transaction
        </div>
      </div>

      <Transactions {...{ setToggleState, toggleState }} />
      <ScheduledTransactions {...{ setToggleState, toggleState }} />
    </div>
  );
}

export default Table;
