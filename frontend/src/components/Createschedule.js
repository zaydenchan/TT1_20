import React from "react";

export default function Createschedule({ openModal }){

    const close = () => {
        openModal(false);
    }

    return (
        <div style={{ position: 'absolute', top: 0 }}>
        <main className = 'SchedulePopup'>
            <div className = "HeaderScheduleTransactions">
            <h2> Create scheduled Transactions</h2>
            <h4> 3/12/2020</h4>
            </div>
            <div className = 'form'>
                <input
                    type="textarea"
                    placeholder="Sender ID"
                    className="form--input"
                    name="SenderId"
                    // value={}
                    // onChange={}
                />
                <input
                    type="textarea"
                    placeholder="Recipient ID"
                    className="form--input"
                    name="SenderId"
                    // value={}
                    // onChange={}
                />

                <input
                    type="textarea"
                    placeholder="Amount"
                    className="form--input"
                    name="Amount"
                    // value={}
                    // onChange={}
                />

                <input
                    type="textarea"
                    placeholder="Comments"
                    className="form--input--comment"
                    name="Comments"
                    // value={}
                    // onChange={}
                />
            </div>

            <div className = "ScheduleTransactionsButton">
                <button className="ScheduleTransactionsCloseButton" onClick = {() => close()}> Close </button>
                <button className="ScheduleTransactionsSubmitButton"> Submit </button>
            </div>
        </main>
        </div>
    )
}