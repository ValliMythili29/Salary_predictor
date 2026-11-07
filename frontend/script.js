
async function predictSalary() {

    console.log("Predict button clicked!");

    const experience = document.getElementById("experience").value;
    const result = document.getElementById("result");

    if (experience === "" || Number(experience) < 0) {
        result.innerText = "Enter valid experience!";
        return;
    }

    result.innerText = "Predicting...";

    try {

        const response = await fetch(
            "https://salary-predictor-x9al.onrender.com/predict",
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

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        result.innerText =
            "Predicted Salary: ₹" + data.predicted_salary;

    }
    catch (error) {

        console.error("Prediction error:", error);

        result.innerText =
            "Something went wrong: " + error.message;
    }
}
