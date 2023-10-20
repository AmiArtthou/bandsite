

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

      return response.data; // Return JSON object
    } catch (error) {
      console.error(`There was an error with posting the comment\n${error}`);
      return null; 
    }
  }


async getComments() {
    try {
        const response = await axios.get(`${this.baseURL}${commentsRoute}${appendURL}${this.apiKey}`);
        const sortedComments = response.data.sort((a, b) => b.timestamp - a.timestamp);
    

      
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

