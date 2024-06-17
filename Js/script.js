const addNew = document.getElementById("newList");
const oldNote = document.getElementById("oldList");
const newListBox = document.getElementById("newNoteBox");
const oldListBox = document.getElementById("oldNoteBox");
const text = document.getElementById("text");
const textNote = document.getElementById("listNote");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const deleteBtn = document.getElementById("deleteBtn");
const todoForm = document.querySelector("form");

// Display Boxes
addNew.onclick = () => {
  newListBox.classList.toggle("hidden");
  oldListBox.classList.add("hidden");

  text.focus();
};
oldNote.onclick = () => {
  oldListBox.classList.toggle("hidden");
  newListBox.classList.add("hidden");
};

const messages = JSON.parse(localStorage.getItem("message")) || [];

// Update Display
const messageElement = (message) => `
<li class="bg-zinc-400 p-2 mt-2 rounded-md checkOut">
<div class="flex flex-row space-x-0 space-y-0 gap-1">
<div class="rounded-full p-2 bg-red-600 w-4 h-4 mt-2.5 cursor-pointer hover:bg-red-500"
id="check">
</div>
<h2 class="text-2xl font-medium">${message.text}</h2>
</div>
<p>${message.note}</p>
</li>
`;

// Update Complete
const complete = () => {
  const check = document.querySelectorAll(".checkOut");
  check.forEach((click) => {
    click.addEventListener("click", () => {
      click.style.backgroundColor = "lightGreen";
    });
  });
};

window.onload = () => {
  messages.map((items) => {
    output.innerHTML += messageElement(items);
    complete();
  });
};

// Create New Note
const addNote = (e) => {
  e.preventDefault();
  const message = {
    text: text.value,
    note: textNote.value,
  };

  messages.push(message);
  localStorage.setItem("message", JSON.stringify(messages));
  output.innerHTML += messageElement(message);
  complete();
  todoForm.reset();

  updateUi();
};
const updateUi = () => {
  oldListBox.classList.remove("hidden");
  newListBox.classList.add("hidden");
};

// Event Listeners
todoForm.addEventListener("submit", addNote);

deleteBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear Notes?")) {
    localStorage.clear();
    output.innerHTML = "";
  } else {
    return;
  }
});
