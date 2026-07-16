function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "<3";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (16 + Math.random()*18) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,300);