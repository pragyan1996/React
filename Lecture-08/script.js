const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const uid = new ShortUniqueId();

const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");

const mainContainer = document.querySelector(".main-cont");

//========================Modal and ticket creation===================

const modal = document.querySelector(".modal-cont");
const priorityColorSetModal = modal.querySelector(".priority-color-cont");
const priotityColorArrayOfModal = modal.querySelectorAll(".priority-color");

//Plus button

addBtn.addEventListener("click", ()=>{
    console.log(modal);
    modal.style.display = "flex";
});

deleteBtn.addEventListener("click",()=>{
    if(deleteBtn.style.color != 'red')
        deleteBtn.style.color = 'red';
    else{
        deleteBtn.style.color = "";
    }
});

//set the color of the ticket
priorityColorSetModal.addEventListener("click",(e)=>{
    if(e.target == e.currentTarget) return;
    let selectedColor = e.target.classList[1];
    console.log(selectedColor);

    //reset the priorityColor active statue
    // console.log(priotityColorArrayOfModal);
    for(let priorityColor of priotityColorArrayOfModal){
        priorityColor.classList.remove("active");
    }

    e.target.classList.add("active");
})

//get the content
modal.addEventListener("keypress",(e)=>{
    if(e.key !== 'Enter') return;

    let textArea = modal.querySelector(".textarea-cont");
    let writtenContent = textArea.value;

    //Get the selected color at the time of creation of modal.
    let selectedColor = "green";
    for(let priorityColor of priotityColorArrayOfModal){
        if(priorityColor.classList.contains("active")){
            selectedColor = priorityColor.classList[1];
        }
    }

    createTicket(writtenContent, selectedColor);
    textArea.value = "";
    modal.style.display = "none";
});

function createTicket(writtenContent, selectedColor, currentId, isLocked = true){
    if(writtenContent == "") return;

    const id = currentId || uid();
    let lockOrUnlock = isLocked ? "fa-lock" : "fa-lock-open";

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket-cont");
    ticketContainer.innerHTML = `<div class="ticket-cont">
    <div class="ticket-color ${selectedColor}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="ticket-area">${writtenContent}</div>
    <div class="lock-unlock">
        <i class="fa-solid ${lockOrUnlock}"></i>
    </div>
    </div>`;
    mainContainer.appendChild(ticketContainer);
    
}

