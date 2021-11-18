function clown(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve("joker")
    },2000)
  
  })
}

async function msg(){
const msg = await clown()
console.log(msg)
}

  msg()

  function result(){
    console.log("Execute After")
  }

  result()