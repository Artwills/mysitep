// WhatsApp Integration Configuration
// **IMPORTANT:** Replace '256770000000' with Art Technologies Uganda's actual WhatsApp number.
const WHATSAPP_NUMBER = '256706100796'; 
const DEFAULT_MESSAGE = "Hello Art Technologies Uganda, I saw your website and I'd like to discuss a custom website for my small business. Can we chat?";

/**
 * Generates the full WhatsApp URL with the pre-filled message.
 * @returns {string} The WhatsApp chat URL.
 */
function generateWhatsAppLink() {
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Functionality executed once the page content is loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. WhatsApp Link Setup ---
    const waURL = generateWhatsAppLink();
    
    // Select all elements that need the WhatsApp URL
    const whatsappLinkHero = document.getElementById('whatsapp-link');
    const whatsappLinkFooter = document.getElementById('footer-whatsapp-link');
    const floatingWhatsappLink = document.getElementById('floating-whatsapp');

    // Apply the generated URL
    if (whatsappLinkHero) whatsappLinkHero.setAttribute('href', waURL);
    if (whatsappLinkFooter) whatsappLinkFooter.setAttribute('href', waURL);
    if (floatingWhatsappLink) floatingWhatsappLink.setAttribute('href', waURL);

    // --- 2. Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksContainer = document.querySelector("#header nav ul.nav-links"); 

    if (menuToggle && navLinksContainer) {
      menuToggle.addEventListener("click", () => {
        // Toggle the active class to show/hide the menu
        navLinksContainer.classList.toggle("active"); 
        menuToggle.classList.toggle("active");

        // Update ARIA attribute for accessibility
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
      });
    }

    // --- 3. Smooth Scroll Logic ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
});
