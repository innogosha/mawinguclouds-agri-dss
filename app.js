document.getElementById('cropForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const soil = e.target.soil.value;
  const ph = parseFloat(e.target.ph.value);
  const rain = parseInt(e.target.rain.value);
  const temp = parseInt(e.target.temp.value);

  let recommendation = '';
  if (soil === 'loamy' && ph >= 5.5 && ph <= 7.5 && rain >= 500 && temp >= 18 && temp <= 27) {
    recommendation = '🌽 Maize is suitable for your soil.';
  } else if (soil === 'clay' && ph >= 5.0 && ph <= 6.5 && rain >= 1200 && temp >= 21) {
    recommendation = '🌾 Rice is suitable.';
  } else {
    recommendation = '⚠️ No suitable crop found with current conditions.';
  }

  document.getElementById('cropResult').textContent = recommendation;
});

function logout() {
  // Add Firebase auth signOut logic here
  alert('User logged out');
}
