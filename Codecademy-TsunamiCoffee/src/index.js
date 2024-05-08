const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/beans.png"
  ) {
    myImage.setAttribute(
      "src",
      "Codecademy-TsunamiCoffee/../img/banku_only.jpeg"
    );
  } else {
    myImage.setAttribute("src", "Codecademy-TsunamiCoffee/../img/banku1.jpeg");
  }
};

// function changePic() {
//   let source = cupOfCoffee.getAttribute("src");
//   switch (source) {
//     case "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/latte.png":
//       cupOfCoffee.setAttribute(
//         "src",
//         "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/coffee-man.png"
//       );
//       break;
//     case "https: //content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/coffee-man.png":
//       cupOfCoffee.setAttribute(
//         "src",
//         "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/pastries.png"
//       );
//       break;
//     case "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/pastries.png":
//       cupOfCoffee.setAttribute(
//         "src",
//         "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/latte.png"
//       );
//       break;
//   }
// }
// let cupOfCoffee = document.querySelector(".gallaPics");
// cupOfCoffee.addEventListener("click", changePic);

function changePic(imageElement) {
  let source = imageElement.getAttribute("src");
  switch (source) {
    case "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/latte.png":
      imageElement.setAttribute(
        "src",
        "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/coffee-man.png"
      );
      break;
    case "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/coffee-man.png":
      imageElement.setAttribute(
        "src",
        "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/pastries.png"
      );
      break;
    case "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/pastries.png":
      imageElement.setAttribute(
        "src",
        "https://content.codecademy.com/courses/freelance-1/unit-5/tsunami-coffee/images/latte.png"
      );
      break;
  }
}

let gallaPicsImages = document.querySelectorAll(".gallaPics");
gallaPicsImages.forEach((image) =>
  image.addEventListener("click", () => changePic(image))
);

function getInfo(event) {
  // event.preventDefault();
  const myName = prompt("Please enter your name.");
  if (!myName) {
    getInfo();
  } else {
    localStorage.setItem("name", myName);
    let myHeading = document.querySelector("h1");
    const link = document.createElement("a");
    link.href = "https://elpeaj@github.com";
    link.target = "_blank";
    link.textContent = "Click Here";

    myHeading.textContent = `Tsunami Coffee is Delish, ${myName}. Kindly give a review `;
    myHeading.appendChild(link);
  }
}

gallaPicsImages = document.querySelector("button");
gallaPicsImages.addEventListener("click", getInfo);
