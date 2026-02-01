// EDITABLE CONFIGURATION
// All portfolio content is configured here.
// You can safely edit this object without touching the logic below.

const CONFIG = {
  // Personal Information
  personalInfo: {
    name: "Shreyash Sayankar",
    title: "Senior Construction Project Manager & Estimator",
    email: "shreyashrsayankar@gmail.com",
    phone: "(202) 427-1674",
    address: "Baltimore, Maryland, USA",
    bio:
      "Senior construction project manager and estimator with extensive experience delivering high-profile K-12 schools, healthcare facilities, government buildings, hospitality, and residential projects. " +
      "Proven track record leading multi-million-dollar projects in active environments while maintaining quality, safety, schedule, and client satisfaction.",
    experience: "10+",
    projectsCompleted: 22,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shreyash-sayankar-cmit/",
      twitter: "",
      instagram: ""
    }
  },

  // Project Portfolio
  // Featured projects from your Excel list.
  // Each project can have multiple images; use any construction images or placeholders.
  projects: [
    {
      id: 1,
      title: "Truesdell Elementary School",
      description:
        "Recently completed K-8 school in Washington, DC, consisting of one existing and two new buildings. " +
        "Scope included interior and exterior wall framing, insulation, drywall hanging and finishing, acoustic ceilings, specialty turf panel ceilings, K-13 spray foam insulation, wood ceilings, and wood fiber acoustic panels. " +
        "DCI also executed the exterior metal panels and masonry scope.",
      client: "District of Columbia Public Schools / DCI",
      completionDate: "2025",
      projectType: "Educational",
      value: "5.3 million",
      duration: "Project Manager · 2024–2025",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplxprojectsearch/images254d1ea49e57a22d78119979422b6a9bf0a01303.png"
      ]
    },
    {
      id: 2,
      title: "School Without Walls",
      description:
        "Award‑winning net‑zero high school in Washington, DC, combining one existing building, a partial extension, and a new structure. " +
        "Scope included interior and exterior wall framing, insulation, drywall, acoustic and wood ceilings, specialty turf ceilings, plaster restoration, acoustic wall panels, expansion joints, and level‑5 finishes for artwork, along with doors, frames, and hardware.",
      client: "District of Columbia Public Schools / DCI",
      completionDate: "2024",
      projectType: "Educational · Net‑Zero",
      value: "4.3 million",
      duration: "Project Manager · 2023–2024",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplxprojectsearch/imageseb600c1433b789b15af8366220169377d7cfc67e.png"
      ]
    },
    {
      id: 3,
      title: "Dorothy Height Elementary School",
      description:
        "Multiple award‑winning K‑8 school in Washington, DC, delivered across two existing buildings and one new building. " +
        "Scope included interior and exterior wall framing, insulation, drywall hanging and finishing, acoustic ceilings, specialty turf ceilings, deck spray foam insulation, acoustic wall panels, expansion joints, and level‑5 artwork finishes, as well as doors, frames, hardware, and restroom accessories.",
      client: "District of Columbia Public Schools / DCI",
      completionDate: "2024",
      projectType: "Educational",
      value: "3.5 million",
      duration: "Project Manager · 2023–2024",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplxprojectsearch/images4f6a42322022539475488d6f9e81262c7c50cc98.png"
      ]
    },
    {
      id: 4,
      title: "Tubman Elementary School",
      description:
        "Active ground‑up expansion project delivering three new buildings for an existing school. " +
        "Scope includes interior and exterior wall framing, insulation, drywall hanging and finishing, specialty wood ceiling panels, and turf wall panels.",
      client: "District of Columbia Public Schools / DCI",
      completionDate: "Ongoing · 2025–2026",
      projectType: "Educational",
      value: "3.1 million",
      duration: "Sr. Project Manager · 2025–2026",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplxprojectsearch/images04e1a92d6d0bb7fe405e4fadad51881600f5ecca.png"
      ]
    },
    {
      id: 5,
      title: "MacArthur High School",
      description:
        "Expansion and renovation of an active high school campus. " +
        "Scope includes interior and exterior framing, insulation, drywall hanging and finishing, and specialty wall and ceiling panels in occupied spaces.",
      client: "District of Columbia Public Schools / DCI",
      completionDate: "Ongoing · 2025–2026",
      projectType: "Educational · Renovation & Expansion",
      value: "1.5 million",
      duration: "Sr. Project Manager · 2025–2026",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplxprojectsearch/images4f0e59d189b6a79620812f2102ed74eb6e0b6ae7.png"
      ]
    },
    {
      id: 6,
      title: "Banneker High School",
      description:
        "Premium high school project in Washington, DC. " +
        "Scope included installation of interior and exterior framing, insulation, drywall, and finishing, as well as wood ceilings and wall panels, turf ceiling panels, column covers, wall protection, specialty acoustic ceilings, doors, frames, hardware, and toilet accessories.",
      client: "DC Public Schools / DCI",
      completionDate: "2021",
      projectType: "Educational",
      value: "7.5 million",
      duration: "Assistant Project Manager · 2020–2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755102019/pplxprojectsearch/imagesc40cafc1f1282afb618ac1e55251369e2e4672cd.png"
      ]
    },
    {
      id: 7,
      title: "Capitol Jewish Museum",
      description:
        "Restoration of a historic synagogue and construction of a modern four‑story museum extension. " +
        "Scope included restoration with new walls and wood ceilings in the synagogue and full interior/exterior work for the extension: framing, insulation, drywall, wood and acoustic ceilings, panels, deck insulation, doors, frames, hardware, and restroom fixtures.",
      client: "Capitol Jewish Museum / DCI",
      completionDate: "2023",
      projectType: "Museum · Historic Restoration",
      value: "1.1 million",
      duration: "Project Manager · 2021–2023",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplxprojectsearch/images141822209d0e92fbdbfd85edb3d90aced1fc40aa.png"
      ]
    },
    {
      id: 8,
      title: "MedStar Hospital – Operating Rooms",
      description:
        "Highly coordinated hospital project executed during peak COVID‑19 in an operational facility. " +
        "Scope included LED‑lined drywall assemblies at the perimeter of operating rooms, interior wall framing, insulation, drywall hanging and finishing, and specialized acoustic ceiling panels.",
      client: "MedStar Hospital / DCI",
      completionDate: "2021",
      projectType: "Healthcare · Renovation",
      value: "225k",
      duration: "Project Manager · 2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplxprojectsearch/images505163f56f412b5a88568e0ce40ece1a571d5a6f.png"
      ]
    },
    {
      id: 9,
      title: "GSA Renovation – Social Security Administration",
      description:
        "Renovation of a 90,000 sq. ft. Social Security Administration building and cafeteria during the COVID‑19 pandemic, requiring level‑4 security clearances. " +
        "Scope included interior wall framing, insulation, drywall installation and finishing, metal panel ceilings, acoustic ceilings, stair tower walls, column covers, expansion joints, and specialty acoustic panels.",
      client: "GSA / Social Security Administration / DCI",
      completionDate: "2022",
      projectType: "Government · Renovation",
      value: "3.5 million",
      duration: "Project Manager · 2021–2022",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplxprojectsearch/images198c43022b56885c07c69741d6949c454f1a1b88.png"
      ]
    },
    {
      id: 10,
      title: "Hood College Dorm",
      description:
        "New dormitory facility for college students in Frederick, MD. " +
        "Scope included roof decking, interior and exterior framing, interior and exterior drywall hanging, insulation and finishing, acoustical ceilings, exterior PVC panels, wood ceilings, exterior fiber cement panels, and door frames and hardware.",
      client: "Hood College / Whiting‑Turner / DCI",
      completionDate: "2020",
      projectType: "Higher Education · Residential",
      value: "3.2 million",
      duration: "Assistant Project Manager · 2019–2020",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplxprojectsearch/images04e1a92d6d0bb7fe405e4fadad51881600f5ecca.png"
      ]
    }
  ],

  // Services Offered
  services: [
    {
      title: "Project Planning & Preconstruction",
      icon: "📋"
    },
    {
      title: "Construction Oversight & Field Coordination",
      icon: "🏗️"
    },
    {
      title: "Budgeting, Estimating & Cost Control",
      icon: "💰"
    },
    {
      title: "Schedule Management & Phasing",
      icon: "📆"
    },
    {
      title: "Quality Assurance & Closeout",
      icon: "✅"
    },
    {
      title: "Safety & Risk Management",
      icon: "🛡️"
    },
    {
      title: "Subcontractor & Trade Coordination",
      icon: "🤝"
    },
    {
      title: "Permitting & Regulatory Compliance",
      icon: "📑"
    },
    {
      title: "Sustainable & High‑Performance Buildings",
      icon: "🌿"
    },
    {
      title: "Client Communication & Reporting",
      icon: "📨"
    }
  ],

  // Skills and Certifications
  skills: [
    "Construction Project Management",
    "Estimating & Quantity Takeoff",
    "K‑12 & Higher Education Projects",
    "Healthcare & Hospital Renovations",
    "Government & Secure Facilities",
    "Residential & Multi‑Family",
    "Budgeting & Cost Control",
    "Scheduling & Phasing",
    "Contract Administration",
    "Change Order Management",
    "Subcontractor Coordination",
    "Quality Control & Punchlists",
    "Safety Management",
    "Stakeholder Communication",
    "AutoCAD & Construction Software",
    "Building Codes & Regulations"
  ]
};

// APPLICATION CODE
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.loadConfiguration();
    this.setupEventListeners();
    this.setupSmoothScrolling();
    this.setupNavbarScroll();
  }

  loadConfiguration() {
    this.loadPersonalInfo();
    this.loadProjects();
    this.loadServices();
    this.loadSkills();
  }

  loadPersonalInfo() {
    const personalInfo = CONFIG.personalInfo;

    // Hero section
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const heroDescription = document.getElementById("hero-description");
    const experienceYears = document.getElementById("experience-years");
    const projectsCompleted = document.getElementById("projects-completed");

    if (heroTitle) heroTitle.textContent = personalInfo.name;
    if (heroSubtitle) heroSubtitle.textContent = personalInfo.title;
    if (heroDescription) heroDescription.textContent = personalInfo.bio;
    if (experienceYears) experienceYears.textContent = personalInfo.experience;
    if (projectsCompleted)
      projectsCompleted.textContent = personalInfo.projectsCompleted;

    // About section
    const aboutBio = document.getElementById("about-bio");
    if (aboutBio) aboutBio.textContent = personalInfo.bio;

    // Contact section
    const contactEmail = document.getElementById("contact-email");
    const contactPhone = document.getElementById("contact-phone");
    const contactAddress = document.getElementById("contact-address");

    if (contactEmail) contactEmail.textContent = personalInfo.email;
    if (contactPhone) contactPhone.textContent = personalInfo.phone;
    if (contactAddress) contactAddress.textContent = personalInfo.address;

    // Footer
    const footerName = document.getElementById("footer-name");
    const footerTitle = document.getElementById("footer-title");
    const footerEmail = document.getElementById("footer-email");

    if (footerName) footerName.textContent = personalInfo.name;
    if (footerTitle) footerTitle.textContent = personalInfo.title;
    if (footerEmail) footerEmail.textContent = personalInfo.email;

    // Social links
    const linkedinLink = document.getElementById("linkedin-link");
    const twitterLink = document.getElementById("twitter-link");
    const instagramLink = document.getElementById("instagram-link");

    if (linkedinLink && personalInfo.socialLinks.linkedin) {
      linkedinLink.href = personalInfo.socialLinks.linkedin;
    }
    if (twitterLink && personalInfo.socialLinks.twitter) {
      twitterLink.href = personalInfo.socialLinks.twitter;
    }
    if (instagramLink && personalInfo.socialLinks.instagram) {
      instagramLink.href = personalInfo.socialLinks.instagram;
    }
  }

  loadProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    if (!projectsGrid) return;

    projectsGrid.innerHTML = "";

    CONFIG.projects.forEach((project) => {
      const projectCard = this.createProjectCard(project);
      projectsGrid.appendChild(projectCard);
    });
  }

  createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project-card";

    const imageSrc =
      project.images && project.images.length > 0
        ? project.images[0]
        : "https://via.placeholder.com/800x450?text=Project+Image";

    card.innerHTML = `
      <img src="${imageSrc}" alt="${project.title}" class="project-image" />
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-meta">
          <span>${project.client || ""}</span>
          <span>${project.completionDate || ""}</span>
          <span>${project.value || ""}</span>
        </div>
        <p class="project-description">${project.description}</p>
        <span class="project-type">${project.projectType || ""}</span>
      </div>
    `;

    card.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.openProjectModal(project);
    });

    return card;
  }

  loadServices() {
    const servicesGrid = document.getElementById("services-grid");
    if (!servicesGrid) return;

    servicesGrid.innerHTML = "";

    CONFIG.services.forEach((service) => {
      const serviceItem = document.createElement("div");
      serviceItem.className = "service-item";

      const icon = service.icon || "✔";

      serviceItem.innerHTML = `
        <div class="service-icon">${icon}</div>
        <h3 class="service-title">${service.title}</h3>
      `;

      servicesGrid.appendChild(serviceItem);
    });
  }

  loadSkills() {
    const skillsGrid = document.getElementById("skills-grid");
    if (!skillsGrid) return;

    skillsGrid.innerHTML = "";

    CONFIG.skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";
      skillItem.textContent = skill;
      skillsGrid.appendChild(skillItem);
    });
  }

  setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", (e) => {
        e.preventDefault();
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      // Close mobile menu when clicking on nav links
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          navToggle.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });
    }

    // Modal close functionality
    const modal = document.getElementById("project-modal");
    const modalClose = document.querySelector(".modal-close");
    const modalOverlay = document.querySelector(".modal-overlay");

    if (modalClose) {
      modalClose.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }

    // Contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => this.handleFormSubmit(e));
    }

    // Escape key to close modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });
  }

  setupSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#" || targetId === "#0") return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();

        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition =
          targetElement.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth"
        });
      });
    });
  }

  openProjectModal(project) {
    const modal = document.getElementById("project-modal");
    if (!modal) return;

    // Populate modal content
    const titleEl = document.getElementById("modal-title");
    const descEl = document.getElementById("modal-description");
    const clientEl = document.getElementById("modal-client");
    const completionEl = document.getElementById("modal-completion");
    const typeEl = document.getElementById("modal-type");
    const valueEl = document.getElementById("modal-value");
    const durationEl = document.getElementById("modal-duration");

    if (titleEl) titleEl.textContent = project.title;
    if (descEl) descEl.textContent = project.description;
    if (clientEl) clientEl.textContent = project.client || "";
    if (completionEl) completionEl.textContent = project.completionDate || "";
    if (typeEl) typeEl.textContent = project.projectType || "";
    if (valueEl) valueEl.textContent = project.value || "";
    if (durationEl) durationEl.textContent = project.duration || "";

    // Set main image
    const mainImage = document.getElementById("modal-main-image");
    const mainSrc =
      project.images && project.images.length > 0
        ? project.images[0]
        : "https://via.placeholder.com/800x450?text=Project+Image";

    if (mainImage) {
      mainImage.src = mainSrc;
      mainImage.alt = project.title;
    }

    // Create thumbnails
    const thumbnailsContainer = document.getElementById("modal-thumbnails");
    if (thumbnailsContainer) {
      thumbnailsContainer.innerHTML = "";
      if (project.images && project.images.length > 0) {
        project.images.forEach((image, index) => {
          const thumbnail = document.createElement("img");
          thumbnail.src = image;
          thumbnail.alt = `${project.title} - Image ${index + 1}`;
          thumbnail.className = "thumbnail" + (index === 0 ? " active" : "");
          thumbnail.addEventListener("click", (e) => {
            e.preventDefault();
            if (mainImage) {
              mainImage.src = image;
              mainImage.alt = `${project.title} - Image ${index + 1}`;
            }
            document
              .querySelectorAll(".thumbnail")
              .forEach((t) => t.classList.remove("active"));
            thumbnail.classList.add("active");
          });
          thumbnailsContainer.appendChild(thumbnail);
        });
      }
    }

    // Show modal
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    const modal = document.getElementById("project-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.style.display = "none";
    }
    document.body.style.overflow = "";
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.clearFormErrors();

    const formData = new FormData(e.target);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const subject = (formData.get("subject") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    let hasErrors = false;

    // Validate required fields
    if (!name) {
      this.showFieldError("name", "Name is required.");
      hasErrors = true;
    }

    if (!email) {
      this.showFieldError("email", "Email is required.");
      hasErrors = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.showFieldError("email", "Please enter a valid email address.");
        hasErrors = true;
      }
    }

    if (!subject) {
      this.showFieldError("subject", "Subject is required.");
      hasErrors = true;
    }

    if (!message) {
      this.showFieldError("message", "Message is required.");
      hasErrors = true;
    }

    if (hasErrors) return;

    // Simulate form submission success
    this.showSuccessMessage(
      `Thank you, ${name}! Your message has been sent. I will get back to you soon.`
    );
    e.target.reset();
  }

  showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    // Remove existing error
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    field.classList.add("error");

    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    field.parentNode.appendChild(errorDiv);
  }

  clearFormErrors() {
    document
      .querySelectorAll(".form-control.error")
      .forEach((field) => field.classList.remove("error"));
    document
      .querySelectorAll(".error-message")
      .forEach((error) => error.remove());

    const existingSuccess = document.querySelector(".success-message");
    if (existingSuccess && existingSuccess.parentNode) {
      existingSuccess.parentNode.removeChild(existingSuccess);
    }
  }

  showSuccessMessage(message) {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.textContent = message;

    form.insertBefore(successDiv, form.firstChild);

    setTimeout(() => {
      if (successDiv && successDiv.parentNode) {
        successDiv.parentNode.removeChild(successDiv);
      }
    }, 5000);
  }

  setupNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "none";
      }
    });
  }
}

// Initialize the application
const app = new PortfolioApp();

// Export CONFIG for debugging
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
  window.PortfolioApp = app;
}
