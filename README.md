KAIA Official Website
A visually appealing website for KAIA featuring custom animations, dark mode, a music player, and a dynamic contact form with EmailJS.

🚀 Features
✔️ Smooth Animations (Fade effects, sliding text, etc.)
✔️ Dark Mode Toggle (Accessible via dropdown menu)
✔️ Music Player (Embedded YouTube Player)
✔️ Contact Form (Connected to EmailJS)
✔️ Auto-Hiding Header (Appears when scrolling up)
✔️ Back to Top Button

📂 Project Structure
graphql
Copy
Edit
/kaia-website  
│── index.html # Main HTML file  
│── styles.css # CSS for styling  
│── script.js # JavaScript for interactivity  
│── Images and other assets  
└── README.md # Project documentation

🔧 Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/kaia-website.git
cd kaia-website

2. Open index.html in a browser

💡 EmailJS Setup
Sign up at EmailJS
Get your Service ID, Template ID, and Public Key
Update script.js:
javascript
Copy
Edit
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
from_name: document.getElementById("name").value,
from_email: document.getElementById("email").value,
message: document.getElementById("message").value,
});
📌 Usage
Click the dark mode toggle in the dropdown menu 🌙
Play KAIA’s music via the YouTube player 🎵
Send messages using the contact form (connected to EmailJS)
📜 License
This project is open-source. Feel free to modify and improve it!
