import React from 'react';
import Rack from './components/Rack';
let randomShoesGenerator = function(n) {
  let shoes = [];
  
  for(let i=0;i<n;i++){
	let size;
	let gender;
	let type;
      size = Math.floor(Math.random()*9 + 6);

      gender = (function() {
          if(Math.random() < 0.5){ 
              return 'male';
          }
          else{
              return 'female';
          }
      }());

      type = (function() {
          if(random<0.5){
              return 'Sports';
          }
          else{
              return 'Casual';
          }
      }());
      let index = i; 
      shoes.push({index, size, type, gender});
  }
  return shoes;
};
function Application() {
  const ArrayofShoes = randomShoesGenerator(25);
  return (
    <div>
      <h1 style={{textAlign:'center'}}>
        Shoe-Rack
      </h1>
      <Rack shoes={ArrayofShoes}/>
    </div>
  );
}
export default Application;