const local =['America/New_York','Europe/London','Asia/Bangkok','Asia/Taipei','Australia/Canberra'];
const clockContent = document.querySelector('.clock-content');
let str ='';

for(let i = 0; i<local.length;i++){
  getworldtime(local[i])
}
clockContent.innerHTML =  str;

function getworldtime(area){
  let now = new Date(Date.now()) ;
 
  let time = now.toLocaleString('en-US', {timeZone: area,hour: 'numeric' , minute:'numeric' ,  hour12: false });

  let month = now.toLocaleString('en-US', {timeZone: area,year: 'numeric', month: 'short'});

  let day = now.toLocaleString('en-US', {timeZone: area,day:'numeric'});
  console.log(time);
  let black = '';
  switch(true){
    case area === 'America/New_York':
      area = 'NEW YORK';
      black = 'black';
      break;
    case area === 'Europe/London':
      area = 'LONDON';
      break;
    case area === 'Asia/Bangkok':
      area = 'BANGKOK';
      break;
    case area === 'Asia/Taipei':
      area = 'TAIPEI';
      break; 
    case area === 'Australia/Canberra':
      area = 'SYDNEY';
      black = 'black';
      break;    
  }

  str += `
  <li class="clock-box ${black}">
    <div class="clock-place">
      <p class="clock-place-title">${area}</p>
      <p class="clock-day">${day} ${month}</p>
    </div>
    <div class="clock-time">
      <p>${time}</p>
    </div>
  </li>`;
}




setInterval(()=>{
  str ='';
  for(let i = 0; i<local.length;i++){
    getworldtime(local[i])
  }
  clockContent.innerHTML =  str;
},60000)