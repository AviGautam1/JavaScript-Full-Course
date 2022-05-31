// bind () method 
function userInfo(gender, nationality){
    console.log(this.fName, this.age, gender, nationality);
}
const user1 = {
    fName : "Avinesh",
    age : 25,
    // userInfo : function(gender, nationality){
    //     console.log(this.fName, this.age, gender, nationality);
    // }
}
const user2 = {
    fName : "Deepak",
    age : 26,
    
}
const func = userInfo.bind(user1, "male", "indian");
func();

const user = {
    firstName : "Avinesh",
    lastName : "Gautam",
    email : "avifetian@gmail.com",
    age : 25,
    address : "16, Amit Nagar Colony",
    about : function(){
        return `${this.firstName} is ${this.age} year old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
const aboutUser = user.about();
console.log(aboutUser);