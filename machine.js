
function toggleBtn (id){
  cStatus = id;
  let allOption = document.getElementById('all-toggle');
  let interviewOption = document.getElementById('interview-toggle');
  let rejectedOptional = document.getElementById('rejected-toggle');

  allOption.classList.add('hidden');
  interviewOption.classList.add('hidden');
  rejectedOptional.classList.add('hidden');

  let selectedOption = document.getElementById(id);
  selectedOption.classList.remove('hidden');

  let allBtn = document.getElementById('all-btn');
  let interviewBtn = document.getElementById('interview-btn');
  let rejectedBtn = document.getElementById('rejected-btn');

  allBtn.classList.remove('btn-primary');
  interviewBtn.classList.remove('btn-primary');
  rejectedBtn.classList.remove('btn-primary');

  if(id == 'all-toggle'){
    allBtn.classList.add('btn-primary');
    total2.innerText = totalJobs.children.length;
  }
  else if(id == 'interview-toggle'){
    interviewBtn.classList.add('btn-primary')
    total2.innerHTML =`${interviewTotal.length} of ${totalJobs.children.length}`;
    creatingInterview();
  }
  else if(id == 'rejected-toggle'){
    rejectedBtn.classList.add('btn-primary')
     total2.innerHTML =`${rejectedTotal.length} of ${totalJobs.children.length}`;
     creatingRejected();
  }

}

function countBox(){
    total.innerText = totalJobs.children.length; 
    total2.innerText = totalJobs.children.length;
    interviewCount.innerText = interviewTotal.length;
    rejectedCount.innerText = rejectedTotal.length;
}

function findInMain(job){
  let mainCards = totalJobs.querySelectorAll('.bg-white');
   
  for(let card of mainCards){
     let name = card.querySelector('h2').innerText;
     if(job == name){
      let mainStatus = card.querySelector('h3');
      card.classList.remove('greenBorder', 'redBorder');
       mainStatus.innerText = "NOT APPLIED";
      mainStatus.classList.remove("reject-border", "inter-border");
     }
  }

}

function findInMainForRejected(job){
let mainCards = totalJobs.querySelectorAll('.bg-white');
   
  for(let card of mainCards){
     let name = card.querySelector('h2').innerText;
     if(job == name){
      let mainStatus = card.querySelector('h3');
       card.classList.remove('greenBorder');
       card.classList.add('redBorder');
       mainStatus.innerText = "REJECTED";
      mainStatus.classList.add("reject-border");
     }
  }
}

function findInMainForInterview(job){
  let mainCards = totalJobs.querySelectorAll('.bg-white');
  for(let card of mainCards){
     let name = card.querySelector('h2').innerText;
     if(job == name){
      let mainStatus = card.querySelector('h3');
      card.classList.remove('redBorder');
      card.classList.add('greenBorder');
      mainStatus.innerText = "INTERVIEW";
      mainStatus.classList.remove('reject-border',);
      mainStatus.classList.add("inter-border");
     }
  }
}