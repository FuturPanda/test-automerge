export function sendMessage(arr) {
  console.log(arr);
  const list = document.querySelector("ul");
  list.innerHTML = "";
  console.log(list);
  arr.forEach((item, index) => {
    let itemEl = document.createElement("li");
    itemEl.innerText = item;
    list.appendChild(itemEl);
  });
}
