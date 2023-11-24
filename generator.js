   function randomMinMax(min, max) {
     return min + Math.round(Math.random() * (max - min));
   };  

   
   function randomString(length) {
         let string = "";
     const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     for (let i = 0; i < length; i++) {
       string += characters.charAt((Math.random() * characters.length));
     }
     return string;
   };


   function randomArray(min, max, length) {
      let array = [];
        for (let i = 0; i < length; i++) {
         array.push(randomMinMax(min, max));
        }
    return array;
   };
  

  module.exports = {
    randomMinMax: randomMinMax,
    randomString: randomString,
    randomArray: randomArray,
  };