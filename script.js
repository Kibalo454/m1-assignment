const imageFiles = [
  "hyde1.jpg", "hyde2.jpg", "hyde3.jpg", "hyde4.jpg", "hyde5.jpg",
  "hyde6.jpg", "hyde7.jpg", "hyde8.jpg", "hyde9.jpg", "hyde10.jpg"
];

const captionTexts = [
  "Riverwalk along Hillsborough River",
  "View of Downtown Tampa",
  "Busch Gardens - Hyde Park Village",
  "Waterfront from St. Pete",
  "Gasparilla Festival in full swing",
  "Raymond James Stadium - Game Day",
  "Amalie Arena - Game Day",
  "Tropicana Stadium - Game Day",
  "Hyde Park Plaza",
  "Clearwater Beach Sunset",
];

const descTexts = [
  "A relaxing walk along the scenic Hillsborough River.",
  "A view of Tampa’s modern skyline from a unique perspective.",
  "Busch Gardens offers a blend of nature and entertainment in Hyde Park.",
  "Beautiful waterfront views of St. Petersburg, Florida.",
  "The annual Gasparilla Festival, a community favorite.",
  "Fans gather to watch the Tampa Bay Buccaneers at home.",
  "Fans gather to watch the Tampa Bay Bay Lightning at home.",
  "Fans gather to watch the Tampa Bay Bay Rays at home.",
  "Dining and shopping in the heart of Hyde Park Plaza.",
  "The golden hour at Clearwater Beach – a perfect Tampa sunset."
];

const infoTexts = [
  "Stroll along the scenic Hillsborough River trail with calming river views.",
  "Hyde Park’s canopy-lined streets offer peace and charm in every step.",
  "A welcoming spot in the heart of Tampa, symbolizing community and elegance.",
  "Relax and dine with a community vibe in the open-air plaza.",
  "Colorful floats, music, and fun during Gasparilla’s annual celebration!",
  "Celebrate Tampa’s heritage with night parades, lights, and festivities.",
  "Cheer on your team with roaring crowds and electric energy.",
  "Glimpse the downtown skyline glowing with culture and modernity.",
  "A breathtaking Clearwater sunset with warm sands and crashing waves.",
  "Enjoy relaxing views of the glistening St. Pete waterfront."
];

// Reference to gallery container
const gallery = document.getElementById("gallery");

// Generate photo entries
for (let i = 0; i < imageFiles.length; i++) {
  const listItem = document.createElement("li");
  listItem.id = `photo${i + 1}`;
  listItem.className = "photo";

  const img = document.createElement("img");
  img.src = `images/${imageFiles[i]}`;
  img.alt = captionTexts[i];

  const caption = document.createElement("div");
  caption.className = "caption";
  caption.textContent = captionTexts[i];

  const description = document.createElement("div");
  description.className = "description";
  description.textContent = descTexts[i];

  // Add click event to description
  description.addEventListener("click", function () {
    document.getElementById("infoHeading").innerText = captionTexts[i];
    document.getElementById("infoText").innerText = infoTexts[i];
    document.getElementById("infoBox").style.visibility = "visible";
  });

  listItem.appendChild(img);
  listItem.appendChild(caption);
  listItem.appendChild(description);
  gallery.appendChild(listItem);
}

// Close button event
document.getElementById("closeInfo").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("infoBox").style.visibility = "hidden";
});
