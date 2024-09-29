let box = document.querySelector('.secondBox'); 
let currantDate = new Date(); 
function calcAge() {
     let birthDay = document.getElementById('myDate').value; 
     if (birthDay !== '') 
        {
         let myDate = new Date(birthDay);
          let myYear = currantDate.getFullYear() - myDate.getFullYear(); 
          let myMonths = currantDate.getMonth() - myDate.getMonth(); 
          let myDays = currantDate.getDate() - myDate.getDate();
         
          if (myDays < 0) { 
            myMonths--; 
            let lastMonth = new Date(currantDate.getFullYear(), currantDate.getMonth(), 0); myDays += lastMonth.getDate();
         }
            
              if (myMonths < 0) {
                 myYear--; 
                 myMonths += 12; 
                }
               let totalDays = Math.floor((currantDate - myDate) / (1000 * 60 * 60 * 24)); 
               let totalWeeks = Math.floor(totalDays / 7); 
               let totalHours = totalDays * 24;
                let totalMonths = myYear * 12 + myMonths; 
                let totalSeconds = totalHours * 3600;
                 box.innerHTML = ` <h4>Age:</h4><p>${myYear} years ${myMonths} months ${myDays} days</p> <h4>Months passed:</h4><p>${totalMonths}</p> <h4>Weeks passed:</h4><p>${totalWeeks}</p> <h4>Days passed:</h4><p>${totalDays}</p> <h4>Hours passed:</h4><p>${totalHours}</p> <h4>Seconds passed:</h4><p>${totalSeconds}</p> `;
                 }
                  else {
                     alert('Please enter a valid date.'); }}
