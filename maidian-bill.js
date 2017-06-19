/*function Person() {
    //在执行第一行代码前，js引擎会为我们生成一个对象
    this.username = "zhangsan";
    this.password = "123";

    this.getLocation = function() {
        return "121.48,31.41";
    }
}

//生成对象
var local_obj = new Person();
local_obj.getLocation();
*/
document.write('<script>function Person(){this.username="zhangsan";this.password="123";this.getLocation=function(){return"121.48,31.41"}}var local_obj=new Person();</script>')

//console.log("local_obj----" + local_obj.getLocation());
