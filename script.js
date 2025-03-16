document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Toggle
    document.getElementById("contact-toggle").addEventListener("click", function () {
        let form = document.getElementById("contact-form");
        form.classList.toggle("show");
    });

    // Fade-in animation on scroll
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
});





















document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav ul");
    let isDown = false;
    let startX;
    let scrollLeft;

    nav.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - nav.offsetLeft;
        scrollLeft = nav.scrollLeft;
    });

    nav.addEventListener("mouseleave", () => {
        isDown = false;
    });

    nav.addEventListener("mouseup", () => {
        isDown = false;
    });

    nav.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - nav.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        nav.scrollLeft = scrollLeft - walk;
    });
});











document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    // Load saved theme from local storage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("theme", "dark");
            icon.classList.replace("fa-sun", "fa-moon");
        }
    });
});
























console.log("FAQ Bot Loaded");

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const faqPopup = document.getElementById("faq-popup");
    const faqButton = document.getElementById("faq-bot-button");
    const faqClose = document.getElementById("faq-close");
    const faqChatbox = document.getElementById("faq-chatbox");
    const faqInput = document.getElementById("faq-input");
    const faqSend = document.getElementById("faq-send");

    document.getElementById("faq-link").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById("faq-popup").style.display = "flex"; // Open FAQ bot
    });

    // Smart FAQ Database with Question Variations
    const faqs = {
        "how long does it take to complete a project": [
            "Depends on complexity, but most projects take 1-4 weeks.",
            "Project timelines vary. Simple sites: 1 week. Complex apps: 4 weeks."
        ],
        "do you offer support after the project is completed": [
            "Yes! I provide ongoing support and maintenance.",
            "Absolutely! Post-launch support is available."
        ],
        "what technologies do you use": [
            "I specialize in JavaScript, HTML, CSS, Tailwind, Node.js, Firebase.",
            "I work with JavaScript, Firebase, Tailwind CSS, and Node.js."
        ],
        "can you build e-commerce websites": [
            "Yes! I can develop fully functional e-commerce websites with payment integration.",
            "Yes, I create online stores with Stripe, MTN MoMo, and bank payment options."
        ],
        "why is my website not loading": [
            "Check your internet, server status, and inspect the console for errors.",
            "Ensure your hosting is active and check for any broken scripts."
        ],
        "how do i integrate mtn momo payment": [
            "Use MTN's API with secure endpoints and proper webhook handling.",
            "MTN MoMo API setup requires authentication, webhooks, and proper security."
        ],
        "how can i contact you": [
            "You can email me at mantey.gabriel67@gmail.com.",
            "Feel free to reach out to me via email: mantey.gabriel67@gmail.com."
        ],
        "do you offer website maintenance": [
            "Yes! I offer maintenance plans to keep your website updated and secure.",
            "Website maintenance services are available to ensure your website runs smoothly."
        ],
        "what is the process to start a project with you": [
            "We can start by discussing your requirements, followed by a proposal and contract.",
            "Let's schedule a call or meeting to discuss your project and how we can move forward."
        ],
        "can you redesign my website": [
            "Yes, I can give your website a fresh, modern look while improving its functionality.",
            "I can redesign your website to enhance both design and user experience."
        ],
        "do you offer hosting services": [
            "I can recommend reliable hosting providers and assist with deployment.",
            "Although I don't provide hosting, I can help set up and deploy your website with a trusted provider."
        ],
        "how do i update my website after completion": [
            "I offer training and guidance on how to update your site, or I can handle updates for you.",
            "You can contact me anytime for updates, or I can provide you with CMS tools to update your site."
        ],
        "what is responsive web design": [
            "Responsive design ensures your website looks great on all devices, from desktops to mobile phones.",
            "Responsive design adapts the layout and content to the screen size for better user experience."
        ],
        "how do i add a blog to my website": [
            "I can integrate a blog into your website for regular content updates.",
            "I can set up a blog for you using WordPress or a custom solution."
        ],
        "how do i protect my website from hackers": [
            "I implement security best practices, including HTTPS, encryption, and regular software updates.",
            "Security measures like SSL/TLS, firewalls, and regular updates will protect your website from threats."
        ],
        "what is seo and do you offer seo services": [
            "SEO (Search Engine Optimization) helps your website rank higher on search engines like Google.",
            "Yes, I offer SEO services to help improve your website's visibility on search engines."
        ],
        "can you create a mobile app for my website": [
            "Yes, I can create a mobile app that integrates with your website for better user experience.",
            "I can develop a mobile app that mirrors your website's functionality and design."
        ],
        "do you build custom web applications": [
            "Yes, I specialize in custom web apps tailored to your business needs.",
            "I build custom web applications for all types of businesses and organizations."
        ],
        "what is the cost of a website": [
            "The cost depends on the complexity and features of the website. Let's discuss your needs!",
            "Website costs vary, but I offer affordable options based on your requirements."
        ],
        "how do i set up payments on my website": [
            "I can integrate payment gateways like Stripe, PayPal, or MTN MoMo on your website.",
            "Payment integrations include secure methods like Stripe, PayPal, and bank transfer options."
        ],
        "can i track orders on my website": [
            "Yes, I can implement order tracking systems for your e-commerce site.",
            "I can add an order tracking feature to your website for better customer experience."
        ],
        "what is the difference between a website and a web app": [
            "A website is typically static, while a web app is dynamic and interactive with features like user logins.",
            "Web apps are more interactive and offer more functionality than traditional websites."
        ],
        "do you offer free consultations": [
            "Yes, I offer free initial consultations to discuss your project and understand your needs.",
            "I provide a free consultation where we can talk about your project goals and options."
        ],
        "how do i update my website's content": [
            "I can teach you how to use the content management system (CMS), or I can do it for you.",
            "I provide CMS-based solutions for easy content updates, or I can make changes for you."
        ],
        "can you help with social media integration": [
            "Yes, I can integrate your website with social media platforms for sharing and engagement.",
            "I can connect your website to social media accounts to help boost your brand's visibility."
        ],
        "how can i protect my data on the website": [
            "I use secure protocols like SSL, data encryption, and follow best security practices.",
            "Data protection is a priority; I implement SSL, encryption, and security measures to safeguard your information."
        ]
    };

    // Suggest how to ask if the bot doesn’t understand
    function getSmartResponse(userInput) {
        userInput = userInput.toLowerCase();
        for (let key in faqs) {
            if (userInput.includes(key)) {
                return faqs[key][Math.floor(Math.random() * faqs[key].length)];
            }
        }
        return "I didn't quite get that. Try asking something like: 'How do I set up payments?'.";
    }

    // Function to send messages
    function sendMessage() {
        const userText = faqInput.value.trim();
        if (!userText) return;

        let userMessage = document.createElement("p");
        userMessage.classList.add("user-text");
        userMessage.innerHTML = `<span>${userText}</span>`;
        faqChatbox.appendChild(userMessage);

        let botMessage = document.createElement("p");
        botMessage.classList.add("bot-text");

        if (userText.toLowerCase().includes("thank you")) {
            botMessage.innerHTML = `<span>You're welcome! Have a great day. 😊</span>`;
            setTimeout(() => {
                sendChatToWhatsApp();
                clearChat();
            }, 2000);
        } else {
            botMessage.innerHTML = `<span>${getSmartResponse(userText)}</span>`;
        }

        setTimeout(() => {
            faqChatbox.appendChild(botMessage);
            faqChatbox.scrollTop = faqChatbox.scrollHeight;
        }, 500);

        faqInput.value = "";
    }

    // WhatsApp Integration: Send Chat Log
    function sendChatToWhatsApp() {
        let chatLog = "";
        document.querySelectorAll("#faq-chatbox p").forEach(msg => {
            chatLog += msg.innerText + "\n";
        });

        const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp number
        const encodedMessage = encodeURIComponent(chatLog);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    }

    // Clear chat after sending to WhatsApp
    function clearChat() {
        setTimeout(() => {
            faqChatbox.innerHTML = "";
        }, 3000);
    }

    // Button click to send
    faqSend.addEventListener("click", function () {
        sendMessage();
    });

    // Pressing Enter to send
    faqInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Ensure input is interactive
    faqInput.removeAttribute("disabled");
    faqButton.style.display = "block";

    // FAQ Bot Popup Show/Hide
    faqButton.addEventListener("click", function () {
        faqPopup.style.display = "flex";
    });

    faqClose.addEventListener("click", function () {
        faqPopup.style.display = "none";
    });
});