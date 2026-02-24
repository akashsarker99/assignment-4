let interviewTotal = [];
let rejectedTotal = [];
let cStatus = "all-toggle";

let total = document.getElementById("total-count");
let total2 = document.getElementById("total-jobs");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let totalJobs = document.getElementById("all-toggle");
let interviewToggle = document.getElementById("interview-toggle");
let rejectedToggle = document.getElementById("rejected-toggle");
countBox();

function creatingInterview() {
  interviewToggle.innerHTML = ``;
  if(interviewTotal.length == 0){
    interviewToggle.innerHTML = `
       <div class="text-center mx-auto bg-white mb-5 p-5 md:p-28">
          <div class="w-[100px] mx-auto">
              <img src="./jobs.png" alt="">
          </div>
            <h2>No jobs available</h2>
            <p>Check back soon for new job opportunities</p>
        </div>
    `
    return;
  }
  for (let element of interviewTotal) {
    let div = document.createElement("div");
    div.className =
      "bg-white p-6 shadow space-y-3 flex justify-between flex-col sm:flex-row gap-2 transition-all duration-300 ease-in-out border-l-4 border-transparent hover:translate-x-1 hover:-translate-y-1 hover:border-green-500";
    div.innerHTML = `
             <div class="card-left space-y-3">
            <h2 class="text-xl font-semibold">${element.jobName}</h2>
          <p class="text-gray-600 p1">${element.jobPosition}</p>
          <p class="text-gray-600 p2">
           ${element.salary}
          </p>

          <h3 class="bg-[#EEF4FF] w-[130px] px-3 py-1 inter-border">${element.status}</h3>
          <p class="description text-gray-600">
          ${element.description}
          </p>

          <div class="buttons flex gap-3 flex-col md:flex-row">
            <button class="inter-card-btn btn btn-success btn-outline inter-btn">INTERVIEW</button>
            <button class="reject-card-btn btn btn-error btn-outline">REJECTED</button>
          </div>
          </div>
           <div class="card-right">
            <button class="btn btn-error h-10 w-10 btn-outline rounded-full delete-btn"><i class="fa-regular fa-trash-can"></i></button>
         </div>
    `;
    interviewToggle.appendChild(div);
  }
}
function creatingRejected() {
  rejectedToggle.innerHTML = "";
    if(rejectedTotal.length == 0){
    rejectedToggle.innerHTML = `
       <div class="text-center mx-auto bg-white mb-5 p-5 md:p-28">
          <div class="w-[100px] mx-auto">
              <img src="./jobs.png" alt="">
          </div>
            <h2>No jobs available</h2>
            <p>Check back soon for new job opportunities</p>
        </div>
    `
    return;
  }
  for (let element of rejectedTotal) {
    let div = document.createElement("div");
    div.className =
      "bg-white p-6 shadow space-y-3 flex justify-between flex-col sm:flex-row gap-2 transition-all duration-300 ease-in-out border-l-4 border-transparent hover:translate-x-1 hover:-translate-y-1 hover:border-red-500";
    div.innerHTML = `
             <div class="card-left space-y-3">
            <h2 class="text-xl font-semibold">${element.jobName}</h2>
          <p class="text-gray-600 p1">${element.jobPosition}</p>
          <p class="text-gray-600 p2">
           ${element.salary}
          </p>

          <h3 class="bg-[#EEF4FF] w-[130px] px-3 py-1 reject-border">${element.status}</h3>
          <p class="description text-gray-600">
          ${element.description}
          </p>

          <div class="buttons flex gap-3 flex-col md:flex-row">
            <button class="inter-card-btn btn btn-success btn-outline inter-btn">INTERVIEW</button>
            <button class="reject-card-btn btn btn-error btn-outline">REJECTED</button>
          </div>
          </div>
           <div class="card-right">
            <button class="btn btn-error h-10 w-10 btn-outline rounded-full delete-btn"><i class="fa-regular fa-trash-can"></i></button>
         </div>
    `;
    rejectedToggle.appendChild(div);
  }
}

let mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("inter-btn")) {
    let parentNode = event.target.parentNode.parentNode.parentNode;

    let jobName = parentNode.querySelector("h2").innerText;
    let jobPosition = parentNode.querySelector(".p1").innerText;
    let salary = parentNode.querySelector(".p2").innerText;
    let description = parentNode.querySelector(".description").innerText;
    const jobInfo = {
      jobName,
      jobPosition,
      salary,
      status: "INTERVIEW",
      description,
    };

    let jobexist = interviewTotal.find((item) => item.jobName == jobInfo.jobName);
    let statuss = parentNode.querySelector("h3");
    parentNode.classList.add("greenBorder")
    statuss.classList.remove("reject-border", "inter-border");
    statuss.innerText = "INTERVIEW";
    statuss.classList.add("inter-border");
    if (!jobexist) {
      interviewTotal.push(jobInfo);
    }

    rejectedTotal = rejectedTotal.filter((item) => item.jobName != jobInfo.jobName);
    findInMainForInterview(jobName);

    if (cStatus == "rejected-toggle") {
      creatingRejected();
    }
     countBox();
  } 
  else if (event.target.classList.contains("reject-card-btn")) {
    let parentNode = event.target.parentNode.parentNode.parentNode;

    let jobName = parentNode.querySelector("h2").innerText;
    let jobPosition = parentNode.querySelector(".p1").innerText;
    let salary = parentNode.querySelector(".p2").innerText;
    let description = parentNode.querySelector(".description").innerText;
    const jobInfo = {
      jobName,
      jobPosition,
      salary,
      status: "REJECTED",
      description,
    };

    let jobexist = rejectedTotal.find((item) => item.jobName == jobInfo.jobName);
    let statuss = parentNode.querySelector("h3");
    parentNode.classList.add("redBorder")
    statuss.classList.remove("reject-border", "inter-border");
    statuss.innerText = "REJECTED";
    statuss.classList.add("reject-border");
    if (!jobexist) {
      rejectedTotal.push(jobInfo);
    }

    interviewTotal = interviewTotal.filter((item) => item.jobName != jobInfo.jobName);
    findInMainForRejected(jobName);

    if (cStatus == "interview-toggle") {
      creatingInterview();
    }
    countBox();
  } 
  else if (event.target.closest(".delete-btn")) {
    let card = event.target.closest(".bg-white");
    let job = card.querySelector('h2').innerText;
    
   if(cStatus == 'all-toggle'){
    let parentNode = card.parentNode;
    parentNode.removeChild(card);
    interviewTotal = interviewTotal.filter(item => item.jobName != job);
    rejectedTotal = rejectedTotal.filter(item => item.jobName != job);
    countBox();
   }
    else if(cStatus == 'interview-toggle'){
    interviewTotal = interviewTotal.filter((item) => item.jobName != job);
    findInMain(job);
     countBox();
     total2.innerHTML =`${interviewTotal.length} of ${totalJobs.children.length}`;
     creatingInterview();
    
    }
    else if(cStatus == 'rejected-toggle'){
       let job = card.querySelector('h2').innerText;
    rejectedTotal = rejectedTotal.filter((item) => item.jobName != job);
    findInMain(job);
     countBox();
     total2.innerHTML =`${interviewTotal.length} of ${totalJobs.children.length}`;
     creatingRejected();
    
    }
  }
});


