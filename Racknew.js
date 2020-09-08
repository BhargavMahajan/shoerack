import React, { useState } from 'react';

let compareAccToGender = function(a, b) {
    if(a.gender==='female' && b.gender==='female') {
        return a-b;
    }
    else if(a.gender==='female'){
      return -1;
    }
    else if(b.gender==='female'){
      return 1;
    }
    else{//both male type shoes
      return a-b;
    }
};
  
let compareAccToSize = function(a, b){
    return a.size - b.size;
};


let Rack = function(paras){
    let isSwitching = 0;
    let clickSwitchHandler = function(e) {
        e.preventDefault();
         if(isSwitching===0){
             isSwitching = e.target;
             }
         else{
             let positionA = isSwitching.getAttribute('index');
             let positionB = e.target.getAttribute('index');
             let tempvariable = shoes2[positionA];
             shoes2[positionA] =  shoes2[positionB];
             shoes2[positionB] = tempvariable;
             isSwitching = 0;
             setRackState(shoes2);            
         }
    };

    let sortShoes = ( function(sortBy) {
        if(sortBy==='size'){
          shoes.sort(compareAccToSize);
        }
        else{
          shoes.sort(compareAccToGender);
        }
        let shoes2 = shoes.map(shoe => (
            <button key={shoe.index} index={shoe.index} onClick={clickSwitchHandler} >
                {shoe.index}- {shoe.gender} {shoe.size} {shoe.type}
            </button>)//index based key
            );
        setRackState(shoes2);
    });

    let sortHandler = function(e) {
        e.preventDefault();
        isSwitching = 0;
        if(e.target.id==='sortBySize'){
            sortShoes('size');
        }
        else{
            sortShoes('gender');
        }
    };

    let shoes = paras.shoes;
    let shoes2 = shoes.map(shoe => (
        <button key={shoe.index} index={shoe.index} onClick={clickSwitchHandler} >
            {shoe.index}- {shoe.gender} {shoe.size} {shoe.type}
        </button>)//index based key
    );
    let [rackState,setRackState] = useState(shoes2);

    return (
        <div>
            <div className='dropdown'>
                <button className='dropbtn'>
                    Sort By
                </button>
                <div className='dropdown-content'>
                    <button id='sortBySize' onClick={sortHandler}>Size</button>
                    <button id='sortByGender' onClick={sortHandler}>Gender</button>
                </div>
            </div>

            <div className='rack'>
                {rackState}
            </div>
        </div>
    );
}

export default Rack;
