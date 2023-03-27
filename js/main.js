// add onClick listener to button
document.querySelector("button").addEventListener("click", getPhoto);
document.querySelector("img").src = "";

async function getPhoto() {
  const choice = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=bvIv6NgdIkAB15Ma4rUrWWtaQczJ1qnFdz3NzqIU&date=${choice}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.media_type === "image") {
      document.querySelector("img").src = data.hdurl;
    } else if (data.media_type === "video") {
      document.querySelector("iframe").src = data.url;
    }

    document.querySelector("h2").innerText = data.title;
    document.querySelector("img").src = data.hdurl;
    document.querySelector("p").innerText = data.explanation;
  } catch (err) {
    console.log(`Error is ${err}`);
  }
}

// function getPhoto() {
//   const choice = document.querySelector("input").value;
//   console.log(choice); // testing to see is it working

//   const url = `https://api.nasa.gov/planetary/apod?api_key=bvIv6NgdIkAB15Ma4rUrWWtaQczJ1qnFdz3NzqIU&date=${choice}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data); // to check containing properties in object

//       // add conditional if media type isn't image, since there are videos also
//       if (data.media_type === "image") {
//         document.querySelector("img").src = data.hdurl;
//       } else if (data.media_type === "video") {
//         document.querySelector("iframe").src = data.url;
//       }

//       document.querySelector("h2").innerText = data.title;
//       document.querySelector("img").src = data.hdurl;
//       document.querySelector("p").innerText = data.explanation;
//     })
//     .catch((err) => console.log(`error ${err}`));
// }
