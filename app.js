/**
 * Nirawastaken Portfolio - Modern Interactive Engine
 */

const DEFAULT_PROFILE_TEXT = `name=Niranjan
brand=N.
eyebrow=ENGINEERING · AI · TECHNOLOGY
headline=Building at the<br>intersection of <span>engineering</span><br>and intelligence<span class="cyan">.</span>
intro=I’m an engineering student exploring artificial intelligence, software development, and practical technology solutions.
introMore=From intelligent systems to hardware-focused experiments, I learn by building and turn ideas into working prototypes.
about=I’m an engineering student at Dhanalakshmi College of Engineering, Chennai, interested in the intersection of mechanical engineering, artificial intelligence, and software development.|I enjoy experimenting with new tools and turning ideas into functional projects — from Python applications and machine learning experiments to hardware-integrated systems.|My goal is to keep strengthening my technical foundation and contribute to projects that connect innovation with real-world utility.
location=Chennai, India
locationShort=CHENNAI, IN
email=gpniranjan1122@gmail.com
github=https://github.com/Nirawasnottaken
linkedin=https://www.linkedin.com/in/g-niranjan-2a88b6375/
skillsProgramming=Python, Java, C, SQL
skillsAI=Scikit-learn, OpenCV, TensorFlow / Keras
skillsSoftware=Flask, MySQL
skillsTools=Git & GitHub, Linux, Raspberry Pi
educationDates=2024 — 2028
degree=Bachelor of Engineering — B.E. CSE (AI & ML)
school=Dhanalakshmi College of Engineering · Chennai, India
educationDescription=Building a foundation in engineering principles while exploring AI, machine learning, programming, and practical technology projects.
experienceLabel=STUDENT LEADERSHIP / COMMUNITY
experienceVisible=false
experienceDates=2024 — Present
experienceTitle=Rotaract Club — Student Leadership & Community Initiatives
experiencePlace=Dhanalakshmi College of Engineering
experienceDescription=Active member contributing to campus technology events, youth empowerment initiatives, and collaborative community projects.
contactIntro=I’m interested in engineering, AI, software, and projects that solve real problems. Reach out to discuss an opportunity or collaboration.`;

const DEFAULT_PROJECTS_TEXT = `Intelligent Face Attendance System For Bus | COMPUTER VISION · EMBEDDED AI | A bus attendance system using camera input and face recognition to record attendance. | Python, OpenCV / dlib, Raspberry Pi | BUILT |
Nira TV | IP · NETWORK · LAN | A movie and video streaming website hosted on a home server and available across a local network for office or home use. | Python, Flask, Home Server | BUILT |
Small | AI PROJECT BUILDER · FULL-STACK | A full-stack AI project builder that turns project specifications into downloadable codebases, with optional GitHub publishing. | React, Vite, FastAPI, Python, OpenAI-compatible API, GitHub OAuth | BUILT | https://github.com/Nirawasnottaken/Multimodal-AI-System-for-Human-Activity-Understanding-Using-Video-Audio-and-Sensor-Data
Bus Attendance Review Dashboard | TRANSPORT · ATTENDANCE | An idea that extends the bus attendance project with a simple trip-by-trip view of recorded attendance for staff. | Python, OpenCV, Data Visualization | IDEA |
GPS Location Logger | EMBEDDED SYSTEMS · GPS | A location-logging workflow that reads GPS coordinates and saves named places for later use. | Python, NEO-6M GPS, CSV | PROTOTYPE |`;

// State
let allLoadedProjects = [];
let currentFilter = 'all';

// SVG Icons
const ICONS = {
  github: `<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  external: `<svg viewBox="0 0 24 24"><path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h6c.55 0 1-.45 1-1s-.45-1-1-1H6C4.34 3 3 4.34 3 6v12c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h3.59l-9.83 9.83c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L20 6.41V10c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/></svg>`,
  copy: `<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`
};

/* --------------------------------------------------------------------------
   Text Parser & Safe URL Helper
   -------------------------------------------------------------------------- */
function parseText(text) {
  const result = {};
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const splitAt = trimmed.indexOf('=');
    if (splitAt < 1) continue;
    result[trimmed.slice(0, splitAt).trim()] = trimmed.slice(splitAt + 1).trim();
  }
  return result;
}

function safeUrl(value, prefix) {
  if (!value) return prefix === 'mailto:' ? 'mailto:' : '#';
  if (prefix === 'mailto:') return `mailto:${value}`;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '#';
  } catch { return '#'; }
}

function setText(key, value) {
  document.querySelectorAll(`[data-profile="${key}"]`).forEach(node => {
    if (key === 'headline') node.innerHTML = value;
    else node.textContent = value;
  });
}

/* --------------------------------------------------------------------------
   Toast Notification System
   -------------------------------------------------------------------------- */
let toastTimeout = null;
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">✓</span> <span>${message}</span>`;
  toast.classList.add('toast-show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('toast-show');
  }, 2400);
}

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => fallbackCopy(text, successMessage));
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    console.error('Copy failed', err);
  }
  document.body.removeChild(textarea);
}

/* --------------------------------------------------------------------------
   Render Identity Terminal in About Section
   -------------------------------------------------------------------------- */
function renderIdentityTerminal(profile) {
  const container = document.getElementById('identity-code');
  if (!container) return;

  const identity = {
    developer: profile.name || "Niranjan",
    role: profile.degree || "Bachelor of Engineering — CSE (AI & ML)",
    college: "Dhanalakshmi College of Engineering",
    location: profile.location || "Chennai, India",
    coreSkills: [
      "Python", "C", "Java", "OpenCV", "TensorFlow", "Raspberry Pi"
    ],
    passions: [
      "Computer Vision", "Edge Artificial Intelligence", "Full-Stack Web"
    ],
    status: "Building real-world prototypes & open to collaboration"
  };

  // Syntax coloring helper
  const jsonStr = JSON.stringify(identity, null, 2);
  const formattedHtml = jsonStr
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
      let cls = 'tok-num';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'tok-key';
          return `<span class="${cls}">${match.slice(0, -1)}</span><span class="tok-punct">:</span>`;
        } else {
          cls = 'tok-str';
        }
      } else if (/true|false/.test(match)) {
        cls = 'tok-bool';
      }
      return `<span class="${cls}">${match}</span>`;
    })
    .replace(/([\{\}\[\]\,])/g, '<span class="tok-punct">$1</span>');

  container.innerHTML = formattedHtml;

  // Bind copy button if present
  const copyBtn = document.getElementById('copy-identity-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(jsonStr, 'Developer identity JSON copied to clipboard!');
    });
  }
}

/* --------------------------------------------------------------------------
   Profile Renderer
   -------------------------------------------------------------------------- */
function renderProfile(profile) {
  for (const [key, value] of Object.entries(profile)) {
    if (key === 'about') {
      const target = document.getElementById('about-copy');
      if (!target) continue;
      target.replaceChildren(...value.split('|').map((paragraph, index) => {
        const p = document.createElement('p');
        if (index === value.split('|').length - 1) p.className = 'muted-copy';
        p.textContent = paragraph.trim();
        return p;
      }));
    } else if (!key.startsWith('skills')) {
      setText(key, value);
    }
  }

  // Social Links
  document.querySelectorAll('[data-link="github"]').forEach(a => {
    a.href = safeUrl(profile.github);
    if (!a.querySelector('svg')) a.innerHTML = ICONS.github;
  });
  document.querySelectorAll('[data-link="linkedin"]').forEach(a => {
    a.href = safeUrl(profile.linkedin);
    if (!a.querySelector('svg')) a.innerHTML = ICONS.linkedin;
  });
  document.querySelectorAll('[data-link="email"]').forEach(a => {
    a.href = safeUrl(profile.email, 'mailto:');
  });

  // Copy Email Buttons
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(profile.email || 'gpniranjan1122@gmail.com', 'Email copied to clipboard!');
    });
  });

  const experience = document.getElementById('experience');
  if (experience) {
    experience.hidden = profile.experienceVisible !== 'true';
  }

  document.querySelectorAll('[data-profile="email"]').forEach(el => {
    el.textContent = profile.email || 'Email me';
  });

  const contactButton = document.querySelector('[data-contact-button]');
  if (contactButton) {
    contactButton.href = `${safeUrl(profile.email, 'mailto:')}?subject=Project%20Enquiry`;
  }

  // Skills Grid
  const groups = [
    ['PROGRAMMING', '⌘', profile.skillsProgramming],
    ['AI / MACHINE LEARNING', '◉', profile.skillsAI],
    ['SOFTWARE & DATA', '⚙', profile.skillsSoftware],
    ['HARDWARE & TOOLS', '⌁', profile.skillsTools]
  ];

  const grid = document.getElementById('skills-grid');
  if (grid) {
    grid.replaceChildren(...groups.map(([title, icon, list], index) => {
      const article = document.createElement('article');
      article.className = 'skill-card';

      const top = document.createElement('div');
      top.className = 'skill-card-top';
      const glyph = document.createElement('span');
      glyph.className = 'skill-icon';
      glyph.textContent = icon;
      const number = document.createElement('span');
      number.className = 'skill-index';
      number.textContent = `0${index + 1}`;
      top.append(glyph, number);

      const heading = document.createElement('h3');
      heading.textContent = title;

      const tags = document.createElement('div');
      tags.className = 'skill-tags';
      (list || '').split(',').map(item => item.trim()).filter(Boolean).forEach(item => {
        const span = document.createElement('span');
        span.textContent = item;
        tags.append(span);
      });

      article.append(top, heading, tags);
      return article;
    }));
  }

  // Render Identity Terminal
  renderIdentityTerminal(profile);
}

/* --------------------------------------------------------------------------
   Projects Parser & Renderer with Filtering
   -------------------------------------------------------------------------- */
function parseProjects(text) {
  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
    .map(line => {
      const [title, category, description, stack, status, link] = line.split('|').map(part => (part || '').trim());
      return {
        title,
        category,
        description,
        stack: (stack || '').split(',').map(item => item.trim()).filter(Boolean),
        status: status || '',
        link: link || ''
      };
    })
    .filter(project => project.title && project.description);
}

function filterProjects(projects, filterType) {
  if (filterType === 'all') return projects;

  return projects.filter(p => {
    const cat = (p.category || '').toUpperCase();
    const stat = (p.status || '').toUpperCase();
    const stackStr = p.stack.join(' ').toUpperCase();

    if (filterType === 'built') {
      return stat.includes('BUILT');
    }
    if (filterType === 'ai') {
      return cat.includes('AI') || cat.includes('VISION') || stackStr.includes('OPENCV') || stackStr.includes('TENSORFLOW');
    }
    if (filterType === 'hardware') {
      return cat.includes('EMBEDDED') || cat.includes('GPS') || cat.includes('NETWORK') || stackStr.includes('RASPBERRY') || stackStr.includes('SERVER');
    }
    if (filterType === 'ideas') {
      return stat.includes('IDEA') || stat.includes('PROTOTYPE');
    }
    return true;
  });
}

function renderProjects(projects) {
  const grid = document.getElementById('projects-grid');
  const showMoreBtn = document.getElementById('show-more');
  if (!grid) return;

  const showAll = grid.dataset.showAll === 'true';
  const filtered = filterProjects(projects, currentFilter);
  const shown = showAll ? filtered : filtered.slice(0, 4);

  grid.replaceChildren(...shown.map((project, index) => {
    const article = document.createElement('article');
    article.className = 'project-card';

    // Visual Header
    const visual = document.createElement('div');
    visual.className = 'project-visual';

    const texture = document.createElement('div');
    texture.className = 'project-visual-grid';

    const orbit = document.createElement('div');
    orbit.className = 'project-visual-orbit';

    const glyph = document.createElement('span');
    glyph.className = 'project-main-icon';
    glyph.textContent = ['◉', '⌖', '⌁', '✳'][index % 4];
    glyph.setAttribute('aria-hidden', 'true');

    const num = document.createElement('span');
    num.className = 'project-number';
    num.textContent = `PROJECT / ${String(index + 1).padStart(2, '0')}`;

    // Status pill in visual
    const statusPill = document.createElement('span');
    statusPill.className = 'project-status-badge';
    const statUpper = project.status.toUpperCase();
    if (statUpper.includes('BUILT')) {
      statusPill.classList.add('status-built');
      statusPill.innerHTML = `● BUILT`;
    } else if (statUpper.includes('IDEA')) {
      statusPill.classList.add('status-idea');
      statusPill.innerHTML = `💡 IDEA`;
    } else {
      statusPill.classList.add('status-prototype');
      statusPill.innerHTML = `⚡ ${project.status || 'PROTOTYPE'}`;
    }

    visual.append(texture, orbit, glyph, num, statusPill);

    // Content Body
    const content = document.createElement('div');
    content.className = 'project-content';

    const category = document.createElement('div');
    category.className = 'project-category';
    category.textContent = project.category || 'PROJECT';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const stack = document.createElement('div');
    stack.className = 'project-stack';
    project.stack.forEach(value => {
      const tag = document.createElement('span');
      tag.textContent = value;
      stack.append(tag);
    });

    const foot = document.createElement('div');
    foot.className = 'project-foot';

    const footStatus = document.createElement('span');
    footStatus.className = 'project-foot-status';
    footStatus.textContent = project.category.split('·')[0].trim() || 'ENGINEERING';
    foot.append(footStatus);

    if (project.link) {
      const anchor = document.createElement('a');
      anchor.className = 'project-action-link';
      anchor.href = safeUrl(project.link);
      anchor.target = '_blank';
      anchor.rel = 'noreferrer';
      anchor.setAttribute('aria-label', `View codebase for ${project.title}`);
      anchor.innerHTML = `Code ${ICONS.external}`;
      foot.append(anchor);
    } else {
      const tag = document.createElement('span');
      tag.className = 'project-foot-status';
      tag.textContent = statUpper.includes('IDEA') ? 'Concept Blueprint' : 'Edge / Hardware Prototype';
      foot.append(tag);
    }

    content.append(category, title, description, stack, foot);
    article.append(visual, content);
    return article;
  }));

  if (showMoreBtn) {
    showMoreBtn.hidden = showAll || filtered.length <= 4;
  }

  const count = document.getElementById('project-count');
  if (count) {
    count.innerHTML = `${String(projects.length).padStart(2, '0')}<span>+</span>`;
  }
}

/* --------------------------------------------------------------------------
   Filter Tabs Setup
   -------------------------------------------------------------------------- */
function setupFilterTabs() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderProjects(allLoadedProjects);
    });
  });
}

/* --------------------------------------------------------------------------
   Dynamic Hero Subtitle Typing Effect
   -------------------------------------------------------------------------- */
function setupTypingAnimation() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const phrases = [
    'Artificial Intelligence & ML',
    'Computer Vision & Edge Systems',
    'Embedded Hardware & IoT',
    'Full-Stack Web Engineering',
    'Applied Robotics & Automation'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const pauseEnd = 2000;

  function tick() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delta = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delta = 400;
    }

    setTimeout(tick, delta);
  }

  tick();
}

/* --------------------------------------------------------------------------
   ScrollSpy & Dynamic Ambient Spotlight
   -------------------------------------------------------------------------- */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id], main > section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-menu nav a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href').replace(/^.*#/, '');
        link.classList.toggle('nav-active', href === currentId);
      });
    }
  }, { passive: true });
}

function setupAmbientSpotlight() {
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  }, { passive: true });
}

function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupMobileMenuClose() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) return;

  mobileMenu.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.removeAttribute('open');
    });
  });
}

/* --------------------------------------------------------------------------
   Application Initialization
   -------------------------------------------------------------------------- */
async function start() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Setup interactive modules
  setupAmbientSpotlight();
  setupTypingAnimation();
  setupFilterTabs();
  setupScrollSpy();
  setupBackToTop();
  setupMobileMenuClose();

  // Default fallback load
  allLoadedProjects = parseProjects(DEFAULT_PROJECTS_TEXT);
  renderProjects(allLoadedProjects);

  // Try fetching live projects.txt
  try {
    const projectsResponse = await fetch('projects.txt');
    if (projectsResponse.ok) {
      allLoadedProjects = parseProjects(await projectsResponse.text());
      renderProjects(allLoadedProjects);
    }
  } catch (err) {
    // Keep built-in fallback visible
  }

  // Profile data
  if (!document.querySelector('[data-profile]')) return;

  try {
    const profileResponse = await fetch('portfolio.txt');
    if (profileResponse.ok) {
      renderProfile(parseText(await profileResponse.text()));
      return;
    }
  } catch (err) {
    // Fallback to embedded default
  }

  renderProfile(parseText(DEFAULT_PROFILE_TEXT));
}

start();
