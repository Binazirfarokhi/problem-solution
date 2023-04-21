// a function that can reverse the words that we gav it

// function reverse(fname){
//    let  newName = " ";
//     for (let i = fname.length-1 ; i >= 0; i--) {
//       newName += fname[i];
        
//     }
//     return newName;




// }

// const show = document.getElementById('show').innerHTML = reverse("binazir")
  

// function dividNumber(a,b){
   
//     if (a % b == 0){
//     return "good news";
//     }else {
//           return 'bad result';
//     }
      
    

// }

// const show = document.getElementById('show')
// show.innerHTML = dividNumber(23,10)


// function maxMin(arrayNumber ){
//     let max =arrayNumber[0];
//     let min = arrayNumber[0];
//  for (let i = 0; i < arrayNumber.length; i++) {
//    if(arrayNumber[i]>max){
//      max = arrayNumber[i];
     
//    }

//    if(arrayNumber[i]<min){
//     min = arrayNumber[i];
    
//    }

    
//  }
//  return [max,min]


// }
// const show = document.getElementById('show')
// show.innerHTML = maxMin([23,4,34,5,12])



// sum numbers
// function sumArray (arraynumber){
//     let sum = 0;
//     for (let i = 0; i < arraynumber.length; i++) {
       
//         sum += arraynumber[i];
//     }
// return sum
// }
// const show = document.getElementById('show')
// show.innerHTML = sumArray([23,10,3,23,22])

// create a function that remove all duplicates harachters in a string includes the spaces;
//   function removeduplicate(str){
//     let newstr = '';
//     let word= '';
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i+1]){
//          newstr += str[i]
//       }
//       if (str[i] !== str[i+1]){
//         word += str[i]; 
     

//       }  
//        if (str[i] !== " " ){
//         newstr +=  str[i] ;
//       }
     
        
//     }
//     // return str;
//     return word;

//    }
//    const show = document.getElementById('show')
// show.innerHTML = removeduplicate('addres s')

// address : adres

// function primeNumber(num){
  
   
//     for ( let i=2; i<num;i++) {
//      if (num % i ==0){
//      return false;
        
//      }else {
//         alert('this number is not a prime')
//      }
        
//     }
// }


// function sumOfMax(array){
//     let maxone = array[0];
//     let maxtwo = array[0];
//     let maxes = [];
//     let sum = 0;


//     // let maxtwo = array[1];
//     for (let i = 0; i < array.length; i++) {
  
//        for (let j = i+1 ; j < array.length; j++) {

//      if (maxone<array[i]){
//         maxone = array[i];
//         maxes.push(maxone)
      
//        }
//         if (maxtwo<array[j]){
//             maxtwo = array[j];
//             maxes.push(maxtwo)
          
//            }
        
//     }
//     }
//     sum += (maxone+maxtwo);

// return sum

   
// }

//    const show = document.getElementById('show')
// show.innerHTML = sumOfMax([1,23,4,12,22,24,56]);
//  console.log(twoMax);

// create a function to check if a word is palindrome


function palindrome(word){
    let neword= '';
    for (let i  = 0; i  < word.length; i ++) {
   for ( let j = word.length-1 ; j>=0 ; j--) {
        if (word[i] == word[j]){
           neword += word[i]; 
        }else{
            // alert ('false')
        }

    
   }
        
    }
     console.log(neword)
}
   const show = document.getElementById('show')
show.innerHTML = palindrome("madam");