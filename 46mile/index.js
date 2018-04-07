// Document objects
let headerFade = document.getElementById("header-fade");

const featureList = [
  "Research", "Strategy", "Media planning & buying",
  "Social Media", "SEO", "PR", "Influencer Marketing",
  "Creative services", "Website Development & Design"
];

const featureLoop = (index) => {
  // Start loop delay
  setInterval(() => {
    headerFade.innerHTML = featureList[index];
    index += 1;
    // Restart at first word
    if (index === featureList.length) { index = 0 }
  }, 2000)
}

featureLoop(0);
