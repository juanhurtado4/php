// Document objects
let bannerFade = document.getElementById("banner-fade");

const featureList = [
  "Research?", "Strategy?", "Media planning & buying?",
  "Social Media?", "SEO?", "PR?", "Influencer Marketing?",
  "Creative services?", "Website Development & Design?"
];

const featureLoop = (index) => {
  // Start loop delay
  setInterval(() => {
    bannerFade.innerHTML = featureList[index];
    index += 1;
    // Restart at first word
    if (index === featureList.length) { index = 0 }
  }, 3000)
}

featureLoop(0);
