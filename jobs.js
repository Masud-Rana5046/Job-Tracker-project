


// dashBord count elements
let totlaCount = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejwectedCount');
 let totalCount2 = document.getElementById('total1');
//console.log(totlaCount);

const allCardssection = document.getElementById('allCards');

///console.log(allCards.children.length);

function calculateCount() {

    totlaCount.innerText = allCards.children.length;
    totalCount2.innerText = allCards.children.length;
}

calculateCount(); 