

// const showsData = [ 
// {
//     DATE: 'Mon Sept 06 2021',
// VENUE: 'Ronald Lane',
// LOCATION: 'San Francisco, CA',
// }, 

// {
// DATE: 'Tue Sept 21 2021',
// VENUE: 'Pier 3 East',
// LOCATION: 'San Francisco. CA',

// },

// {
//     DATE: 'Fri Oct 15 2021',
//     VENUE: 'View Lounge',
//     LOCATION: 'San Fransisco, CA',

// },

// {
//     DATE: 'Sat Nov 06 2021',
//     VENUE: 'Hyatt Agency',
//     LOCATION: 'San Franscisco, CA',
// },

// {
//     DATE: 'Fri Nov 26 2021',
//     VENUE: 'Moscow Center',
//     LOCATION: 'San Fransisco, CA',
// },

// {
//     DATE: 'Wed Dec 15 2021',
//     VENUE: 'Press Club',
//     LOCATION: 'San Fransisco, CA',
// }


// ];





//shows div
const showsContainer = document.createElement('div');
showsContainer.classList.add('shows');

function showsList(shows) {
    shows.forEach((show) => {
        const showRow = document.createElement('div');
        showRow.classList.add('show-row');
        

        //shows data 
        const dateEl = document.createElement('span');
        dateEl.classList.add('dateEl');
        dateEl.textContent = show.date;

        const venueEl = document.createElement('span');
        venueEl.classList.add('venueEl');
        venueEl.textContent = show.place;

        const locationEl = document.createElement('span');
        locationEl.classList.add('locationEl');
        locationEl.textContent = show.location;


        //headers for rows data types

        const dateHeader = document.createElement('span');
        dateHeader.classList.add('dateHeader');
        dateHeader.textContent = 'DATE';
    
        const venueHeader = document.createElement('span');
        venueHeader.classList.add('venueHeader');
        venueHeader.textContent = 'VENUE';
    
        const locationHeader = document.createElement('span');
        locationHeader.classList.add('locationHeader');
        locationHeader.textContent = 'LOCATION';


       //button 

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv');
       //document.querySelector(buttonDiv);

        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'BUY TICKETS';
    

        //append data to rows
        showRow.appendChild(dateHeader);
        showRow.appendChild(dateEl);
       
        showRow.appendChild(venueHeader);
        showRow.appendChild(venueEl);
        showRow.appendChild(locationHeader);
        showRow.appendChild(locationEl);

        
        
        //append button
        showRow.appendChild(buttonDiv);
        buttonDiv.appendChild(button);


        //append rows to shows container
        showsContainer.appendChild(showRow);


    });
}


function formattedDate(showsData) {
  const date = new Date(showsData);
const options = {
  weekday: 'short',
  month: 'short',
  day: '2-digit',
  year: 'numeric'
 
};


  return date.toLocaleDateString('en-GB', options); 

}

async function loadComment (){
  try{
   const showsData = await bandSiteAPI1.getShows();

   showsData.forEach(show => {
    show.date = formattedDate(show.date);
});

    showsList(showsData);

 

  }catch{
   console.log("there is an error")
 
 
}
}

loadComment();



const divShowsContainer = document.querySelector('.div__whiteBackground');


//append shows container to DOM 
divShowsContainer.appendChild(showsContainer);



// :) 


// Add an event listener to the shows container

  showsContainer.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('show-row')) { 
      const allShowRows = document.querySelectorAll('.show-row');
      const allHeaders = document.querySelectorAll('.dateHeader, .venueHeader, .locationHeader');

//adding both 'row-click' and 'click' in attempt to increase specifity for the click to override the hover but it doesn't really work. 

      allShowRows.forEach((row) => {
        row.classList.remove('row-click');
      });
      allHeaders.forEach((row) => {
        row.classList.remove('row-click');
      });
      allShowRows.forEach((row) => {
        row.classList.remove('click');
      });

      event.target.classList.add('row-click');
      event.target.classList.add('click');

      //added this as a big fix attempt to see if it would make the click/ mousedown event rspond faster but it didn't really. 
      event.stopPropagation();

    }
  });


  //attempting to debug the headers appearing upon click events
  showsContainer.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('show-row')) {
      const allHeaders = document.querySelectorAll('.dateHeader, .venueHeader, .locationHeader');
  
      allHeaders.forEach((header) => {
        header.classList.add('header-click');
      });
  
      // Remove the 'header-click' class from the previously clicked show-row's headers
      const allShowRows = document.querySelectorAll('.show-row');
      allShowRows.forEach((row) => {
        if (row !== event.target) {
          const headersInRow = row.querySelectorAll('.dateHeader, .venueHeader, .locationHeader');
          headersInRow.forEach((header) => {
            header.classList.remove('header-click');
          });
        }
      });
    }
  });