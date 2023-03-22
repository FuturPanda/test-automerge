import * as Automerge from "@automerge/automerge";

let form = document.querySelector("form");
let input = document.querySelector("#new-todo");
form.onsubmit = (ev) => {
  ev.preventDefault();
  addItem(input.value);
  input.value = null;
};

let doc = Automerge.init();
console.log(doc);
let actorId = Automerge.getActorId(doc);
console.log(actorId);
let docId = window.location.hash.replace(/^#/, "");
let binary = await localforage.getItem(docId);
if (binary) {
  doc = Automerge.load(binary);
  render(doc);
}

function updateDoc(newDoc) {
  doc = newDoc;
  render(newDoc);
  let binary = Automerge.save(newDoc);
  localforage.setItem(docId, binary).catch((err) => console.log(err));
}

function addItem(text) {
  let newDoc = Automerge.change(doc, (doc) => {
    if (!doc.items) doc.items = [];
    doc.items.push({ text, done: false });
  });
  updateDoc(newDoc);
}

function render(doc) {
  let list = document.querySelector("#todo-list");
  list.innerHTML = "";
  doc.items &&
    doc.items.forEach((item, index) => {
      let itemEl = document.createElement("li");
      itemEl.innerText = item.text;
      itemEl.style = item.done ? "text-decoration: line-through" : "";
      list.appendChild(itemEl);
    });
}

function toggle(index) {
  let newDoc = Automerge.change(doc, (doc) => {});
  updateDoc(newDoc);
}
