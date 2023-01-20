// add onClick listener to button
document.querySelector("button").addEventListener("click", getPhoto);

function getPhoto() {
  const choice = document.querySelector("input").value;
  console.log(choice); // testing to see is it working

  const url = `https://api.nasa.gov/planetary/apod?api_key=bvIv6NgdIkAB15Ma4rUrWWtaQczJ1qnFdz3NzqIU&date=${choice}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // to check containing properties in object

      document.querySelector("h2").innerText = data.title;
      document.querySelector("img").src = data.hdurl;
      document.querySelector("p").innerText = data.explanation;
    })
    .catch((err) => console.log(`error ${err}`));
}
