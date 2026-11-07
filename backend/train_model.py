import numpy as np
from sklearn.linear_model import LinearRegression
import joblib

# Training data
X = np.array([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]
])

y = np.array([
    15000,
    20000,
    25000,
    30000,
    35000,
    40000,
    45000,
    50000,
    55000,
    60000
])

# Create model
model = LinearRegression()

# Train model
model.fit(X, y)

# Save trained model
joblib.dump(model, "model.pkl")

print("Model trained successfully!")

# Test prediction
prediction = model.predict([[5]])

print("Predicted salary:", prediction[0])