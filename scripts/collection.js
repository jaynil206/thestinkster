//write a function capable of displaying an article
function displayArticle(article) {
    let articleCard = document.createElement('div'); 
    articleCard.classList.add('article-compact');
    articleCard.classList.add('load');  
    articleCard.innerHTML = `
        <div class="information load">
            <h1 class="title load">${article.title}</h1>
            <p class="date load">posted: ${article.date}</p>
        </div>
        <div class="interactivity load">
            <button type="button" class="like-button">like</button>
            <button type="button" class="bookmark-button">bookmark</button>
        </div>
    `;
    // toggle the like / bookmark buttons to their correct setting
    let likeButton = articleCard.querySelector('.like-button'); 
    if (article.liked == true) {
        likeButton.classList.add('selected'); 
        likeButton.textContent = 'liked'; 
    }   
    let bookmarkButton = articleCard.querySelector('.bookmark-button'); 
    if (article.saved == true) {
        bookmarkButton.classList.add('selected'); 
        bookmarkButton.textContent = 'saved';
    } 
    // append the element to the parent 
    let articleContainer = document.querySelector('.article-grid'); 
    articleContainer.appendChild(articleCard); 
}


// write a functon that displays only bookmarked articles
function displayCollection() {
    // create an array of article objects that stores all bookmarked articles
    let allArticles = JSON.parse(localStorage.getItem("articles")); 
    let bookmarkedArticles = allArticles.filter(a => a.saved); 
    // create the card displays total number of bookmarks
    let statCard = document.createElement('div'); 
    statCard.classList.add('statpad'); 
    statCard.innerHTML = `
        <div class="information">
            <h1 class="statistics">of all the stinkers on this app, you have saved:</h1>
            <h1 class="number">${bookmarkedArticles.length}</h1>
        </div>
    `; 
    document.querySelector('.article-grid').appendChild(statCard); 
    // display each bookmarked article into the feed
    bookmarkedArticles.forEach(article => {
        displayArticle(article); 
    })
}

// when the page loads, call the displayCollection function 
displayCollection(); 

// now handle the like buttons and bookmark for collection view
let canvas = document.querySelector('.article-grid'); 
canvas.addEventListener("click", function(event) {
    // whenever a user clicks a like button
    if (event.target.classList.contains('like-button')) {
        // get the title of the article it is linked to for referencing purposes
        let article = event.target.closest('.article-compact');
        let articleTitle = article.querySelector('.title').innerHTML; 
        let searchArray = JSON.parse(localStorage.getItem("articles")); 
        // find the article
        let index = searchArray.findIndex(a => a.title == articleTitle);
        // toggle the like button
        searchArray[index].liked = !searchArray[index].liked;
        event.target.classList.toggle('selected', searchArray[index].liked);
        event.target.textContent = searchArray[index].liked ? 'liked' : 'like';
        // update the storage
        localStorage.setItem("articles", JSON.stringify(searchArray));
    }
})

// let us write a function that deals with bookmarks using event delegation
canvas.addEventListener("click", function(event) {
    // whenever a user clicks a bookmark button
    if (event.target.classList.contains('bookmark-button')) {
        // get the title of the article it is linked to for referencing purposes
        let article = event.target.closest('.article-compact');
        let articleTitle = article.querySelector('.title').innerHTML; 
        let searchArray = JSON.parse(localStorage.getItem("articles")); 
        // find the article
        let index = searchArray.findIndex(a => a.title == articleTitle);
        // toggle the bookmark button
        searchArray[index].saved = !searchArray[index].saved;
        event.target.classList.toggle('selected', searchArray[index].saved);
        event.target.textContent = searchArray[index].saved ? 'saved' : 'save';
        // // alert the user how many items they have now bookmarked
        // let count = searchArray.filter(a => a.saved).length;
        // if (searchArray[index].saved) 
        //     alert(`Number of stinky opinions saved: ${count}.`);
        // update the storage
        localStorage.setItem("articles", JSON.stringify(searchArray)); 
    }
})

// let us write a function that loads a new view for users to read the full articles with comments
canvas.addEventListener("click", function(event) {
    // whenever a user clicks an article card
    if (event.target.classList.contains('load')) {
        // find out what article it is so that we can prepare the data to load into the new page
        let article = event.target.closest('.article-compact');
        let articleTitle = article.querySelector('.title').innerHTML; 
        // find the article
        let searchArray = JSON.parse(localStorage.getItem("articles")); 
        let index = searchArray.findIndex(a => a.title == articleTitle);
        console.log('article identified: ' + index); 
        // store the relevant data as a local object
        const articleData = {
            date: searchArray[index].date,
            content: searchArray[index].content,
            liked: searchArray[index].liked, 
            saved: searchArray[index].saved, 
            comments: searchArray[index].comments, 
        }
        // load the data into the relevant parts
        document.querySelector('.spotlightTitle').textContent = articleTitle; 
        document.querySelector('.spotlightDate').textContent = `posted: ${articleData.date}`; 
        document.querySelector('.spotlightText').textContent = articleData.content; 
        if (articleData.liked) {
            let likeButton = document.querySelector('.spotlight-like-button')
            likeButton.textContent = 'liked'; 
            likeButton.classList.add('selected'); 
        }
        if (articleData.saved) {
            let bookmarkButton = document.querySelector('.spotlight-bookmark-button')
            bookmarkButton.textContent = 'saved'; 
            bookmarkButton.classList.add('selected'); 
        }
        // load the comments 
        articleData.comments.forEach(comment => {
            if (comment.length > 10) {
                let newComment = document.createElement('div'); 
                newComment.classList.add('comment');
                newComment.innerHTML = `
                    <p>${comment}</p>
                `;
                let container = document.querySelector('.comment-tray'); 
                container.insertBefore(newComment, container.firstChild); 
            }      
        }); 
        // alter the css to change from feed view to spotlight view
        window.scrollTo(0,0); 
        document.querySelector('body').style.backgroundColor = '#e7fae9'; 
        document.querySelector('.article-grid').style.display = 'none';  
        document.querySelector('.collectionHeader').style.display = 'none';  
        document.querySelector('.spotlightHeader').style.display = 'inline-block';  
        document.querySelector('.spotlight-canvas').style.display = 'grid'; 
    }
})

// now we need a function that allows a user to go back to the feed that saves any changes made in spotlight view
let backButton = document.querySelector('.spotlightHeader');
backButton.addEventListener('click', function() {
    // clear the old articles and the button select classes to stop bugs
    document.querySelector('.article-grid').innerHTML = ''; 
    document.querySelector('.comment-tray').innerHTML = ''; 
    // same for the buttons
    document.querySelector('.spotlight-like-button').classList.remove('selected');
    document.querySelector('.spotlight-like-button').textContent = 'like';
    document.querySelector('.spotlight-bookmark-button').classList.remove('selected'); 
    document.querySelector('.spotlight-bookmark-button').textContent = 'save'; 
    // redisplay the bookmarked articles with any new data using earlier function 
    displayCollection(); 
    // alter the css to change from feed view to spotlight view
    window.scrollTo(0,0); 
    document.querySelector('body').style.backgroundColor = '#f4e4fb'; 
    document.querySelector('.spotlightHeader').style.display = 'none';  
    document.querySelector('.spotlight-canvas').style.display = 'none'; 
    document.querySelector('.article-grid').style.display = 'grid';  
    document.querySelector('.collectionHeader').style.display = 'block';  
}) 


// let us write functions that handles the like and bookmark buttons when in spotlight view
let likeButton = document.querySelector('.spotlight-like-button'); 
likeButton.addEventListener("click", function() {
    // get the title of the article it is linked to for referencing purposes
    let articleTitle = document.querySelector('.spotlightTitle').innerHTML; 
    let searchArray = JSON.parse(localStorage.getItem("articles")); 
    // find the article
    let index = searchArray.findIndex(a => a.title == articleTitle);
    // toggle the like button
    searchArray[index].liked = !searchArray[index].liked;
    likeButton.classList.toggle('selected', searchArray[index].liked);
    likeButton.textContent = searchArray[index].liked ? 'liked' : 'like';
    // update the storage
    localStorage.setItem("articles", JSON.stringify(searchArray));
}); 

// let us write functions that handles the bookmark buttons when in spotlight view
let bookmarkButton = document.querySelector('.spotlight-bookmark-button'); 
bookmarkButton.addEventListener("click", function() {
    // get the title of the article it is linked to for referencing purposes
    let articleTitle = document.querySelector('.spotlightTitle').innerHTML; 
    let searchArray = JSON.parse(localStorage.getItem("articles")); 
    // find the article
    let index = searchArray.findIndex(a => a.title == articleTitle);
    // toggle the bookmark button
    searchArray[index].saved = !searchArray[index].saved;
    bookmarkButton.classList.toggle('selected', searchArray[index].saved);
    bookmarkButton.textContent = searchArray[index].saved ? 'saved' : 'save';
    // update the storage
    localStorage.setItem("articles", JSON.stringify(searchArray));
    // // alert the user how many items they have now bookmarked
    // let count = searchArray.filter(a => a.saved).length;
    // if (searchArray[index].saved) 
    //     alert(`Number of stinky opinions saved: ${count}.`);
    
}); 

// let us write a function that handles comments using event delegation
let inputBox = document.querySelector('.add-comment'); 
inputBox.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter') && (inputBox.value.length > 10)) {
        // create the comment
        let newComment = document.createElement('div'); 
        newComment.classList.add('comment'); 
        newComment.innerHTML = `
            <p>${inputBox.value}</p>
        `;  
        // find the article and store the new comment in local storage
        let articleTitle = document.querySelector('.spotlightTitle').innerHTML; 
        let searchArray = JSON.parse(localStorage.getItem("articles")); 
        let index = searchArray.findIndex(a => a.title == articleTitle);
        searchArray[index].comments.push(inputBox.value);
        searchArray[index].comments.forEach(comment => {
            console.log(comment); 
        })
        localStorage.setItem("articles", JSON.stringify(searchArray));  
        // reset the input box
        inputBox.value = ""; 
        inputBox.blur(); 
        // append the comment as a child
        document.querySelector('.comment-tray').appendChild(newComment); 
    } else if ((event.key === 'Enter') && inputBox.value.length < 11) {
        // reset the input
        inputBox.value = ""; 
        alert('Your comment must be at least 10 characters long so that we can ensure all contributions are thoughtful!'); 
    }
})

