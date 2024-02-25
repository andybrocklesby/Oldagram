const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Andy Brocklesby",
        username: "andywilliamm",
        location: "Huntsville, AR, U.S.A",
        avatar: "images/profile-image.jpeg",
        post: "images/grillin.JPG",
        comment: "Grillin. Chillin. And feeling good after completing this solo project 🙌",
        likes: 115
    }
]

function getPosts(){
    
    for(let i = 0; i < posts.length; i++){
        let postName = posts[i].name;
        let postUsername = posts[i].username;
        let postLocation = posts[i].location;
        let postAvatar = posts[i].avatar;
        let postMain = posts[i].post;
        let postComment = posts[i].comment;
        let postLikes = posts[i].likes;
        let postIndex = [i];
        
        
        appendPost(
            postName,
            postUsername, 
            postLocation,
            postAvatar,
            postMain,
            postComment,
            postLikes,
            postIndex);
            
        
        likePost(postLikes, postIndex);
        
        
    }
}

getPosts();

function appendPost(name, username, location, avatar, mainPost, comment, likes, postIndex){
    
    localStorage.setItem(`post: ${postIndex} liked`, "false");
    
    let newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = `
        <div class="flex-row post-info">
            <img 
                class="user-post-image"
                src="${avatar}"
                alt="user profile image">
            <div class="flex-column top-info">
                <div class="bold-text">${name}</div>
                <div>${location}</div>
            </div>
        </div>
        
        <img 
            class="post-img" id="post-img-${postIndex}"
            src="${mainPost}"
            alt="users post">
            
        <div class="post-info ">
            <div class="interactive flex-row">
                <img
                    class="interactive-btn" id="like-btn-${postIndex}"
                    src="images/icon-heart.png"
                    alt="like button">
                <img
                    class="interactive-btn"
                    src="images/icon-comment.png"
                    alt="like button">
                <img
                    class="interactive-btn"
                    src="images/icon-dm.png"
                    alt="like button">
            </div>
            <div class="bold-text likes" id="likes-element-${postIndex}">${likes} likes</div>
            <div><span class="bold-text">${username}</span> ${comment}</div>
        </div>
    `;
    
    let postContainer = document.getElementById("post-container");
    
    postContainer.append(newPost);
}

function likePost(postLikes, postIndex){
    let likeBtn = document.getElementById(`like-btn-${postIndex}`);
    let postImage = document.getElementById(`post-img-${postIndex}`);
        
        likeBtn.addEventListener("click", function(){
            let isLiked = localStorage.getItem(`post: ${postIndex} liked`);
            
            if (isLiked !== "true") {
                let thisPostLikes = document.getElementById(`likes-element-${postIndex}`);
                let thisPostLikeBtn = document.getElementById(`like-btn-${postIndex}`);
                thisPostLikeBtn.style.filter = "brightness(0) saturate(100%) invert(26%) sepia(60%) saturate(5637%) hue-rotate(350deg) brightness(107%) contrast(122%)";
                postLikes++;
                thisPostLikes.innerHTML = `${postLikes} likes`;
                localStorage.setItem(`post: ${postIndex} liked`, "true");
            } else {
                let thisPostLikes = document.getElementById(`likes-element-${postIndex}`);
                let thisPostLikeBtn = document.getElementById(`like-btn-${postIndex}`);
                thisPostLikeBtn.style.filter = "none";
                postLikes--;
                thisPostLikes.innerHTML = `${postLikes} likes`;
                localStorage.setItem(`post: ${postIndex} liked`, "false");
            }
        });
        
        postImage.addEventListener("dblclick", function(){
            let isLiked = localStorage.getItem(`post: ${postIndex} liked`);
            
             if (isLiked !== "true") {
                let thisPostLikes = document.getElementById(`likes-element-${postIndex}`);
                let thisPostLikeBtn = document.getElementById(`like-btn-${postIndex}`);
                thisPostLikeBtn.style.filter = "brightness(0) saturate(100%) invert(26%) sepia(60%) saturate(5637%) hue-rotate(350deg) brightness(107%) contrast(122%)";
                postLikes++;
                thisPostLikes.innerHTML = `${postLikes} likes`;
                localStorage.setItem(`post: ${postIndex} liked`, "true");
            } else {
                let thisPostLikes = document.getElementById(`likes-element-${postIndex}`);
                let thisPostLikeBtn = document.getElementById(`like-btn-${postIndex}`);
                thisPostLikeBtn.style.filter = "none";
                postLikes--;
                thisPostLikes.innerHTML = `${postLikes} likes`;
                localStorage.setItem(`post: ${postIndex} liked`, "false");
            }
        })
}

