let promise = new promise(function(resolve, reject){
 setTimeout(()=>resolve("Before printing"),1000)
});

promise.then(
  result=>{
    console.log(result)
GetAfter()

  },
  error=>console.log(error)
)

function GetAfter(){
  console.log("print aftee")
}

