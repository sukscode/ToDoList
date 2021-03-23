var container3 = document.getElementsByClassName("container-3")[0];
var i = 0;

submitToDo() = HTMLDivElement.onclick;
function submitToDo() {
  var to_do = document.getElementById("to-do").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("input");
  var node2 = document.createElement("p");

  node1.type = "checkbox";
  node2.innerHTML = to_do;

  node0.appendChild(node1);
  node0.appendChild(node2);

  container3.insertAdjacentElement("beforeend", node0);

  node2.style.marginLeft = "45px";
  node0.setAttribute(
    "style",
    "border-radius:5px;padding:15px 10px 5px 20px; color:#434a54;margin-top:10px;font-size:25px;overflow:hidden"
  );
  node0.style.background = random_color();

  node0.addEventListener("dblclick", function () {
    node0.remove();
  });

  document.getElementById("to-do").value = "";
}

function random_color() {
  var random_colors = [
    "rgb(224,242,233)",
    "rgb(206,181,167)",
    "rgb(161,124,107)",
    "rgb(91,123,122)",
    "rgb(60,136,126)",
  ];
  if (i > random_colors.length - 1) {
    i = 0;
  }
  return random_colors[i++];
}
