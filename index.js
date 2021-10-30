function randomInt (min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
console.log (randomInt(10,20));

// function nomalName(name){
//    name = name.toLowerCase();
//    for (let i = 0; i < name.length; i++){
//        if (i == 0 || name.charAt(i - 1) == " "){
//            //viet hoa
           
//            name = name.slice (0,i) + name.charAt(i).toUpperCase() + name.slice (i + 1);
           
//         }
//     }
    
//     console.log ("username",name);
//     return name;
// }
// nomalName ('NgUyeN QUoc DAt')
//
function bai11(str) { 
    return str.split(" ").length;
  }
  
  console.log(bai11("Hello  world"));

//
  function bai12(str) { 
      str = str.replace(/\s+/g, '');
      return str.trim();
    }
  console.log(bai12("         Hello     world   "));

//    
function bai13 (s) {
  var i = s.length,o = '';
  while (i > 0) {
  o += s.substring(i - 1, i);
  i--;
  }
  return o;
  }
  console.log(bai13("This is a beautiful day"));


//

let str1 = "Hello world "
let str2 = "l "
function bai14(str1, str2) {
  // let str1Array = str1.split(" ");
  // for (i = 0; i < str1Array.length; i++) {
  //     if (str1Array[i] == str2) {
  //         return i + 1;
  //     }
  // }
  for (i = 0; i < str1.length; i++) {
      if (str1.substr(i, str2.length) == str2) {
          return i;
      }
      console.log(bai14(str1,str2));
  }
}
  //
  function baiTap15(name) { 
      name = name.toLowerCase();
      for (let i = 0; i < name.length; i++){
          if (i == 0 || name.charAt(i - 1) == " "){
              name = name.slice(0,i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
          }
      }

      console.log('user',name);
      return name;
  }
  baiTap15 ('NGUYEn QUoc DaT')

  //
  let num1 = 2;
  let num2 = 3;
  let num3 = 6;
  function bai17(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  console.log(bai17);