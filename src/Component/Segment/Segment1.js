import React from 'react'
import whales from '../../assets/whales.svg'
import Eye from '../../assets/Notification.svg'
function Segment1() {
  return (
    <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }}>
        <div style={{flex:1,paddingLeft:'25px'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
                <img src={Eye} alt = 'view'/>
                <p style={{textAlign:'left',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            marginTop:'22px',
                            marginBottom:'16px',
                            fontWeight: 500,
                            fontSize: '31px',
                            lineHeight:'37px',
                            color: '#F2F2F2',
                            }}>Get notified when a highly correlated whale makes a move</p>
                <p style={{textAlign:'left',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight:'19px', 
                            color: '#F2F2F2',
                            opacity: 0.7
                 }}>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
            </div>
        </div>
        <div style={{flex:1 ,minWidth : '335px',minHeight : '306px' }}>
            <img 
            width={'100%'}
            src={whales} alt='whales'/>
        </div>
    </div>
  )
}

export default Segment1