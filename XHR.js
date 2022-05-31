// create xhr
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET", URL);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr.response);
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }
xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();
