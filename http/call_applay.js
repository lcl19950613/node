var pet = { 
  words: 'miao',
  speak: function(say){ 
    console.log( say + ' '+ this.words);    
  }
}
//pet.speak( 'say' );

var dog = { 
  words: 'wa wa'
};

//pet.speak.call( dog, 'speak' );

//可以利用call()、apply()方便的实现继承


function animal( name ){ 
   this.name = name;
   this.speak =  function(){ 
     console.log( this.name )
   } 
}

function dogs( dog ){ 
  animal.call(this, dog);
}

var d1 = new dogs( 'xiaohua' );
d1.speak();