const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{

 console.log(a);
 console.log(b);
}
// 1,2가 지속적으로 출력된다. 