let postTitle = document.querySelector("h1");

postTitle.addEventListener("mouseover", function () {
    postTitle.style.backgroundColor ="yellow";
});

postTitle.addEventListener("mouseout", function () {
    postTitle.style.backgroundColor ="transparent";
});

let blogTitle = document.getElementById("blogTitle");

blogTitle.addEventListener('change', (e) => {console.log(blogTitle);
});