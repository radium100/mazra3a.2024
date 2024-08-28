const imagePaths = [
  "IMG-20220601-WA0002.jpg",
  "IMG-20220601-WA0003.jpg",
  "IMG-20220601-WA0004.jpg",
  "IMG-20220601-WA0005.jpg",
  "IMG-20220601-WA0006.jpg",
  "IMG-20220601-WA0007.jpg",
  "IMG-20220601-WA0008.jpg",
  "IMG-20220601-WA0011.jpg",
  "IMG-20220601-WA0012.jpg",
  "IMG-20220601-WA0013.jpg",
  "IMG-20220601-WA0014.jpg",
  "IMG-20220601-WA0015.jpg",
  "IMG-20220601-WA0016.jpg",
  "IMG-20220601-WA0017.jpg",
  "IMG-20220601-WA0020.jpg",
  "IMG-20220601-WA0021.jpg",
  "IMG-20220601-WA0022.jpg",
  "IMG-20220601-WA0023.jpg",
  "IMG-20220601-WA0024.jpg",
  "IMG-20220601-WA0025.jpg",
  "IMG-20220601-WA0026.jpg",
  "IMG-20220601-WA0027.jpg",
  "IMG-20220601-WA0028.jpg",
  "IMG-20220601-WA0029.jpg",
  "IMG-20220601-WA0030.jpg",
  "IMG-20220601-WA0031.jpg",
  "IMG-20220601-WA0032.jpg",
  "IMG-20220601-WA0033.jpg",
  "IMG-20220601-WA0034.jpg",
  "IMG-20220601-WA0035.jpg",
  "IMG-20220601-WA0036.jpg",
  "IMG-20220601-WA0037.jpg",
  "IMG-20220601-WA0038.jpg",
  "IMG-20220601-WA0039.jpg",
  "IMG-20220601-WA0040.jpg",
  "IMG-20220601-WA0042.jpg",
  "IMG-20220601-WA0043.jpg",
  "IMG-20220601-WA0044.jpg",
  "IMG-20220601-WA0053.jpg",
  "IMG-20220601-WA0054.jpg",
  "IMG-20220601-WA0056.jpg",
  "IMG-20220601-WA0057.jpg",
  "IMG-20220601-WA0058.jpg",
  "IMG-20220601-WA0060.jpg",
  "IMG-20220601-WA0061.jpg",
  "IMG-20220601-WA0062.jpg",
  "IMG-20220601-WA0066.jpg",
  "IMG-20220601-WA0067.jpg",
  "IMG-20220601-WA0068.jpg",
  "IMG-20220601-WA0069.jpg",
  "IMG-20220601-WA0070.jpg",
  "IMG-20220601-WA0074.jpg",
  "IMG-20220601-WA0075.jpg",
  "IMG-20220601-WA0082.jpg",
  "IMG-20220602-WA0009.jpg",
  "IMG-20220602-WA0016.jpg",
  "IMG-20220602-WA0017.jpg",
  "IMG-20220602-WA0018.jpg",
  "IMG-20220602-WA0019.jpg",
  "IMG-20220602-WA0020.jpg",
  "IMG-20220602-WA0021.jpg",
  "IMG-20220602-WA0022.jpg"
];


const dreams = [
  document.getElementById("dream1"),
  document.getElementById("dream2"),
  document.getElementById("dream3"),
];

// Distribute the images among the three divs
imagePaths.forEach((path, index) => {
  const img = document.createElement("img");
  img.src = path;
  img.alt = path; // Add an alt text
  img.className = "image-class"; // Optional, for additional styling if needed

  // Distribute images across the three divs
  dreams[index % 3].appendChild(img);
});
