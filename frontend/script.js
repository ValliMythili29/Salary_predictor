
async function predictSalary() {

    // Get input value
    const experience = document.getElementById("experience").value;

    if (experience === "" || Number(experience) < 0) {
        document.getElementById("result").innerText =
            "Enter a valid experience!";
        return;
    }

    // Send request to backend
    const response = await fetch(
        "http://127.0.0.1:8000/predict",
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

    // Receive backend response
    const data = await response.json();

    // Display prediction
    document.getElementById("result").innerText =
        "Predicted Salary: ₹" + data.predicted_salary;
}
