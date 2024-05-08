const inventory = {
  sunglasses: 10,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) =>{
  if (inventory.sunglasses > 0){
    resolve('Sunglasses order processed.');
  } else{
    reject('That item is sold out.');
  }
}

function orderSunglasses(){
  return new Promise(myExecutor);
}

let orderPromise = orderSunglasses();
console.log(orderPromise);

let oPro = new Promise(myExec = (resolve, reject) =>{
  if(inventory.pants < 1090){
    resolve('We have less that 2000 shades left');
  } else {
    reject('Sorry you can only get 10 shades at a time');
  }
});

console.log(oPro);