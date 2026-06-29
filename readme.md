# HandScribe ✍️

HandScribe is a full-stack handwriting recognition application that converts handwritten text into digital text in real time. It combines a React frontend, an Express.js backend, and a TensorFlow-based OCR model to provide an end-to-end handwriting recognition pipeline.

## 🚀 Features

- **Draw in Real-Time**: The canvas is super smooth and responsive, perfect for jotting down a few lines.
- **Handwriting Recognition**: It uses a machine learning model to turn your drawings into actual text!
- **Full-Stack Power**: This isn't just a frontend trick. It's a robust system with a separate frontend, backend, and ML model.
- **Ready to Deploy**: The backend is containerized with Docker, so it's consistent and easy to scale.

## 🛠️ Tech Stack

Curious about what's under the hood? Here's the tech I used:

### Technologies Used

**Frontend**
- React, Vite, Axios, CSS

**Backend**
- Node.js, Express.js, Python (for an image processing script)

**ML Model**
- Python, TensorFlow, Keras (based on SimpleHTR)

**Deployment**
- Vercel (Frontend), Render (Backend & Model API), Docker

## 🏗️ Architecture

So, how does it all work together? I set it up with three main parts to keep things organized:

1. **The Frontend (on Vercel)**: This is what you see! A user draws on the canvas in React, and when they're done, the drawing data gets sent off to the backend.

2. **The Backend (on Render)**: This is the orchestrator. It grabs the drawing data, tells a quick Python script to turn it into a PNG image, and then sends that image over to the brains of the operation—the Model API.

3. **The Model API (also on Render)**: This is a separate Python service that hosts the pre-trained SimpleHTR model. It gets the image, works its magic to figure out the text, and sends it back.

Finally, the backend passes the recognized text back to the frontend for you to see. Pretty neat, right?!

## (Getting Started)

Want to get this running on your own machine? Awesome! Here's how to get the frontend and backend up and running. For local development, you can just use the live ML model I've already hosted on Render, which makes things way easier!

### Prerequisites

You'll need a few things installed first:
- Node.js (v18 or later)
- Python (v3.8 is recommended)
- npm

### Backend Setup

The backend is the middle-man that connects the frontend and the model.

1. Head over to the backend directory:
   ```bash
   cd backend
   ```

2. Install the Node packages:
   ```bash
   npm install
   ```

3. Get the Python stuff ready:
   ```bash
   # Create a virtual environment
   python -m venv venv
   
   # Fire it up (on Windows)
   .\venv\Scripts\activate
   
   # Or on macOS/Linux
   # source venv/bin/activate
   
   # Install the Python packages
   pip install -r requirements.txt
   ```

4. Create your environment file:
   - Make a new file called `.env` in the `/backend` folder.
   - Just copy and paste the stuff from the `.env.example` section below.

5. Start the backend server!
   ```bash
   node server.js
   ```
   
   You should see it running at http://localhost:5000.

### Frontend Setup

1. Jump into the frontend directory:
   ```bash
   cd frontend 
   ```

2. Install the Node packages:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```
   
   Your browser should open up to http://localhost:5173.

## 🔑 Environment Variables

You'll just need to create a couple of `.env` files to tell the apps where to find each other on your local machine.

### Backend (`/backend/.env`)

```env
# The URL for your LOCAL frontend dev server
FRONTEND_URL_DEV="http://localhost:5173"

# We'll use the live model API for local dev to keep things simple
MODEL_API_URL="https://handscribe.onrender.com/predict"
```

### Frontend (`/frontend/.env.local`)

```env
# The URL for your LOCAL backend server
VITE_API_BASE_URL="http://localhost:5000"
```

## 🙏 Acknowledgements

A huge shout-out to Harald Scheidl! The handwriting recognition model is based on their amazing SimpleHTR project. You can check out the original work here:

[github.com/githubharald/SimpleHTR](https://github.com/githubharald/SimpleHTR)
