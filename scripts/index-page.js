// Initial comments array with 3 default comments
const commentsArray = [
    
    {
        Name: 'Connor Walton',
        Timestamp: '02/17/2021',
        Comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },

    {
        Name: 'Emilie Beach',
        Timestamp: '01/09/2021',
        Comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },

    {
        Name: 'Miles Acosta',
        Timestamp: '12/20/2020',
        Comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
];


     

// Function to display a new comment
function displayComment(comment) {
    const commentList = document.querySelector('.commentList');
    const commentItem = document.createElement('li');
    commentItem.classList.add('commentItem');
    const commentText = document.createElement('p');
    commentText.classList.add('commentText');

    commentText.innerHTML = `<strong>${comment.Name}</strong><p>${comment.Timestamp}</p><br>${comment.Comment}`;
   
    commentItem.appendChild(commentText);
    commentList.appendChild(commentItem);
}

// Function to clear all comments before re-rendering them to ensure that the web page doesn't display duplicates when re-rendered

function render() {
    const commentList = document.querySelector('.commentList');
    commentList.textContent = ''; 

    commentsArray.forEach(comment => {
        displayComment(comment);
    });
}

// Event listener for form inputs
document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.querySelector('.commentForm');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('.name').value;
        const commentText = document.querySelector('.comment').value;

        if (name && commentText) {
            const timestamp = new Date().toLocaleDateString();
            
            const newComment = {
                Name: name,
                Timestamp: timestamp,
                Comment: commentText
            };

            commentsArray.unshift(newComment);
            render(); 

            // Clear the form's input fields after submitting a new comment
            document.querySelector('.name').value = '';
            document.querySelector('.comment').value = '';
        }
    });

    // render so that default comments show up upon refreshing web page 
    render();
});

// Function for automatic date input
document.addEventListener('DOMContentLoaded', function () {
    const currentDateEl = document.querySelector(`${comment.Timestamp}`);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    currentDateEl.textContent = formattedDate;
});
