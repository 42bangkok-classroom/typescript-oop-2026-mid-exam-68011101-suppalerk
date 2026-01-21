// Write your code below
const input3:number = parseInt(process.argv[2])



if (Number.isNaN(input3)|| input3 <=0){
    process.exit(0);
  }
  
  for (let i = 0 ; i <= input3 ; i--){//ทำงานกี่รอบ
    if (input3/3 && input3/5 === 0){
        console.log("FizzBuzz")
    }else if (input3/3 ===0){
        console.log("Fizz")
    }else if (input3/5 ===0){
        console.log("Buzz")
    }
    console.log(input3)
  }