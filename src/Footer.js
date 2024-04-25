import React from 'react';
import './Footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className="futter"><div class="rob" className='text-center text-white' style={{ background:'red' }}>
    <div class="column" className="calaum"  style={{background:'red'}}>
    <div className='ratio ratio-16x9' style={{marginTop:20}}>
                  <iframe
                    className='shadow-1-strong rounded'
                    src='https://www.youtube.com/embed/J6oiV61zAbc?si=OgfA80FbS0_5Ef4K'
                    title='YouTube video'
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699='true'
                    id='388567449'
                  ></iframe>
                </div>
    </div>
    <div class="column" className="calaum"  style={{background:'red'}}>
    <div id="wrapper">
    <div id="spiderman">
      <div class="head">
        <div class="eye-left"></div>
        <div class="eye-right"></div>
      </div>
      <div class="body">
        <div class="spider"></div>
        <div class="arm-left"></div>
        <div class="arm-right"></div>
      </div>
      <div class="legs">
        <div class="boot-left"></div>
        <div class="boot-right"></div>
      </div>
  
      
    </div>
  </div>
  
    </div>
    <div class="column" className="calaum"  style={{background:'red'}}>
    <br/> <h2 style={{color:'black',textAlign:'center',font:'inherit', marginRight:40,marginTop:50}}>Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.</h2>
    </div>
  </div></MDBFooter>
  );
}
