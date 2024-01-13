var abc = document.querySelector("h1");
var btn = document.querySelector("button");

var flag = 0;
btn.addEventListener("click", function () {

    if (flag == 0) {
        abc.innerHTML = "Friends";
        abc.style.color = "green";
        btn.innerHTML = "remove friend";
        flag=1;
    }
    else {
        abc.innerHTML = "Stranger";
        abc.style.color = "red";
        btn.innerHTML = "Add friends";
        flag=0;
    }

})