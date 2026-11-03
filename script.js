const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

if (menuToggle instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

const interestField = document.querySelector("#interest");
const contactSection = document.querySelector("#contact");
const productGrid = document.querySelector(".product-grid");

const products = [
  { name: "Minor Surgery Kit", category: "general", description: "For minor procedures" },
  { name: "Major Surgery Kit", category: "general", description: "For major procedures" },
  { name: "General Surgery Instrument Set", category: "general", description: "Everyday surgical instruments" },
  { name: "Dressing Kit", category: "general", description: "Dressing and wound care" },
  { name: "Suturing Kit", category: "general", description: "Suturing essentials" },
  { name: "Wound Care Kit", category: "general", description: "Wound care essentials" },
  { name: "First Aid Surgical Kit", category: "general", description: "First aid essentials" },
  { name: "Dissection Kit", category: "general", description: "Dissection instruments" },
  { name: "Sterilization Kit", category: "general", description: "Sterilization essentials" },
  { name: "Emergency Surgical Kit", category: "general", description: "Emergency procedure essentials" },
  { name: "Dental Surgical Kit", category: "specialized", description: "Dental procedures" },
  { name: "Orthopedic Surgery Kit", category: "specialized", description: "Orthopedic procedures" },
  { name: "Gynecology Surgical Kit", category: "specialized", description: "Gynecology procedures" },
  { name: "ENT Surgical Kit", category: "specialized", description: "Ear, nose & throat procedures" },
  { name: "Ophthalmic Surgical Kit", category: "specialized", description: "Ophthalmic procedures" },
  { name: "Laparoscopic Surgery Kit", category: "specialized", description: "Laparoscopic procedures" },
  { name: "C-Section Surgical Kit", category: "specialized", description: "Cesarean procedure essentials" },
  { name: "Urology Surgical Kit", category: "specialized", description: "Urology procedures" },
  { name: "Cardiovascular Surgery Kit", category: "specialized", description: "Cardiovascular procedures" },
  { name: "Veterinary Surgical Kit", category: "specialized", description: "Veterinary procedures" },
  { name: "Premium Surgical Instrument Set", category: "professional", description: "Premium instrument selection" },
  { name: "Stainless Steel Surgical Kit", category: "professional", description: "Stainless steel instruments" },
  { name: "Complete Medical Surgery Set", category: "professional", description: "Complete instrument selection" },
  { name: "Professional Operation Theatre Kit", category: "professional", description: "Operation theatre essentials" },
  { name: "Reusable Surgical Instrument Kit", category: "professional", description: "Reusable instruments" },
];

const productPhotos = {
  "Minor Surgery Kit": { src: "assets/msk1.jpg", alt: "Minor surgery instrument kit in a red case" },
  "Major Surgery Kit": { src: "assets/majorsk1.jpg", alt: "Major surgery instrument kit arranged in a red case" },
  "General Surgery Instrument Set": { src: "assets/gsis1.jpg", alt: "General surgery instruments arranged on a white background" },
  "Dressing Kit": { src: "assets/dsk1.jpg", alt: "Surgical dressing kit and labeled contents" },
  "Suturing Kit": { src: "assets/sugrk1.jpg", alt: "Suturing instruments, practice pad, and supplies" },
  "Wound Care Kit": { src: "assets/22.jpg", alt: "Surgical instruments organized in a red kit" },
  "First Aid Surgical Kit": { src: "assets/fak1.jpg", alt: "Open first-aid kit with medical supplies and instruments" },
  "Dissection Kit": { src: "assets/99.jpg", alt: "Selection of dissection and surgical instruments" },
  "Sterilization Kit": { src: "assets/d111.jpg", alt: "Surgical instruments and a sterilization tray" },
  "Emergency Surgical Kit": { src: "assets/22.jpg", alt: "Surgical instruments organized in a red kit" },
  "Dental Surgical Kit": { src: "assets/d11.jpg", alt: "Dental surgical instruments arranged in a kit" },
  "Orthopedic Surgery Kit": { src: "assets/22.jpg", alt: "Surgical instruments arranged in a red case" },
  "Gynecology Surgical Kit": { src: "assets/g11.jpg", alt: "Gynecology surgical instruments in a red case" },
  "ENT Surgical Kit": { src: "assets/ent11.jpg", alt: "Ear, nose, and throat surgical instruments" },
  "Ophthalmic Surgical Kit": { src: "assets/osk11.jpg", alt: "Ophthalmic surgical instruments arranged on a white background" },
  "Laparoscopic Surgery Kit": { src: "assets/download.jpg", alt: "Laparoscopic surgery instruments" },
  "C-Section Surgical Kit": { src: "assets/csk.jpg", alt: "C-section surgical instruments arranged in a set" },
  "Urology Surgical Kit": { src: "assets/Urology Surgical Kit.jpg", alt: "Urology surgical instruments" },
  "Cardiovascular Surgery Kit": { src: "assets/Cardiovascular Surgery Kit.jpg", alt: "Cardiovascular surgical instruments" },
  "Veterinary Surgical Kit": { src: "assets/Veterinary Surgical Kit.jpg", alt: "Veterinary surgical instrument set" },
  "Premium Surgical Instrument Set": { src: "assets/99.jpg", alt: "Premium selection of surgical instruments" },
  "Stainless Steel Surgical Kit": { src: "assets/22.jpg", alt: "Stainless steel instruments arranged in a red case" },
  "Complete Medical Surgery Set": { src: "assets/d111.jpg", alt: "Complete medical instrument set and sterilization tray" },
  "Professional Operation Theatre Kit": { src: "assets/majorsk1.jpg", alt: "Operation theatre instruments organized in a surgical kit" },
  "Reusable Surgical Instrument Kit": { src: "assets/gsis1.jpg", alt: "Reusable surgical instrument set" },
};

function createProductCard(product) {
  const photo = productPhotos[product.name];
  if (!photo) {
    throw new Error(`Missing product photo for ${product.name}`);
  }

  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.category = product.category;

  const imageContainer = document.createElement("div");
  imageContainer.className = "product-image";

  const tag = document.createElement("span");
  tag.className = "product-tag";
  tag.textContent = product.category === "general"
    ? "SURGERY KIT"
    : product.category === "specialized"
      ? "SPECIALIZED KIT"
      : "PROFESSIONAL SET";

  const image = document.createElement("img");
  image.src = photo.src;
  image.alt = photo.alt;
  image.loading = "lazy";

  const brandMark = document.createElement("img");
  brandMark.className = "product-brand-mark";
  brandMark.src = "assets/surgical-cottage-logo.jpeg";
  brandMark.alt = "Surgical Cottage";
  brandMark.loading = "lazy";

  const details = document.createElement("div");
  details.className = "product-details";
  const text = document.createElement("div");
  const description = document.createElement("p");
  description.className = "product-category";
  description.textContent = product.description;
  const title = document.createElement("h3");
  title.textContent = product.name;
  text.append(description, title);

  const enquiryButton = document.createElement("button");
  enquiryButton.className = "quote-button";
  enquiryButton.type = "button";
  enquiryButton.dataset.product = product.name;
  enquiryButton.setAttribute("aria-label", `Ask about ${product.name}`);
  enquiryButton.textContent = "↗";
  details.append(text, enquiryButton);
  imageContainer.append(tag, image, brandMark);
  card.append(imageContainer, details);

  return card;
}

if (productGrid instanceof HTMLElement) {
  const productCards = products.map(createProductCard);
  productGrid.append(...productCards);

  document.querySelectorAll(".product-filter").forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
      const selectedFilter = filterButton.getAttribute("data-filter");
      if (!selectedFilter) {
        return;
      }

      document.querySelectorAll(".product-filter").forEach((button) => {
        const isSelected = button === filterButton;
        button.classList.toggle("is-active", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
      });

      productCards.forEach((card) => {
        card.hidden = selectedFilter !== "all" && card.dataset.category !== selectedFilter;
      });
    });
  });
}

if (interestField instanceof HTMLInputElement && contactSection instanceof HTMLElement) {
  document.querySelectorAll(".quote-button").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.getAttribute("data-product");
      if (!product) {
        return;
      }

      interestField.value = product;
      contactSection.scrollIntoView({ behavior: "smooth" });
      interestField.focus({ preventScroll: true });
    });
  });
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const whatsappFormLink = document.querySelector("#whatsapp-form-link");

if (
  contactForm instanceof HTMLFormElement &&
  formStatus instanceof HTMLElement &&
  whatsappFormLink instanceof HTMLAnchorElement
) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
      "Hello Surgical Cottage, I'd like to make an enquiry.",
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      formData.get("interest") ? `Product: ${formData.get("interest")}` : "",
      `Message: ${formData.get("message")}`,
    ].filter(Boolean).join("\n");
    const whatsappUrl = `https://wa.me/923426483104?text=${encodeURIComponent(message)}`;

    whatsappFormLink.href = whatsappUrl;
    whatsappFormLink.hidden = false;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    formStatus.textContent = "Your enquiry is ready in WhatsApp. Send the message there to complete it.";
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear instanceof HTMLElement) {
  currentYear.textContent = String(new Date().getFullYear());
}
