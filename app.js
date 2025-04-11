
function recommendCrop() {
  const soil = document.getElementById('soilType').value;
  let result = "";
  if (soil === 'sandy') {
    result = "Mahindi, Maharage";
  } else if (soil === 'loam') {
    result = "Mpunga, Nyanya";
  } else if (soil === 'clay') {
    result = "Viazi, Miwa";
  }
  document.getElementById('cropResult').innerText = "Mazao Yanayopendekezwa: " + result;
}
