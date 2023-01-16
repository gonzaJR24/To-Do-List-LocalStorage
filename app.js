const input = document.querySelector(".input-btn input");
const btnAdd = document.querySelector(".input-btn button");
const ul = document.querySelector(".list-tasks ul");
const btnRemove = document.querySelector(".remove-all");

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerHTML = `<li>${input.value} <span>X</span></li>`;

  if (li.textContent.length!== 2) {
    ul.appendChild(li);
    localStorage.setItem(input.value, input.value);
  }
});

const keys = Object.keys(localStorage);
(()=>{
    keys.forEach(key => {
        const value = localStorage.getItem(key);
        const li = document.createElement("li");
        li.innerHTML = `<li>${value} <span>X</span></li>`;
        // Add the new li element to the ul
        ul.appendChild(li);
      });
})()


document.addEventListener("click", e => {
  if (e.target.matches("span")) {
    const li = e.target.parentElement;
    li.parentElement.removeChild(li);
    localStorage.removeItem(input.value)
  }
});

btnRemove.addEventListener("click", () => {
  ul.textContent = "";
  localStorage.clear();
});









