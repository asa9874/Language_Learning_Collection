
document.write(typeof('a')+"<br>")
document.write(typeof(1)+"<br>")
document.write(typeof(true)+"<br>")
document.write(typeof(null)+"<br>")
document.write(typeof([])+"<br>")
document.write(typeof(TimeRanges)+"<br><br><br><br>")

document.write(Object.prototype.toString.call('a')+"<br>");
document.write(Object.prototype.toString.call(1)+"<br>");
document.write(Object.prototype.toString.call(true)+"<br>");
document.write(Object.prototype.toString.call(null)+"<br>");
document.write(Object.prototype.toString.call([])+"<br>");
document.write(Object.prototype.toString.call(TimeRanges)+"<br><br><br>");


document.write(Array.isArray([])+"<br>");
document.write(Array.isArray(1)+"<br>"+"<br>");

function Test(){}
function Test2(){}
test_ob= new Test();
document.write((test_ob instanceof Test)+"<br>")
document.write((test_ob instanceof Test2)+"<br>")
