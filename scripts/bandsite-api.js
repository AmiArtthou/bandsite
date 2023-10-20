
/*axios.get('https://project-1-api.herokuapp.com/register')
.then(function(response) {
    // Handle the response data here
    console.log(response.data); // Access the response data
  })
  .catch(function(error) {
    // Handle any errors
    console.log(error);
  });*/ 

  

/*async function BandSiteAPI() {

    .await 

    resolve();

}*/


//?api_key=<your_api_key_here></your_api_key_here>

  //  const requestURL = "https://project-1-api.herokuapp.com?api_key=" + ${this.apiKey}

/*postComment('.commentItem') {
    ${this.apiKey}
}

}*/



//line 36:
//import { commentItem } from './index-page.js';


//let apiKEY = "8f9b3301-dbb1-47c9-a0de-305f2e88a4f9";
//let baseURL = "https://project-1-api.herokuapp.com?api_key=$";
//const requestURL = `${baseURL}${apiKey}`;




const appendURL = "?api_key=";
const commentsRoute = "/comments";
const showsRoute = "/showdates";
const apiKey = "8f9b3301-dbb1-47c9-a0de-305f2e88a4f9";

class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";

    }



    // Method to post a comment
  async postComment(comment) {
    try {
      // Send a POST request to the comments API using the API key
      const response = await axios.post(`${this.baseURL}${commentsRoute}${appendURL}${this.apiKey}`, comment, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Response Data:", response.data);

      return response.data; // Return the comment JSON object that was created
    } catch (error) {
      console.error(`There was an error with posting the comment\n${error}`);
      return null; // Return null in case of an error
    }
  }






async getComments() {
    try {
        const response = await axios.get(`${this.baseURL}${commentsRoute}${appendURL}${this.apiKey}`);
        const sortedComments = response.data.sort((a, b) => b.timestamp - a.timestamp);
        //const sortedComments = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      
        console.log("Response Data:", response.data);
        return response.data;
    } catch (error) {
        console.log(`There was an error with retrieving comments\n${error}`);
    }
}

async getShows() {
  try {
    const response = await axios.get(`${this.baseURL}${showsRoute}${appendURL}${this.apiKey}`);
    console.log("Response Data:", response.data);
    return response.data;
} catch (error) {
    console.log(`There was an error with retrieving comments\n${error}`);
}
}



}


const bandSiteAPI1 = new BandSiteAPI(apiKey);

// bandSiteAPI1.postComment(comment)
// .then(comment => {
//   console.log("Posted Comment:", comment);
// });

/*const bandSiteAPI2 = new BandSiteAPI(apiKey);
BandSiteAPI2.getComments()
  .then(sortedComments => {
    console.log("Sorted Comments:", sortedComments);
  });


  const bandSiteAPI3 = new BandSiteAPI(apiKey);
  BandSiteAPI.getShows()
  .then(showDates => {
    console.log("Show Dates:", showDates);
  });
*/



/*axios.post(requestURL, commentItem, {
    headers: {
        'Content-Type': 'application/json',
      }

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/







  /*axios.get(requestURL )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/





  /*


axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });



async function f() {
    await Promise.reject(new Error("Whoops!"));
  }


  async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
  }
  
  f();


  async function f() {

    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }
  }
  
  f();


  async function f() {
    let response = await fetch('http://no-such-url');
  }
  
  // f() becomes a rejected promise
  f().catch(alert); // TypeError: failed to fetch // (*)


  //If we forget to add .catch there, then we get an unhandled promise error (viewable in the console). We can catch such errors using a global unhandledrejection event handler as described in the chapter Error handling with promises.


  //When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

  //When we need to wait for multiple promises, we can wrap them in Promise.all and then await:


  //example: 

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using Axios</title>
    <!-- Include Axios library -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
    <h1>Using Axios to Fetch Data</h1>
    <button id="fetchButton">Fetch Data</button>

    <script>
        // Define an event listener function
        async function fetchData() {
            try {
                const response = await axios.get('API_URL_HERE');
                const data = response.data;

                // Now you can work with the 'data' received from the API
                console.log(data);
            } catch (error) {
                // Handle errors
                console.error('Error:', error);
            }
        }

        // Add a click event listener to the button
        const fetchButton = document.getElementById('fetchButton');
        fetchButton.addEventListener('click', fetchData);
    </script>
</body>
</html>
*/


