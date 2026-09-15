/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//Element selector
const studentList = document.querySelector('.student-list');
const paginationList = document.querySelector('.link-list')
//diaplaying 9 user in each page
const itemperpage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
A list parameter to represent an array of student objects.
A page parameter to represent the requested page number.

*/
function showPage(list, page){

   const startIndex = (page * itemperpage) - itemperpage;
   const endIndex = page * itemperpage;

   // remove any students that might have previously been displayed
   studentList.innerHTML = "";

   //loop through the lists
   for (let i = 0; i <list.length; i++){
      /*conditional statement that checks if the current index (i) is greater than or equal to the start index variable 
      and less than the end index variable.*/
      if (i >= startIndex && i < endIndex){
         const html = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;
         //Adding student card to the page
         studentList.insertAdjacentHTML("beforeend",html);
      }
   }

}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   //stores the number of pagination buttons needed and get rounded by Math.ceil
   const numberofButtons = Math.ceil(list.length/itemperpage);
   
   //remove any pagination buttons that might have previously been displayed.
   paginationList.innerHTML = '';

   for (let i = 1; i <= numberofButtons; i++){
      const html = `
          <li>
            <button type="button">${i}</button>
         </li>
      `
      paginationList.insertAdjacentHTML('beforeend', html);
   }

   const firstButton = paginationList.querySelector('button')
   //check if the firstButton exists and give it the active class
   if (firstButton){
      firstButton.className = "active";
   }

   paginationList.addEventListener('click', (e) =>{
      //make sure the clicked element is button
      if (e.target.tagName === 'BUTTON'){

         //getting all pagination buttons
         const button = paginationList.querySelectorAll('button');

         //Remove the active class from any other pagination button
         for (let i = 0; i < button.length; i++){
            button[i].className = '';
         }
         //Add the active class to the button that was just clicked.
         e.target.className = 'active';

         //getting page number from the button
         const page = Number(e.target.textContent)

         //Call the showPage function and pass it the list and page number to display.
         showPage(list,page)
      }

   })

}

// Call functions
//shows the 1st page 
showPage(data,1)
addPagination(data);