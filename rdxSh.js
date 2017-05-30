var lib = "0123456789ABCDEFGHIJ";
//note: length of lib must be equal to the base
var wsh = new ActiveXObject("WScript.Shell");
//begin input values here
var num = 123456789;
var bsx = 20;
//end input values here
var resx = reverse(erx(num, bsx, lib));
wsh.Popup(resx);
wsh.Popup(xres(resx, bsx, lib));
//convert decimal to any base
function erx(str, bac, lib)
{
var res = "";
if (str == 0)
{
return "0";
}
for (var i = str; 0 < i; i = Math.floor(i / bac)) 
{
res += lib.substr((i % bac), 1);
}
return res;
}
//convert anybase to decimal
function xres(rts, bsx, lib)
{
var result = 0;
for (var i = 0; i < rts.length; i++)
{
result += lib.indexOf(rts.substr(i,1)) * Math.pow(bsx, ((rts.length - 1) - i));
}
return result;
}
function reverse(s)
{
return s.split("").reverse().join("");
}
// RADIX Sh
