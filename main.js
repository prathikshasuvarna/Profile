function factorial()
{
    num = parseInt(document.getElementById("num").value)
    if(num){
    res=1
    for(let i =2;i<=num;i++){
        res *=i
    }
    message = "Factorial of" + num + "is" +res
}
    document.getElementById("res").innerHTML="<h2>"+message+"<h2>"+message + "</h2>"

}
function digitsSum()
{
    num = parseInt(document.getElementById("num").value)
    message = "";
    s=0;
    num1 = num
    if(num){
        while(num!=0){
            s += num % 10 + parseInt(num % 10)
            num = parseInt(num / 10)
        }
        message = "sum of digits" + num1 + "is" +s
    }
    document.getElementById("s").innerHTML="<h2>"+message+"<h2>"+message + "</h2>"
}
function palindrome()
{

}
function reverseOfNum()
{

}