<!-- Add this to dashboard.html -->
<h3>Irrigation Planner</h3>
<form id="irrigationForm">
  <label>Crop Type: <input type="text" id="cropType"></label><br>
  <label>Field Size (hectares): <input type="number" id="fieldSize"></label><br>
  <label>Soil Moisture (%): <input type="number" id="soilMoisture"></label><br>
  <label>Expected Rainfall (mm): <input type="number" id="expectedRain"></label><br>
  <button type="submit">Calculate Plan</button>
</form>

<p id="irrigationResult"></p>

<script>
  document.getElementById("irrigationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cropType = document.getElementById("cropType").value;
    const fieldSize = parseFloat(document.getElementById("fieldSize").value);
    const soilMoisture = parseFloat(document.getElementById("soilMoisture").value);
    const expectedRain = parseFloat(document.getElementById("expectedRain").value);

    // Assume default ETc values per crop (for example)
    const ETcValues = { maize: 5, rice: 7, beans: 4 };
    const ETc = ETcValues[cropType.toLowerCase()] || 5;

    const NIR = ETc - expectedRain; // Simplified
    const waterNeededPerHectare = NIR * 10_000; // mm to liters
    const totalWater = waterNeededPerHectare * fieldSize;

    const resultText = `💧 Recommended Water: ${totalWater.toFixed(0)} L for ${fieldSize} ha of ${cropType}`;
    document.getElementById("irrigationResult").innerText = resultText;

    // Optional: Save to Firestore
    const user = firebase.auth().currentUser;
    if (user) {
      firebase.firestore().collection("irrigationPlans").add({
        uid: user.uid,
        crop: cropType,
        fieldSize,
        expectedRain,
        ETc,
        totalWater,
        createdAt: new Date()
      });
    }
  });
</script>
