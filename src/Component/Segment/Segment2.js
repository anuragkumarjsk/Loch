import React from 'react'
import whales from '../../assets/whales.svg'
import Eye from '../../assets/Eye.svg'
function Segment2() {
  return (
    <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }}>
        <div style={{flex:1 ,minWidth : '335px',minHeight : '306px' }}>
            <img 
            width={'100%'}
            src={whales} alt='whales'/>
        </div>
        <div style={{flex:1,paddingRight:'25px'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-end'}}>
                <img src={Eye} alt = 'view'/>
                <p style={{textAlign:'right',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            marginTop:'22px',
                            marginBottom:'16px',
                            fontWeight: 500,
                            fontSize: '31px',
                            lineHeight:'37px',
                            color: '#F2F2F2',
                            }}>Watch what the whales are doing</p>
                <p style={{textAlign:'right',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight:'19px', 
                            color: '#F2F2F2',
                            opacity: 0.7
                 }}>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
            </div>
        </div>
    </div>
  )
}

export default Segment2