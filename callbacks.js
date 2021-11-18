// function getMessage(msg,callback){
//   setTimeout(()=>{
//     console.log(msg)
//     callback()
//   }),1000
// }

// function DisplayMessage(){
//   console.log("Display Message")
// }

// getMessage("Get Message", DisplayMessage)
var x=10;
var y = 10;

function add(data, fin){
 setTimeout( ()=>{
   console.log(data)
}),2000}

fin()

function fin(){
  console.log("Successfully gonna execute in 2 seconds")
}
add(x+y, fin)
