let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    fromValidation();
});

let fromValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank";
        console.log("failure")
    }
    else{
        console.log("success")
        msg.innerHTML= "";
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log("data pushed");
    createPost();
};
let createPost = () => {
    posts.innerHTML += 
    `<div>
        <p>${data.text}</p>
        <span class="options">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>`;
    input.value = "";
};