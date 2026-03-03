
let currentTab = 'all';

const tabActive = ["bg-[#0000f8]", "border-[#0000f8]", "text-white"];
const tabInactive = ["bg-white", "border-white", "text-black"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

//console.log(allContainer, interviewContainer, rejectedContainer);

function switchTab(tab){
    //console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    for(const t of tabs){
        const tabName = document.getElementById("tab-" + t);
        //console.log(tabName);
        if(t === tab){
            currentTab = t;
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.add(...tabInactive);
            tabName.classList.remove(...tabActive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];

    for(const section of pages){
        section.classList.add("hidden");
    }

    if(tab === "all"){
        allContainer.classList.remove("hidden");
    }
    else if(tab = "interview"){
        interviewContainer.classList.remove("hidden");
    }
    else if(tab = "rejected"){
        rejectedContainer.classList.remove("hidden");
    }
}

// stat update

const totalState = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejwected");
switchTab(currentTab);

document.getElementById("job-container").addEventListener('click', function(event){
    const clickElement = event.target;

    if(clickElement.classList.contains("interview")){
        console.log("interview clickrd")
    }
    if(clickElement.classList.contains("rejected")){
        console.log("rejected clickrd")
    }
    if(clickElement.classList.contains("delete")){
        console.log("delete clickrd")
    }

})

