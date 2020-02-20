function uniqueChars (usanox) {
for ( var i = 0 ; i< usanox.length ; i++){
for ( var j = i+1 ; j < usanox.length ; j++)
if ( usanox[i] === usanox[j] ){
usanox=usanox.replace(usanox[j] , " ");}}
usanox=usanox.replace(/\s/g, "");
return usanox;
}
alert( uniqueChars("zhqkldkllahappwvciy"));
function truncat (str, maxlength, symbol){
	if(str.length > maxlength && arguments[2]) 
	return str.slice(0, maxlength) + symbol;
 return str.slice(0, maxlength) + '...';
}
alert(truncat("dfytuykghgyfdfgcg", 6, '++++'));
function happy_number(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
alert ('happy numbers: '+f5);


 function numofarg(){
return arguments.length;}
alert ( numofarg('LIA','HTML','JAVA',36));