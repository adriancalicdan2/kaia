# KAIA Official Website

A visually appealing and interactive website for **KAIA**, featuring custom animations, dark mode, an embedded music player, and a dynamic contact form integrated with EmailJS.

## 🚀 Features

- **Smooth Animations** – Fade effects, sliding text, and other visual enhancements.
- **Music Player** – Embedded YouTube player.
- **Contact Form** – Integrated with EmailJS for sending messages.
- **Auto-Hiding Header** – Disappears when scrolling down and reappears when scrolling up.
- **Back to Top Button** – Quickly navigate to the top of the page.

## 📂 Project Structure

```
/kaia-website
│── index.html         # Main HTML file
│── styles.css         # CSS for styling
│── script.js         # JavaScript for interactivity
│── assets/           # Images and other assets
└── README.md         # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/kaia-website.git
   cd kaia-website
   ```

2. **Open `index.html` in a browser**

## 💡 EmailJS Setup

1. **Sign up** at [EmailJS](https://www.emailjs.com/).
2. **Get your credentials**: Service ID, Template ID, and Public Key.
3. **Update `script.js` with your details**:

   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");

   document
     .getElementById("contact-form")
     .addEventListener("submit", function (event) {
       event.preventDefault();
       emailjs
         .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
           from_name: document.getElementById("name").value,
           from_email: document.getElementById("email").value,
           message: document.getElementById("message").value,
         })
         .then(
           function (response) {
             console.log("Success!", response);
             alert("Your message has been sent successfully!");
             document.getElementById("contact-form").reset(); // Clear form fields
           },
           function (error) {
             console.error("Failed...", error);
             alert("Sorry, there was an error sending your message.");
           }
         );
     });
   ```

## 📌 Usage

- Play KAIA’s music through the **YouTube player** 🎵.
- Use the **contact form** to send messages via EmailJS.
- Scroll down to hide the header, scroll up to reveal it.

## 📝 License

This project is open-source. Feel free to modify and enhance it!

---

**Developed with ❤️ for KAIA fans!**
