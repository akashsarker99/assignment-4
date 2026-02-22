let interviewTotal = [];
let rejectedTotal = [];

let total = document.getElementById('total-count');
let total2 = document.getElementById('total-jobs');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let totalJobs = document.getElementById('all-toggle');
let interviewToggle = document.getElementById('interview-toggle');
total2.innerText = totalJobs.children.length;
countBox();


let mainContainer = document.querySelector('main');

 mainContainer.addEventListener('click', function(event){

  if(event.target.classList.contains('inter-btn')){
    let parentNode = event.target.parentNode.parentNode.parentNode;

  let jobName = parentNode.querySelector('h2').innerText;
  let jobPosition = parentNode.querySelector('.p1').innerText;
  let salary = parentNode.querySelector('.p2').innerText;
  let status = parentNode.querySelector('h3').innerText;
  let description = parentNode.querySelector('.description').innerText;
  const jobInfo = {
    jobName,
    jobPosition,
    salary,
    status:"INTERVIEW",
    description
 }

    let jobexist = interviewTotal.find(item=> item.jobName == jobInfo.jobName)
    let statuss = parentNode.querySelector('h3');
    statuss.innerText = 'INTERVIEW';
    statuss.classList.add('inter-border');
    if(!jobexist){
        interviewTotal.push(jobInfo)
    }
   countBox();
   creatingEl();
  }
 })


 function creatingEl(){
    interviewToggle.innerHTML = '';
    for(let element of interviewTotal){
    
          let div = document.createElement('div');
       div.className = "bg-white p-6 shadow space-y-3 flex justify-between flex-col sm:flex-row gap-2"
       div.innerHTML = `
             <div class="card-left space-y-3">
            <h2 class="text-xl font-semibold">${element.jobName}</h2>
          <p class="text-gray-600 p1">${element.jobPosition}</p>
          <p class="text-gray-600 p2">
           ${element.salary}
          </p>

          <h3 class="bg-[#EEF4FF] w-[130px] px-3 py-1">${element.status}</h3>
          <p class="description text-gray-600">
          ${element.description}
          </p>

          <div class="buttons flex gap-3 flex-col md:flex-row">
            <button class="inter-card-btn btn btn-success btn-outline">INTERVIEW</button>
            <button class="reject-card-btn btn btn-error btn-outline">REJECTED</button>
          </div>
          </div>
           <div class="card-right">
            <button class="btn btn-error h-10 w-10 btn-outline rounded-full"><i class="fa-regular fa-trash-can"></i></button>
         </div>
    `
    interviewToggle.appendChild(div);
    }
   
 }










