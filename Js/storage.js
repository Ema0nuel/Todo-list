const contact = [
  {
    text: "Me",
    note: "This is me....",
  },
  {
    text: "You",
    note: "This is You....",
  },
];
localStorage.setItem("names", JSON.stringify(contact));
const items = JSON.parse(localStorage.getItem("names"));

console.log(items);
function print() {
  items.map((object) => {
    console.log(object.text);
  });
}

print();
