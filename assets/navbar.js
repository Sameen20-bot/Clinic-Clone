function myOpen() {
  const element = document.getElementById("links-container")
  element.classList.add("open")
  console.log("click open")
}

function myClose() {
  const element = document.getElementById("links-container")
  element.classList.remove("open")

  console.log("click close")
}
