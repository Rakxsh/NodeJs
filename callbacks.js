function getMessage(msg,callback){
  setTimeout(()=>{
    console.log(msg)
    callback()
  }),1000
}

function DisplayMessage(){
  console.log("Display Message")
}

getMessage("Get Message", DisplayMessage)



// function add(data, fin){
//   console.log(data)
//   fin()
// }

// function fin(){
//   console.log("Successfully executed")
// }
// add(5+10, fin)
