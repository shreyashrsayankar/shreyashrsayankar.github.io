// ========================================
// EDITABLE CONFIGURATION
// ========================================
// Edit the configuration below to customize all content on the website

const CONFIG = {
  // Personal Information
  personalInfo: {
    name: "Shreyash Sayankar",
    title: "Senior Construction Project Manager",
    email: "shreyashrsayankar@gmail.com",
    phone: "(202) 427-1674",
    address: "Washington, DC, USA",
    bio: "Experienced construction project manager with over 15 years in commercial and residential construction. Specializing in large-scale developments, renovation projects, and sustainable building practices.",
    experience: "10+ Years",
    projectsCompleted: "17+",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shreyash-sayankar-cmit/"
    }
  },

  // Project Portfolio
  projects: [
    {
      id: 1,
      title: "Hood College Dorm",
      description: "A dormitory facility for college students in Frederick, MD. Completed scope included roof decking, interior & exterior framing, drywall hanging, insulation, acoustical ceiling installation, exterior PVC and fiber cement panels, and door/frame hardware installation.",
      client: "Hood College",
      completionDate: "2020",
      projectType: "Dorms",
      value: "$3.2M",
      duration: "2019-2020",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/eb600c1433b789b15af8366220169377d7cfc67e.png"
      ]
    },
    {
      id: 2,
      title: "Cardinal Elementary School",
      description: "A premium elementary school project in Arlington, VA. Scope included interior & exterior framing, drywall, acoustical ceilings, specialty panels, and door/frame installation.",
      client: "City School District",
      completionDate: "2020",
      projectType: "Educational",
      value: "$3.1M",
      duration: "2019-2020",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/254d1ea49e57a22d78119979422b6a9bf0a01303.png"
      ]
    },
    {
      id: 3,
      title: "WMATA HQ",
      description: "New headquarters for WMATA in Washington, DC. Scope included interior/exterior framing, special build-out, acoustical ceilings, and finishes.",
      client: "WMATA",
      completionDate: "2021",
      projectType: "Government",
      value: "$4.0M",
      duration: "2020-2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/4f0e59d189b6a79620812f2102ed74eb6e0b6ae7.png"
      ]
    },
    {
      id: 4,
      title: "Benjamin Banneker HS",
      description: "Major high school project including installation of interior & exterior framing, drywall, acoustical ceilings, and specialty wall panels.",
      client: "DCPS",
      completionDate: "2021",
      projectType: "Educational",
      value: "$7.5M",
      duration: "2020-2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/d61e91801e80cca5badf843388b85435ebb23b4e.png"
      ]
    },
    {
      id: 5,
      title: "The Wink Hotel",
      description: "Renovation project for a boutique hotel in Washington, DC. Work included wall framing, insulation, drywall finishing and millwork installation.",
      client: "Wink Hotels",
      completionDate: "2020",
      projectType: "Hospitality",
      value: "$2.1M",
      duration: "2019-2020",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/505163f56f412b5a88568e0ce40ece1a571d5a6f.png"
      ]
    },
    {
      id: 6,
      title: "750 Metro Club",
      description: "Renovation and expansion of the top floor and rooftop club. Scope included framing, finishes, and installation of an updated kitchen and service areas.",
      client: "Private Club",
      completionDate: "2020",
      projectType: "Recreation",
      value: "$1.2M",
      duration: "2019-2020",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/141822209d0e92fbdbfd85edb3d90aced1fc40aa.png"
      ]
    },
    {
      id: 7,
      title: "Capitol Jewish Museum",
      description: "Restoration of a historic synagogue building and transformation into a museum including structural repairs, finishes and historic restoration work.",
      client: "Capitol Jewish Museum",
      completionDate: "2021",
      projectType: "Museum",
      value: "$1.1M",
      duration: "2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755102019/pplx_project_search_images/c40cafc1f1282afb618ac1e55251369e2e4672cd.png"
      ]
    },
    {
      id: 8,
      title: "MedStar Hospital Operations Rooms",
      description: "Hospital operations room renovation including wall assemblies, medical finishes and equipment coordination while maintaining operations.",
      client: "MedStar Health",
      completionDate: "2021",
      projectType: "Healthcare",
      value: "$225k",
      duration: "2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/04e1a92d6d0bb7fe405e4fadad51881600f5ecca.png"
      ]
    },
    {
      id: 9,
      title: "GSA Renovation",
      description: "Renovation for a government office building. Work included interior demolition, framing, partitions, finishes and security upgrades.",
      client: "GSA",
      completionDate: "2022",
      projectType: "Government",
      value: "$3.5M",
      duration: "2021-2022",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/eb600c1433b789b15af8366220169377d7cfc67e.png"
      ]
    },
    {
      id: 10,
      title: "School Without Walls",
      description: "Multi-phase renovation and additions to an award-winning school, including classroom build-outs, acoustical systems and finishes.",
      client: "District Schools",
      completionDate: "2021",
      projectType: "Educational",
      value: "$4.3M",
      duration: "2019-2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/198c43022b56885c07c69741d6949c454f1a1b88.png"
      ]
    },
    {
      id: 11,
      title: "Dorothy Heights ES",
      description: "Renovation and expansion work including new classrooms, HVAC coordination, finishes, and exterior work.",
      client: "District Schools",
      completionDate: "2024",
      projectType: "Educational",
      value: "$3.5M",
      duration: "2022-2024",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/4f0e59d189b6a79620812f2102ed74eb6e0b6ae7.png"
      ]
    },
    {
      id: 12,
      title: "Truesdell ES",
      description: "Comprehensive renovation project with interior finishes, acoustical ceilings and modern classroom build-outs.",
      client: "District Schools",
      completionDate: "2023",
      projectType: "Educational",
      value: "$3.3M",
      duration: "2020-2023",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/505163f56f412b5a88568e0ce40ece1a571d5a6f.png"
      ]
    },
    {
      id: 13,
      title: "Crescent @ Chevy Chase",
      description: "Premium condominium project including interior finishes, drywall, and specialty ceilings for residential units.",
      client: "Private Development",
      completionDate: "2023",
      projectType: "Condos",
      value: "$1.2M",
      duration: "2022-2023",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/141822209d0e92fbdbfd85edb3d90aced1fc40aa.png"
      ]
    },
    {
      id: 14,
      title: "Park Morton",
      description: "Comprehensive rehabilitation and new residential construction including framing, finishes and special detailing.",
      client: "Community Development",
      completionDate: "2025",
      projectType: "Residential",
      value: "$3.8M",
      duration: "2023-2025",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/d61e91801e80cca5badf843388b85435ebb23b4e.png"
      ]
    },
    {
      id: 15,
      title: "Howard University Renovation",
      description: "Minor but important structural repairs and attic truss work performed at Howard University campus building.",
      client: "Howard University",
      completionDate: "2024",
      projectType: "Educational",
      value: "$60k",
      duration: "2024",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/4f6a42322022539475488d6f9e81262c7c50cc98.png"
      ]
    },
    {
      id: 16,
      title: "Smothers ES",
      description: "Elementary school renovation with classroom upgrades, new finishes and systems improvements.",
      client: "District Schools",
      completionDate: "2021",
      projectType: "Educational",
      value: "$2.1M",
      duration: "2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/04e1a92d6d0bb7fe405e4fadad51881600f5ecca.png"
      ]
    },
    {
      id: 17,
      title: "Stead Park Recreation Center",
      description: "Recreation center renovation with multi-purpose rooms, demonstration kitchen and new mechanical systems.",
      client: "Parks & Rec",
      completionDate: "2021",
      projectType: "Recreation",
      value: "$850k",
      duration: "2021",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/eb600c1433b789b15af8366220169377d7cfc67e.png"
      ]
    },
    {
      id: 18,
      title: "Joy Evans Therapeutic Center",
      description: "Therapeutic center renovation with interior finishes, special framing and accessibility upgrades.",
      client: "Community Health",
      completionDate: "2022",
      projectType: "Healthcare",
      value: "$3.6M",
      duration: "2022",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/198c43022b56885c07c69741d6949c454f1a1b88.png"
      ]
    },
    {
      id: 19,
      title: "Tubman ES",
      description: "Ground-up and expanded school project including interior and exterior framing, finishing and specialty ceilings.",
      client: "District Schools",
      completionDate: "2026",
      projectType: "Educational",
      value: "$3.1M",
      duration: "2025-2026",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/505163f56f412b5a88568e0ce40ece1a571d5a6f.png"
      ]
    },
    {
      id: 20,
      title: "MacArthur HS",
      description: "High school renovation project with mechanical, finishes and structural upgrades.",
      client: "District Schools",
      completionDate: "2026",
      projectType: "Educational",
      value: "$1.5M",
      duration: "2025-2026",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913940/pplx_project_search_images/4f0e59d189b6a79620812f2102ed74eb6e0b6ae7.png"
      ]
    },
    {
      id: 21,
      title: "Harvard Ct",
      description: "Residential infill project with high-end finishes and exterior improvements.",
      client: "Private Developer",
      completionDate: "2027",
      projectType: "Residential",
      value: "$5.2M",
      duration: "2026-2027",
      images: [
        "https://pplx-res.cloudinary.com/image/upload/v1755913939/pplx_project_search_images/d61e91801e80cca5badf843388b85435ebb23b4e.png"
      ]
    }
  ],

  // Skill Offered
  Skills: [
    {
      title: "Project Planning & Management",
      icon: "📋"
    },
    {
      title: "Construction Oversight",
      icon: "🏗️"
    },
    {
      title: "Budget Management & Cost Control",
      icon: "💰"
    },
    {
      title: "Quality Assurance & Safety Management",
      icon: "✅"
    },
    {
      title: "Subcontractor Coordination",
      icon: "🤝"
    },
    {
      title: "Client Communication & Reporting",
      icon: "📞"
    },
    {
      title: "Permit & Regulatory Compliance",
      icon: "📄"
    },
    {
      title: "Risk Assessment & Mitigation",
      icon: "⚠️"
    },
    {
      title: "Sustainable Building Practices",
      icon: "🌱"
    },
    {
      title: "Post-Construction Support",
      icon: "🔧"
    }
  ],

  // Skills and Certifications
  skills: [
    "Project Management Professional (PMP)",
    "Construction Management",
    "AutoCAD & Project Software",
    "Building Codes & Regulations",
    "Contract Negotiation",
    "Risk Management",
    "Team Leadership",
    "Budget Planning",
    "Quality Control",
    "Safety Management"
  ]
};

// ========================================
// APPLICATION CODE
// ========================================

class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setup();
      });
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
    const { personalInfo } = CONFIG;
    
    // Hero section
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroDescription = document.getElementById('hero-description');
    const experienceYears = document.getElementById('experience-years');
    const projectsCompleted = document.getElementById('projects-completed');
    
    if (heroTitle) heroTitle.textContent = personalInfo.name;
    if (heroSubtitle) heroSubtitle.textContent = personalInfo.title;
    if (heroDescription) heroDescription.textContent = personalInfo.bio;
    if (experienceYears) experienceYears.textContent = personalInfo.experience;
    if (projectsCompleted) projectsCompleted.textContent = personalInfo.projectsCompleted;

    // About section
    const aboutBio = document.getElementById('about-bio');
    if (aboutBio) aboutBio.textContent = personalInfo.bio;

    // Contact section
    const contactEmail = document.getElementById('contact-email');
    const contactPhone = document.getElementById('contact-phone');
    const contactAddress = document.getElementById('contact-address');
    
    if (contactEmail) contactEmail.textContent = personalInfo.email;
    if (contactPhone) contactPhone.textContent = personalInfo.phone;
    if (contactAddress) contactAddress.textContent = personalInfo.address;

    // Footer
    const footerName = document.getElementById('footer-name');
    const footerTitle = document.getElementById('footer-title');
    const footerEmail = document.getElementById('footer-email');
    
    if (footerName) footerName.textContent = personalInfo.name;
    if (footerTitle) footerTitle.textContent = personalInfo.title;
    if (footerEmail) footerEmail.textContent = personalInfo.email;

    // Social links
    const linkedinLink = document.getElementById('linkedin-link');
    const twitterLink = document.getElementById('twitter-link');
    const instagramLink = document.getElementById('instagram-link');
    
    if (linkedinLink) linkedinLink.href = personalInfo.socialLinks.linkedin;
    if (twitterLink) twitterLink.href = personalInfo.socialLinks.twitter;
    if (instagramLink) instagramLink.href = personalInfo.socialLinks.instagram;

    // Contact/form settings
    // Replace FORM_ID with your Formspree form ID (e.g. 'mgebqwnk')
    // Example endpoint: "https://formspree.io/f/mgebqwnk"
    if (!CONFIG.contact) CONFIG.contact = {};
    CONFIG.contact.formspreeEndpoint = CONFIG.contact.formspreeEndpoint || "https://formspree.io/f/maqbvaqq";
  }

  loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';

    CONFIG.projects.forEach(project => {
      const projectCard = this.createProjectCard(project);
      projectsGrid.appendChild(projectCard);
    });
  }

  createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Build card using DOM methods to avoid unsafe innerHTML
    const img = document.createElement('img');
    img.src = (project.images && project.images[0]) ? project.images[0] : '';
    img.alt = project.title || 'Project image';
    img.className = 'project-image';
    card.appendChild(img);

    const info = document.createElement('div');
    info.className = 'project-info';

    const titleEl = document.createElement('h3');
    titleEl.className = 'project-title';
    titleEl.textContent = project.title || '';
    info.appendChild(titleEl);

    const metaDiv = document.createElement('div');
    metaDiv.className = 'project-meta';
    const clientSpan = document.createElement('span'); clientSpan.textContent = project.client || '';
    const dateSpan = document.createElement('span'); dateSpan.textContent = project.completionDate || '';
    const valueSpan = document.createElement('span'); valueSpan.textContent = project.value || '';
    metaDiv.appendChild(clientSpan);
    metaDiv.appendChild(dateSpan);
    metaDiv.appendChild(valueSpan);
    info.appendChild(metaDiv);

    const desc = document.createElement('p');
    desc.className = 'project-description';
    desc.textContent = project.description || '';
    info.appendChild(desc);

    const typeSpan = document.createElement('span');
    typeSpan.className = 'project-type';
    typeSpan.textContent = project.projectType || '';
    info.appendChild(typeSpan);

    card.appendChild(info);

    // Add click event listener
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.openProjectModal(project);
    });

    return card;
  }

  loadServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = '';

    CONFIG.services.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.className = 'service-item';

      const iconDiv = document.createElement('div');
      iconDiv.className = 'service-icon';
      iconDiv.textContent = service.icon || '';

      const titleEl = document.createElement('h3');
      titleEl.className = 'service-title';
      titleEl.textContent = service.title || '';

      serviceItem.appendChild(iconDiv);
      serviceItem.appendChild(titleEl);

      servicesGrid.appendChild(serviceItem);
    });
  }

  loadSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';

    CONFIG.skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      skillItem.textContent = skill;
      skillsGrid.appendChild(skillItem);
    });
  }

  setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navToggle && navMenu) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    });

    // Modal close functionality
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (modalClose) {
      modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }
    
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  setupSmoothScrolling() {
    // Setup smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navbar = document.querySelector('.navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20;
          
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }
      });
    });
  }

  openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    // Populate modal content
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-description');
    const clientEl = document.getElementById('modal-client');
    const completionEl = document.getElementById('modal-completion');
    const typeEl = document.getElementById('modal-type');
    const valueEl = document.getElementById('modal-value');
    const durationEl = document.getElementById('modal-duration');
    
    if (titleEl) titleEl.textContent = project.title;
    if (descEl) descEl.textContent = project.description;
    if (clientEl) clientEl.textContent = project.client;
    if (completionEl) completionEl.textContent = project.completionDate;
    if (typeEl) typeEl.textContent = project.projectType;
    if (valueEl) valueEl.textContent = project.value;
    if (durationEl) durationEl.textContent = project.duration;

    // Set main image
    const mainImage = document.getElementById('modal-main-image');
    if (mainImage && project.images && project.images.length > 0) {
      mainImage.src = project.images[0];
      mainImage.alt = project.title;
    }

    // Create thumbnails
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    if (thumbnailsContainer && project.images) {
      thumbnailsContainer.innerHTML = '';
      
      project.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${project.title} - Image ${index + 1}`;
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        
        thumbnail.addEventListener('click', (e) => {
          e.preventDefault();
          if (mainImage) {
            mainImage.src = image;
          }
          document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
          thumbnail.classList.add('active');
        });

        thumbnailsContainer.appendChild(thumbnail);
      });
    }

    // Show modal
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  async handleFormSubmit(e) {
    e.preventDefault();

    // Clear any existing error messages
    this.clearFormErrors();

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const subject = formData.get('subject')?.trim();
    const message = formData.get('message')?.trim();

    let hasErrors = false;

    // Validate required fields
    if (!name) {
      this.showFieldError('name', 'Name is required.');
      hasErrors = true;
    }

    if (!email) {
      this.showFieldError('email', 'Email is required.');
      hasErrors = true;
    } else {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.showFieldError('email', 'Please enter a valid email address.');
        hasErrors = true;
      }
    }

    if (!subject) {
      this.showFieldError('subject', 'Subject is required.');
      hasErrors = true;
    }

    if (!message) {
      this.showFieldError('message', 'Message is required.');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    // Send to Formspree
    const endpoint = (CONFIG.contact && CONFIG.contact.formspreeEndpoint) ? CONFIG.contact.formspreeEndpoint : null;
    if (!endpoint) {
      this.showFormError('Form endpoint not configured. Please set CONFIG.contact.formspreeEndpoint with your Formspree form ID.');
      return;
    }

    try {
      const payload = { name, email, subject, message };
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        this.showSuccessMessage(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        const errMsg = (data && data.error) ? data.error : 'Sending failed. Please try again later.';

        // If Formspree blocks AJAX because reCAPTCHA is enabled or a custom key is required,
        // offer and automatically attempt a fallback using a normal HTML form POST (non-AJAX).
        const recaptchaBlocked = (res.status === 403) || (errMsg && /recaptcha|custom key/i.test(errMsg));
        if (recaptchaBlocked) {
          this.showFormError('Formspree requires either a custom AJAX key or that reCAPTCHA be disabled. Falling back to a normal form POST (this will navigate away from the page).');

          // Create and submit a normal form to the Formspree endpoint to bypass AJAX restriction
          try {
            const fallbackForm = document.createElement('form');
            fallbackForm.method = 'POST';
            fallbackForm.action = endpoint;

            // copy fields
            [['name', name], ['email', email], ['subject', subject], ['message', message]].forEach(([k,v]) => {
              const inp = document.createElement('input');
              inp.type = 'hidden';
              inp.name = k;
              inp.value = v || '';
              fallbackForm.appendChild(inp);
            });

            // if your Formspree form requires a redirect or field for _subject or _replyto, add them here
            // append to body and submit
            document.body.appendChild(fallbackForm);
            fallbackForm.submit();
            return;
          } catch (err) {
            console.error('Fallback submission failed', err);
            this.showFormError(errMsg);
            return;
          }
        }

        this.showFormError(errMsg);
      }
    } catch (err) {
      console.error('Form submission error', err);
      this.showFormError('Network error. Please try again later.');
    }
  }

  showFormError(message) {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message form-error';
    errorDiv.textContent = message;

    form.insertBefore(errorDiv, form.firstChild);

    // Remove error message after a timeout
    setTimeout(() => {
      if (errorDiv && errorDiv.parentNode) errorDiv.remove();
    }, 6000);
  }

  showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    if (!field) return;
    
    // Remove existing error
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Add error class to field
    field.classList.add('error');
    
    // Create and add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
  }

  clearFormErrors() {
    // Remove error classes and messages
    document.querySelectorAll('.form-control.error').forEach(field => {
      field.classList.remove('error');
    });
    
    document.querySelectorAll('.error-message').forEach(error => {
      error.remove();
    });
    
    // Remove any existing success message
    const existingSuccess = document.querySelector('.success-message');
    if (existingSuccess) {
      existingSuccess.remove();
    }
  }

  showSuccessMessage(message) {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      if (successDiv && successDiv.parentNode) {
        successDiv.remove();
      }
    }, 5000);
  }

  // Navbar scroll effect
  setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'none';
      }
    });
  }
}

// Initialize the application
const app = new PortfolioApp();

// Export CONFIG for easy access (helpful for debugging)
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
  window.PortfolioApp = app;
}