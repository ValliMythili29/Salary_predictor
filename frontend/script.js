console.log("JavaScript loaded successfully!");
async function predictSalary() {
    console.log("Predict button clicked!");
    // Get input value
    const experience = document.getElementById("experience").value;

    if (experience === "" || Number(experience) < 0) {
        document.getElementById("result").innerText =
            "Enter a valid experience!";
        return;
    }

    // Send request to backend

    const response = await fetch(
        "https://https://salary-predictor-x9al.onrender.com.onrender.com/predict",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                experience: Number(experience)
            })
        }
    );
    ;

    // Receive backend response
    const data = await response.json();

    // Display prediction
    document.getElementById("result").innerText =
        "Predicted Salary: ₹" + data.predicted_salary;
}
