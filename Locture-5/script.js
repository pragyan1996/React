window.addEventListener("load", function () {
  let table = this.document.querySelector("#table");

  for (let ri = 0; ri < 8; ri++) {
    let tr = document.createElement("tr");
    for (let ci = 0; ci < 8; ci++) {
      let isWhite = (ri + ci) % 2 == 0 ? true : false;
      let cell = document.createElement("td");
      cell.setAttribute("class", `box ${isWhite ? "white" : "black"}`);
      cell.setAttribute("data-index", `${ri}-${ci}`);
      // if((ri+ci)%2 == 0){
      //     cell.setAttribute("class","white");
      // }
      // else{
      //     cell.setAttribute("class","black");
      // }
      tr.appendChild(cell);
    }
    table.appendChild(tr);
    hoverEffect(table);
  }
});

function hoverEffect(table) {
  let boxArr = document.querySelectorAll(".box");
  table.addEventListener("mouseover", function (e) {
    let dataIndex = e.target.dataset.index;
    console.log(dataIndex);

    for (let i = 0; i < boxArr; i++) {
      boxArr[i].classList.remove("yellow");
    }

    let [curr_row, curr_col] = dataIndex.split("-").map((idx) => idx);
    let storageOfPossibleMoves = {};
    for (let cell of boxArr) {
      cell.classList.remove("yellow");
    }
    colorMyPath(parseInt(curr_row), parseInt(curr_col), storageOfPossibleMoves);
    console.log(storageOfPossibleMoves);
    colorPossibleMoves(boxArr, storageOfPossibleMoves);

    mouseLeave(table, boxArr);
  });
}

function colorMyPath(curr_row, curr_col, storageOfPossibleMoves) {
  console.log("here");
  let dir = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  for (let d of dir) {
    console.log(d);
    for (let radius = 0; radius <= 8; radius++) {
      let r = curr_row + radius * d[0];
      let c = curr_col + radius * d[1];
      if (r >= 0 && c >= 0 && r < 8 && c < 8) {
        let data = `${r}-${c}`;
        storageOfPossibleMoves[data] = true;
      } else {
        break;
      }
    }
  }
}

function colorPossibleMoves(boxArr, storageOfPossibleMoves) {
  for (let i = 0; i < boxArr.length; i++) {
    let curr_data_idx = boxArr[i].dataset.index;
    if (storageOfPossibleMoves[curr_data_idx]) {
      boxArr[i].classList.add("yellow");
    }
  }
}

function mouseLeave(table, boxArr) {
  table.addEventListener("mouseleave", function () {
    for (let i = 0; i < boxArr.length; i++) {
      boxArr[i].classList.remove("yellow");
    }
  });
}
