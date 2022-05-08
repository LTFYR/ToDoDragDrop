let input = document.querySelector("#input");
let button = document.getElementById("btn");
let point = document.querySelector(".dragging-side");
var count = 0;


let paragraphs = document.querySelectorAll("div");
let dragElements = document.querySelectorAll(".dragging-side");

paragraphs.forEach(ps => {
 ps.addEventListener("dragstart",(e) => {
   e.target.classList.add("dragged-item");
 }); 

 ps.addEventListener("dragend",(e) => {
  e.target.classList.remove("dragged-item");

  switch (e.target.parentElement.id) {
    case "firstline":
      e.target.classList.add("todo");
      break;
    case "secondline":
      e.target.classList.add("done");
    break;
    case "thirdline" :
      e.target.classList.add("change");
    break;
    case "lastline" :
      e.target.classList.add("later");
    break;
    default:
      break;
  }
});
});


dragElements.forEach((draggedArea) => {
  draggedArea.addEventListener("dragenter", (e) => {
    console.log(e.target.id);
    
  });

  draggedArea.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  draggedArea.addEventListener("dragleave", (e) => {

  })

  draggedArea.addEventListener("drop", function drop(e) {
    e.preventDefault();
    const draggedItem = document.querySelector(".dragged-item");
    
    draggedArea.appendChild(draggedItem);
  })
});



button.addEventListener("click", start);
function start(){
    if(input.value != ""){
      count++;
      let paragraf = document.createElement("div");
      paragraf.setAttribute("id","newElement");
      paragraf.draggable = "true"
      let silButon = document.createElement("div");
      let done = document.createElement("div");
      done.classList.add("done");
      silButon.classList.add("silbuton");
      paragraf.innerText = count + "." + input.value;
      silButon.innerText = "Clear";
      done.innerText = "Done";
      point.appendChild(paragraf);
      paragraf.appendChild(silButon);
      paragraf.appendChild(done);
      

      silButon.addEventListener("click" ,() => {
        count--;
        point.removeChild(paragraf)
      })


      done.addEventListener("click", () => {
          paragraf.classList.toggle("linethrough");
      })
      
    }
    else{
      alert("Xeta bas verdi!!!!")
    }
}


 
input.addEventListener("keyup",function(e){
  
  if(e.keyCode == 13){
    
    start();
  }
  
})

