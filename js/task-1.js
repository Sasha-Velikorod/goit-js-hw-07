const categories = document.querySelector("#categories");
const item = document.querySelectorAll(".item");

console.log("Number of categoties:", item.length);

item.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const elementsLength = el.querySelectorAll("ul > li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsLength}`);
});
