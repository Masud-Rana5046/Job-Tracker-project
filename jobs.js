
let currentTab = 'all';

const tabActive = ["bg-[#0000f8]", "border-[#0000f8]", "text-white"];
const tabInactive = ["bg-white", "border-white", "text-black"];

function switchTab(tab){
    //console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    for(const t of tabs){
        const tabName = document.getElementById("tab-" + t);
        //console.log(tabName);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.add(...tabInactive);
            tabName.classList.remove(...tabActive);
        }
    }
}

