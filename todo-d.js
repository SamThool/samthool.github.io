console.log(`javaScript Connected`);
add = document.getElementById("add");
add.addEventListener("click", get);
reloadtable();



//       G e t

function get() {
  tit = document.getElementById("tit").value;
  des = document.getElementById("des").value;
  console.log("Clicked");
  if (localStorage.getItem("itemjson") == null) {
    itemjsonarray = [];
    itemjsonarray.push([tit, des]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonarray));
  } else {
    itemjsonarraystr = localStorage.getItem("itemjson");
    itemjsonarray = JSON.parse(itemjsonarraystr);
    itemjsonarray.push([tit, des]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonarray));
  }
  reloadtable();
}


//          relode table

function reloadtable() {
  if (localStorage.getItem("itemjson") == null) {
    itemjsonarray = [];
    localStorage.setItem("itemjson", JSON.stringify(itemjsonarray));
  } else {
    itemjsonarraystr = localStorage.getItem("itemjson");
    itemjsonarray = JSON.parse(itemjsonarraystr);
  }

  let tb = document.getElementById("tb");
  str = "";
  itemjsonarray.forEach((Element, inde) => {
    str += `
            <tr>
            <th >${inde + 1}</th>
            <td >${Element[0]}</td>
            <td >${Element[1]}</td>
            <td><button id="btndel" class="btndel" onclick="deleted(${inde})" >Delete</button></td>
            </tr>`;
  });

  tb.innerHTML = str;
}



//        Deleted


function deleted(iteminde) {
  console.log("deleted", iteminde);
  itemjsonarraystr = localStorage.getItem("itemjson");
  itemjsonarray = JSON.parse(itemjsonarraystr);
  itemjsonarray.splice(iteminde, 1);
  localStorage.setItem("itemjson", JSON.stringify(itemjsonarray));
  reloadtable();
}







//  clear allllllll

dela = document.getElementById("dela");
dela.addEventListener("click", delt);

function delt() {
  if (confirm("Are you Sure ?")) {
    localStorage.clear();
    reloadtable();
  }
}
