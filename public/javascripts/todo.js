// Task Checkbox
const completeTrue = document.querySelectorAll("#completeTrue");
const completeFalse = document.querySelectorAll("#completeFalse");
const checkboxSubmit = document.querySelectorAll(".checkboxSubmit");
const active = document.querySelectorAll(".active");

completeTrue.forEach((item, index) => {
  item.addEventListener("click", () => {
    active[index].classList.toggle("completed");
    if (item.checked) {
      checkboxSubmit[index].click();
    } else {
      completeFalse[index].checked = true;
      checkboxSubmit[index].click();
      completeFalse[index].checked = false;
    }
  });
});

// Task Delete Hover
const task = document.querySelectorAll(".task");
const taskDel = document.querySelectorAll(".taskDel");

task.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    taskDel[index].classList.toggle("hidden");
  });
});

task.forEach((item, index) => {
  item.addEventListener("mouseout", () => {
    taskDel[index].classList.toggle("hidden");
  });
});

// Filtering list
const sort = document.querySelectorAll("li");

const filterForm = document.querySelector(".filterForm");
const filter = document.querySelector(".filter");

sort.forEach((list) => {
  list.addEventListener("click", (e) => {
    const state = document.querySelector(".li");
    if (state !== e.target) {
      state.classList.toggle("li");
      list.classList.toggle("li");
      filter.value = e.target.role;
      filterForm.click();
    }
  });
});
