/**
 * Approach:
 *  1.Html/CSS
 *      Prepare with  basic html/css
 * 
 *  2. JavaScript
 *      a. We have to listen to three events
 *          i. Click-> give the rating
 *                      update the start upto that level
 *                      Update rating count
 *          ii. Mouseover-> we have to change the star upto that evel to yellow.
 * 
 *  Edge case: 
 *      mouseLeave -> move it to gray stars.
 */

const container = document.querySelector(".star_container");
const count = document.querySelector("#count");
const starArr = document.querySelectorAll(".star")
let pidx = 0;

//Event listeners: 

container.addEventListener("click",(e)=>{
    console.log('star is pressed');
    if(e.target.hasAttribute("idx")){
        pidx = e.target.getAttribute("idx");
        console.log(pidx);
        fillStar(pidx);
    }
});

container.addEventListener("mouseover",(e)=>{
    console.log('mouse hovering');
    if(e.target.hasAttribute("class") && e.target.hasAttribute("idx")){
        cidx = e.target.getAttribute("idx");
        console.log(cidx);
        fillColor(cidx)
    }
})

container.addEventListener("mouseleave",(e)=>{
    fillColor(pidx);
})

//Helper methods

function fillStar(idx){
    //Update on count
    count.textContent = idx;

    //update color
    fillColor(idx);
}

function fillColor(idx){
    //reset all stars to the default color
    for(star of starArr){
        star.classList.remove("yellow");
    }

    //fill with yellow
    for(let i = 0 ; i < idx ; i++){
        // console.log(starArr[i].classList);
        starArr[i].classList.add("yellow");
    }
}


