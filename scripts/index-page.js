
//empty array 

const commentsArray = [];


// Initial comments array with 3 default comments

/* const commentsArray = [
    
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

*/
     

// Function to display a new comment
function displayComment(comment) {
    const commentList = document.querySelector('.commentList');
    const commentItem = document.createElement('li');
    commentItem.classList.add('commentItem');
    const commentText = document.createElement('p');
    commentText.classList.add('commentText');

    commentText.innerHTML = `<div class="div__commentItem"><div class="div__emptyAvatar"></div><div class="div__nameAndTimestamp"><strong class="commentName">${comment.name}</strong><p class="commentTimestamp">${comment.timestamp}</p></div><p class="commentComment">${comment.comment}</p></div>`;
   
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

    commentForm.addEventListener('submit', async function displayComments2(event) {

        //prevents form from default behaviour of refreshing page after inputting comment
        event.preventDefault();

        const Name = document.querySelector('.Name').value;
      
        const Comment = document.querySelector('.comment').value;
       

        if (Name && Comment) {
            const Timestamp = new Date().toLocaleDateString();
            
            const newComment = {
                name: Name,
                timestamp: Timestamp,
                comment: Comment

               
            };
          

           try {
            const response = await bandSiteAPI1.postComment(newComment);
            

            console.log("Posted Comment:", response);
            
            commentsArray.unshift(newComment); 
      
         formattedTimestamps(); //not working
          
            render();
          
            console.log(newComment);
            console.log(response);

           

        } catch (error) {
            console.error("Error posting comment:", error);
        }

      
        
        
            // Clear the form's input fields after submitting a new comment
            document.querySelector('.Name').value = '';
            document.querySelector('.comment').value = '';
           
        }

        render();
    });

    // render so that default comments show up upon refreshing web page 
    
    render();
   
 
});



//to format date properly - bugfix attempt not successful though - only changes one comment.

function formattedTimestamps() {
    commentsArray.forEach(comment => {
        comment.timestamp = new Date(comment.timestamp).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        })
       
render();

        //text for bug fix on new comments that have timestamps that don't respond to the styling that the default ones respond to (not to the right side enough) - by assigning it an extra class. 
        const commentTimestamp = document.querySelector(".commentTimestamp");
        commentItem.classList.add('commentTimestampSpecificity');
      
    });

   render();
   
} 




  async function retrieveComments (){
    try{
     const commentsData = await bandSiteAPI1.getComments();
    // commentsArray.length = 0;
     commentsArray.push(...commentsData); 
    
     formattedTimestamps();
      render();
    }catch(error){
     console.log("there is an error") // this error only occurs when I keep 'formattedTimestamps();' in the code. 
    }
    
  } 
 
  retrieveComments(); 

  