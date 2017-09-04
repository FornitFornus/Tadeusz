'use strict';
// DOM element for posts
var my_postsDiv = document.getElementById("my_posts"),
    count_posts = 0,
    file_name = "";

var test_array = [],
    posty = [];

file_name = "my_post.json";
// Array of objects representing posts.

var post_tadzika = [
    {
        "id": 1,
        "name": "Post o tym co boli i FIUKA.",
        "author": "Jan Pęk",
        "data": "20-09-2017",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, suscipit ab, reiciendis blanditiis laboriosam, eaque molestiae veritatis, autem soluta nostrum aperiam eveniet ipsa! Suscipit similique, amet voluptatem, tempora, porro corrupti cum magni in necessitatibus asperiores vitae doloribus blanditiis ipsam minima quis voluptas aut earum ratione adipisci beatae consequuntur. Eaque vero excepturi eveniet necessitatibus, ex unde consequatur maiores, non sint velit iure nihil voluptatem quisquam alias, vitae nostrum atque.",
        "vote": {
            "like": 0,
            "unlike": 0
        }
    }
];




//Display external post
function displayPosts(posts) {
    //Get DOM element
    //var postsDiv = document.getElementById("post");
    
    posts.forEach(function (post) {
            //Create DOM elements
    var postDiv = document.createElement("div"),
        postNameDiv = document.createElement("div"),
        postAuthorDiv = document.createElement("div"),
        postDataDiv = document.createElement("div"),
        postContentDiv = document.createElement("div"),
        postVoteDiv = document.createElement("div"),
        postVoteLikeDiv = document.createElement("div"),
        postVoteUnlikeDiv = document.createElement("div");
        
    
    //Set content for element
    postNameDiv.innerHTML = post.name;
    postAuthorDiv.innerHTML = post.author;
    postDataDiv.innerHTML = post.data;
    postContentDiv.innerHTML = post.content;
    //postVoteDiv.innerHTML = post.vote;
    //postVoteLikeDiv.innerHTML = post.vote.like;
    //postVoteUnlikeDiv.innerHTML = post.vote.unlike;
    
        
    //Set CSS classes for element
    postDiv.setAttribute("class", "post");
    postNameDiv.setAttribute("class", "post_name");
    postAuthorDiv.setAttribute("class", "post_author");
    postDataDiv.setAttribute("class", "post_data");
    postContentDiv.setAttribute("class", "post_content");
    //postVoteDiv.setAttribute("class", "post_vote");
    //postVoteLikeDiv.setAttribute("class", "post_vote_like");
    //postVoteUnlikeDiv.setAttribute("class", "post_vote_unlike");
    
    
    //Assemble post div
    postDiv.appendChild(postNameDiv);
    postDiv.appendChild(postAuthorDiv);
    postDiv.appendChild(postDataDiv);
    postDiv.appendChild(postContentDiv);
    //postDiv.appendChild(postVoteDiv);
    //postDiv.appendChild(postVoteLikeDiv);
    //postDiv.appendChild(postVoteUnlikeDiv);
    
    
    //Add post div to container for posts
    my_postsDiv.appendChild(postDiv);
    });
}


//Funkcja z XMLHttpRequest
function getPosts(callback) {
    var request = new XMLHttpRequest();
    
    //file has loaded
    request.onload = function () {
        
        //parse the JSON text to array of posty objects;
        var posty = JSON.parse(request.responseText);
        
        //Insert posty array to the callback
        count_posts += posty.length;
        callback(posty);
        document.getElementById("count_posts").innerHTML = "Count Posts: " + count_posts;
    };
    request.open("GET", file_name, true);
    request.send(null);
}

//Count articles from posts
//count_posts = posts.length;
//document.getElementById("count_posts").innerHTML = "Count Posts: " + count_posts;

getPosts(function (post){
    displayPosts(post);
});

function loadArchivePost() {
        file_name = "archive_posts.json";
        getPosts(function (post){
            displayPosts(post);
        });
}
/*

  */  
document.getElementById("addPostForm").addEventListener('submit', addPost);


function addPost() {
    var name = "",
        author ="",
        date = "",
        content = "";
    
        
    name = document.getElementById("name").value;
    author = document.getElementById("author").value;
    date = document.getElementById("data").value;
    content = document.getElementById("content").value;
    
    test_array.push(name);
    
}

