// only function provide prototype property
function hello(){
    console.log("hello there");
}
if(hello.prototype){
    console.log("present");
}else{
    console.log("not present");
}