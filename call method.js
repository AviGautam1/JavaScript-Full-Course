// call () method
function userInfo(gender, nationality){
    console.log(this.fName, this.age, gender, nationality);
}
const user1 = {
    fName : "Deepak",
    age : 26,
    // userInfo : function(gender, nationality){
    //     console.log(this.fName, this.age, gender, nationality);
    // }
}
const user2 = {
    fName : "Deepak",
    age : 26,
    
}
userInfo.call(user2, "male", "indian");