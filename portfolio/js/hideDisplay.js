function hide() {
  const ids = ["web1", "web2", "web3", "my-resume"];
  ids.forEach((item) => {
    document.getElementById(item).style.visibility = "hidden";
  })
}

function displayWeb() {
  const ids = ["web1", "web2", "web3"];
  ids.forEach((item) => {
    document.getElementById(item).style.visibility = "visible";

  })
}

function displayCV() {
  const ids = ['my-resume'];
  ids.forEach((item) => {
    document.getElementById(item).style.visibility = "visible";
  })
}