const pic = document.querySelector(".profile-card__img");
const usernames = document.querySelectorAll(".profile__name");
const job = document.querySelector(".profile-card__job");

pic.innerHTML = `<img src="./assets/images/woman.png" />`;

for(let el of usernames) {
    el.innerHTML = "Miranda Mountain";
}

job.innerHTML = "Registered Psychologist";


// const  commentsArr = [];

// const displayComment = () => {
//     const post = document.querySelector(".posts__item");
//     commentsArr.forEach((comment) => {
//         const commentName = document.createElement('div');
//         commentName.classList.add("posts__username");
//         commentName.innerText = comment.name;
//         post.appendChild(commentName);

//         const commentContent = document.createElement("div");
//         commentContent.classList.add("posts__content");

//         const commentBody = document.createElement("p");
//         commentBody.innerText = comment.txt;
//         commentContent.appendChild(commentBody);

//         const likeButton = documet.createElement("div");
//         likeButton.classList.add("posts__like");
//         likeButton.innerHTML = `<button>Like</button>`;
//         post.appendChild(likeButton);
//     })
// }

// const postButton = document.querySelector(".post__button");

// postButton.addEventListener("click", (postObj) => {
//     postObj.preventDefault();

//     const newComment = {};
//     const commentTxt = document.querySelector(".comment__input");
//     newComment.txt = postObj.target.name.value;

//     commentsArr.unshift(newComment);
//     displayComment();
// } )

