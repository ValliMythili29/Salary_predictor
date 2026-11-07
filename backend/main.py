from fastapi import FastAPI
from pydantic import BaseModel
import joblib

from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

# Create FastAPI application
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "https://salarypredictor-frontend.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load the saved ML model
model_path = Path(__file__).parent / "model.pkl"
model = joblib.load(model_path)


# Define the input format
class SalaryInput(BaseModel):
    experience: float


# First API endpoint
@app.get("/")
def home():
    return {"message": "Salary Prediction API is running!"}


# Prediction API endpoint
@app.post("/predict")
def predict_salary(data: SalaryInput):

    # Get experience from user input
    experience = data.experience

    # Predict salary
    prediction = model.predict([[experience]])

    # Return prediction
    return {
        "experience": experience,
        "predicted_salary": float(prediction[0])
    }
