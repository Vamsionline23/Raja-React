import React from 'react';
import './coloms.css';
import './backgounds/back1.js';
import Cards from './cards/Cards';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
function Coloms() {
  return (
   
      
      <div class='container-fluid' style={{backgroundColor:'#6c1313'}}>


      <div class="row">
  <div class="column"  >
    <Cards/>
  </div>
  <div class="column" style={{width:10}} >
   
  </div>

  <div class="card" style={{borderRadius:'55% 48% 46% 54% / 41% 40% 60% 59% ',textAlign:'center', backgroundColor:'red',rotate:'none',width:1100, marginTop:30}}>
   
    <br/>
    <h1 style={{font:'bold'}}>SPIDER-MAN</h1>
    <h5 style={{justifyContent:'center', textAlign:'left',marginLeft:50}}>With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan. </h5>
  </div>
</div>
    </div>
  )
}

export default Coloms
 