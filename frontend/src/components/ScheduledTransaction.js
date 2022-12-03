import { useState } from 'react';

function ScheduledTransaction({transaction, toggleState, setToggleState}) {

    const deleteTransaction = () => {

    }

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%',  height: 150, 
        background: 'black', 
        borderLeft: '2px solid rgba(255, 255, 255, 0.5)',
        borderRight: '2px solid rgba(255, 255, 255, 0.5)',
        borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
        color: 'white'}}
    >
        <div style={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ width: '100%', height: '70%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '10%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30, overflowWrap: "break-word"}}>{transaction.TransactionID}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.AccountID}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.ReceivingAccountID}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.Date}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.TransactionAmount}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.Comment}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '15%', height: '90%' }}
                    onClick={() => deleteTransaction()}
                >
                    <img style={{ width: 50 }} src='https://mpng.subpng.com/20191109/hxt/transparent-bin-icon-delete-icon-empty-icon-5dc7032cac0724.6832684215733235647046.jpg'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ScheduledTransaction;