/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const studentList = document.querySelector('.student-list');
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



// Call functions
