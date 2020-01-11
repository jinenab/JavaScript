let resolveAfter2Seconds = function(){
  console.log("Initialisation de la promesse lente");
  return new Promise(resolve =>{
    setTimeout(function(){
      resolve("lente")
      console.log("La promesse lente est terminée")
    },2000)
  })
}

let resolveAfter1Seconds= function(){
  console.log("Initialisation de la promesse rapide");
  return new Promise(resolve=>{
    setTimeout(function(){
      resolve("rapide")
      console.log("La promesse rapide est terminée");
    },1000)
  })
}


let sequentialStart = async function(){
  console.log("==Debut sequentiel===");
  const lente = await  resolveAfter2Seconds()
  console.log(lente);
  const rapide= await resolveAfter1Seconds()
  console.log(rapide);
}
//sequentialStart()

let concurrentStart = async function(){
  console.log("===Debut concurrentiel avec await===");
  const lente =  resolveAfter2Seconds()
  const rapide=  resolveAfter1Seconds()
  console.log(await lente);
  console.log(await rapide);
}
//concurrentStart()

let concurrentPromise = function (){
  console.log("===Debut concurrentiel avac Promise.all===");
  return Promise.all([resolveAfter2Seconds(),resolveAfter1Seconds()]).then(
    (messages)=>{
      console.log(messages[0]);
      console.log(messages[1]);
    }
  )
}
concurrentPromise()
