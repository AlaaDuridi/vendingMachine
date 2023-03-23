const items = new Map([
  [11, { "price": "25", "quantity": "20", }],
  [12, { "price": "24", "quantity": "1", }],
  [13, { "price": "23", "quantity": "35", }],
  [14, { "price": "22", "quantity": "1", }],
  [15, { "price": "22", "quantity": "1", }],
  [21, { "price": "21", "quantity": "35", }],
  [22, { "price": "20", "quantity": "1", }],
  [23, { "price": "19", "quantity": "1", }],
  [24, { "price": "18", "quantity": "35", }],
  [25, { "price": "17", "quantity": "35", }],
  [31, { "price": "16", "quantity": "0", }],
  [32, { "price": "15", "quantity": "35", }],
  [33, { "price": "14", "quantity": "35", }],
  [34, { "price": "13", "quantity": "1", }],
  [35, { "price": "12", "quantity": "20", }],
  [41, { "price": "11", "quantity": "35", }],
  [42, { "price": "10", "quantity": "1", }],
  [43, { "price": "9", "quantity": "0", }],
  [44, { "price": "8", "quantity": "35", }],
  [45, { "price": "7", "quantity": "35", }],
  [51, { "price": "6", "quantity": "1", }],
  [52, { "price": "5", "quantity": "0", }],
  [53, { "price": "4", "quantity": "2", }],
  [54, { "price": "3", "quantity": "35", }],
  [55, { "price": "1", "quantity": "0", }]
]);
function no_backspaces(event)
            {
                backspace = 8;
                if (event.keyCode == backspace) event.preventDefault();
            }
let enteredItemNumber = "";

function myfunction() {
  document.getElementById("clearButton").style.display="block" ; 
  enteredItemNumber = document.getElementById("item-number").value;
  if (enteredItemNumber.length == 2) {
    if (Number(enteredItemNumber) < 11 || Number(enteredItemNumber) > 55 || !items.has(Number(enteredItemNumber))){
       alert('invalid item number');         window.setTimeout(clearall,1000) ;
      }
    else {
      document.getElementById("current-quantity").style.display = "block";
      if (items.get(Number(enteredItemNumber)).quantity > 0) {
        document.getElementById("current-quantity").textContent =
           items.get(Number(enteredItemNumber)).quantity + 
          " item" + (items.get(Number(enteredItemNumber)).quantity>1 ?"s left":" left");
        document.getElementById("price-item").textContent = items.get(Number(enteredItemNumber)).price;
        document.getElementById("price-desc").style.display = "inline";
        document.getElementById("price-item").style.display = "inline";
      } else {
        document.getElementById("current-quantity").textContent=
        "there is no any item" ;
        window.setTimeout(clearall,2000) ;return ;
      }
    }
    /*will show the button if not clear */ 
    setTimeout(function(){ $("#btndiv").show() ;}, 2000);
  }
}

function clearall() {
  document.getElementById("item-number").value = "";
  document.getElementById("price-item").value = "";
  document.getElementById("price-item").style.display = "none";
  document.getElementById("price-desc").style.display = "none";
  document.getElementById("current-quantity").style.display = "none";
  document.getElementById('btndiv').style.display="none" ;
  document.getElementById('demo').style.display="none" ; 

}
/*here */

function showPopUpBox() {

  // document.getElementById("clearButton").style.display="block" ; 
  // document.getElementById("divone").style.display="none" ;
  document.getElementById('btndiv').style.display="none" ;
  document.getElementById('demo').style.display="none" ; /*previous demo */
  document.getElementById('demo').innerHTML="" ;

  let text;
  let enteredAmount = prompt("Please enter the money:", "");
  let shouldPaid = items.get(Number(enteredItemNumber)).price  ; 
  
  if (enteredAmount == null || enteredAmount == "" ) {
    text = "User cancelled the prompt.";document.getElementById('demo').style.display="block" ;
    document.getElementById("demo").innerHTML = text;return ;
  }else {
    for (var i=0 ; i<enteredAmount.length ;i++) {

      if(enteredAmount[i] <'0'|| enteredAmount.charAt(i)>'9')
      {
        text ="Please Enter digits only , and a positive number  " ; document.getElementById('demo').style.display="block" ;
    document.getElementById("demo").innerHTML = text;return ;
      }
    }
  }
  
  if(Number(enteredAmount)>= Number(shouldPaid )){
      var change =Number(enteredAmount)- Number(items.get(Number(enteredItemNumber)).price) ; 
      text ="Done!" +( Number(change)>0? (" Your Change is $" +change ) : " ");
    document.getElementById('demo').style.display="block" ;
    document.getElementById("demo").innerHTML = text;
    document.getElementById("btndiv").style.display="none" ; 
    items.get(Number(enteredAmount)).quantity -=1 ; 
    }
    else {
      text="the entered amount of money is not enough , Here are your money : $ " + enteredAmount + ", please enter enough amount of money , " ; 
      document.getElementById('demo').style.display="block" ;
      document.getElementById("demo").innerHTML = text;
      // shouldPaid = Number(shouldPaid) - Number(enteredAmount) ; 
      document.getElementById('btndiv').style.display="block" ;
    }
  }
