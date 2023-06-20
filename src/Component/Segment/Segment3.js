import React from 'react'
import Logo from '../../assets/Applogo.svg'
function Segment3() {
  return (<>
   <div style={{display:'flex',paddingInline:'25px',flexDirection:'row-reverse',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '25px',
                lineHeight: '120%',
                color: '#F2F2F2',
                }}>Testimonials</div>
   <hr style={{width:'93%',}}></hr>
    <div style={{display:'flex',flexDirection:'row', justifyContent:'flex-start',alignItems:'center',padding:'25px'}}>
      <img src={Logo} alt='loch'/>

<div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',
padding: '20px',
marginLeft:'10px',
gap: '20px',
background: '#FFFFFF',
boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.04)',
borderRadius: '12px',
}}>
        <div style={{display:'flex'}}>
              <div style={{display:'inline-block',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '120%',
            }}>
                Jack F
              </div>
              <div style={{display:'inline-block',marginInline:'7px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            maxWidth :'257px',
            fontSize: '13px',
            lineHeight: '120%',     
            color: '#96979A',            
            }}>
              Ex Blackrock PM
              </div>
        </div>
        <div style={{}}>
              “Love how Loch integrates portfolio analytics and whale watching into one unified app.”
        </div>
</div>

<div style={{display:'flex', flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',
padding: '20px',
marginLeft:'10px',
gap: '20px',
background: '#FFFFFF',
boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.04)',
borderRadius: '12px',
}}>
        <div style={{display:'flex'}}>
              <div style={{display:'inline-block',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '120%',
            }}>
                Shiv S
              </div>
              <div style={{display:'inline-block',marginInline:'7px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            maxWidth :'257px',
            fontSize: '13px',
            lineHeight: '120%',     
            color: '#96979A',            
            }}>
Co-Founder Magik Labs              </div>
        </div>
        <div style={{}}>
        “Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”        </div>
</div>

    </div>
    </>
  )
}

export default Segment3