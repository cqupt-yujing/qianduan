function myFunction() {
    var a= 4, b=3;
    b = (a>b)? b:a-2;
    document.getElementById("第一题").innerHTML = b;
  }

    var text = "";
    var i;
    for(i= 0; i < 5, 100/i%3==0;i++){
      text +="the number is "+ i + "<br>";
    }
      document.getElementById("第二题").innerHTML =text ;

      var myObject = {
        firstName:1,
        lastName: 2,
        fullName: function() {
          return this.lastName + " " + this.firstName;
        }
      }
      document.getElementById("第三题").innerHTML = myObject.fullName(); 

      function sumOfSquares(){
        var a=11,b=22;
        return a*a*b*b;
      }    
        document.getElementById("第四题").innerHTML = sumOfSquares(); 
        let res = sumOfSquares(11, 22);
        console.log(res);

      const num = [['a', 0], ['b', 3],['c', 6],['d',9]] ,
      list = [];
      console.assert(num > 0, a,b,c);
      console.log(list);

      $(document).ready(function() {
        var  myElements= $("p");
        $("#第六题1").text("第六题1是：" + myElements[4].innerHTML);
      });
      $(document).ready(function() {
        var  myElements=$("myID");
        $("#第六题2").text("第六题2是:"+myElements[5].innerHTML);
      });
      $(document).ready(function() {
        var  myElements=$("myclass");
        $("#第六题3").text("第六题3是:"+myElements[0].innerHTML);
      });


const arr = [1,1,1,2,2,3,4,4,5,5,5];
function unique(arr){
  let hash=[];
  for (let i = 0; i < arr.length; i++) {
    if(hash.indexOf(arr[i]) === -1){
      hash.push(arr[i]);
    }
  }
  return hash;
}
console.log(uniq(arr));

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
function myFunction(){
return filtered
}

alert( filtered );
alert( arr );

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = "id"+"name"+"surname"
alert( usersMapped[0].id ) 
alert( usersMapped[0].fullName ) 
alert( usersMapped[1].id ) 
alert( usersMapped[1].fullName ) 
alert( usersMapped[2].id ) 
alert( usersMapped[2].fullName ) 