//Promise
/*
const promise1= new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('foo')
  },300)
})
promise1.then(function(value){
  console.log(value);
})

console.log(promise1);
*/

/*
let comptePromesse=0
function testPromise(){
  let thisComptePromesse=++comptePromesse
  let log= document.getElementById('log')
  log.insertAdjacentHtml('beforeend',thisComptePromesse +
  ') Started (<small>Début du code synchrone</small>)<br/>');
// Create promise

let p1= new Promise(
  function(resolve,reject){
    log.insertAdjacentHtml('beforeend',thisComptePromesse+
    ') Started (<small>Début du code synchrone</small>)<br/>');

  window.setTimeout(function(){
    resolve(thisComptePromesse)
  },Math.random()*2000+1000)
  })
p1.then(
  function (val) {
    log.insertAdjacentHtml('beforeend',thisComptePromesse+
    ') Started (<small>Debut du code synchrone</small><br/>)'
  )  }).catch(
    function(){
    console.log("promesse rompue");
    }
  )
  log.insertAdjacentHTML('beforeend', thisComptePromesse +
      ') Promise made (<small>Fin du code synchrone</small>)<br/>');
}
testPromise()
*/

/*
function resolveAfter(){
  return new Promise (resolve=>{
    setTimeout(()=>{
      resolve("resolved");
    },2000)
  })
}

async function asyncCall(){
  console.log("calling");
  const result= await resolveAfter();
  console.log(result);
}
asyncCall();

*/
