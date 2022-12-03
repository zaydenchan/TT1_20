import { useState } from 'react';

function Transaction({transaction, toggleState, setToggleState}) {
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
                    <div style={{ width: '100%', height: 30 }}>{transaction.TransactionID}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '18%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.AccountID}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '18%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.ReceivingAccountID}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '18%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.Date}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '18%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.TransactionAmount}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '18%', height: '90%' }}>
                    <div style={{ width: '100%', height: 30 }}>{transaction.Comment}</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Transaction;