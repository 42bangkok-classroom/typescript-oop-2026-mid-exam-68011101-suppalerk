// Write your code below
export {}
// const input5 : string = process.argv[2];
// const input = Number(input5)

// if (Number.isNaN(input) || input <= 0) {
//   process.exit();
// }

// for (let i = 0; i < input; i++) {
//   let line = '    ';
  
//   for (let s = 0; s < i; s++) {
//     line += ' ';
//   }
//   for (let star = 0; star < input + i; star++) {
//     line += input-1;
//   }

//   console.log(line);
// }

// const n: number = parseInt(process.argv[2]);
// if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
//     console.log("Invalid Input")
// } else {

//     for (let i = n; i > 0; i--) {
//         let line = ""
//         for (let j = i; j < n; j++) {
//             line += j;
//         }
//         console.log(line)
//     }
// }

// const input:number =  Number(process.argv[2]);
// if (Number.isNaN(input)|| input <=0){
//   console.log("Invalid Input")
// }

// for (let i = input; i >= 0; i--){
//   let result = '';
	// 	for(let j = 0; j< i; j++){
    //   result += input-1
    // }
//     console.log(result)
// }


const Input:string = process.argv[2]
const N :number = Number(Input)
if (Number.isNaN(N)|| N <=0){
    console.log("Invalid Input")
  }
  for(let i = 0; i< N; i++){  
     let final =''
    for(let j=1;j<=N;j++){
    let result = j
    final += j
      }
      console.log(final)
  }
  export{};