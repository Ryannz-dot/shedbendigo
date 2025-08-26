import './style.css'

// Create the main application structure
document.querySelector('#root').innerHTML = `
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="nav-brand">
          <h1>Best Sheds Bendigo</h1>
          <span class="tagline">Premium Steel Shed Construction</span>
        </div>
        <nav class="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" class="cta-button">Get Quote</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Custom Steel Sheds in Bendigo, Victoria</h1>
        <p>Professional shed construction with premium Australian-made materials. Licensed experts serving Bendigo and surrounding areas.</p>
        <div class="hero-buttons">
          <button class="btn-primary" onclick="scrollToContact()">Get Free Quote</button>
          <button class="btn-secondary" onclick="scrollToServices()">View Services</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Custom steel shed construction in Bendigo" />
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <h2>Our Shed Construction Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🏭</div>
            <h3>Custom Steel Sheds</h3>
            <p>Tailored shed designs to meet your specific requirements. From small storage sheds to large industrial buildings.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🚜</div>
            <h3>Agricultural Sheds</h3>
            <p>Purpose-built farm buildings for machinery storage, livestock housing, and crop protection.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🏢</div>
            <h3>Commercial Buildings</h3>
            <p>Industrial-grade commercial structures designed for durability and functionality.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3>Workshop Spaces</h3>
            <p>Professional workshop buildings with proper ventilation, lighting, and electrical provisions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Why Choose Best Sheds Bendigo?</h2>
            <div class="features">
              <div class="feature">
                <span class="feature-icon">✓</span>
                <div>
                  <h4>Licensed & Insured</h4>
                  <p>Fully licensed builders with comprehensive insurance coverage</p>
                </div>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <div>
                  <h4>Australian Made Materials</h4>
                  <p>Premium quality steel and materials sourced from trusted Australian suppliers</p>
                </div>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <div>
                  <h4>Local Expertise</h4>
                  <p>Deep understanding of Bendigo's climate and building requirements</p>
                </div>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <div>
                  <h4>Full Service</h4>
                  <p>From permits to completion - we handle every aspect of your project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional shed construction team" />
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
      <div class="container">
        <h2>Recent Projects</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Custom steel shed project" />
            <div class="gallery-overlay">
              <h4>Custom Storage Shed</h4>
              <p>Residential project in Bendigo</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Agricultural shed construction" />
            <div class="gallery-overlay">
              <h4>Agricultural Building</h4>
              <p>Farm storage facility</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Commercial shed building" />
            <div class="gallery-overlay">
              <h4>Commercial Workshop</h4>
              <p>Industrial facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>What permits are required for shed construction in Bendigo?</h3>
            <p>Permit requirements vary based on shed size, location, and intended use. Best Sheds Bendigo handles all permit applications on your behalf, working directly with local councils to ensure compliance with current regulations and building codes.</p>
          </div>
          <div class="faq-item">
            <h3>How long does shed construction take in Bendigo?</h3>
            <p>Construction timelines depend on project complexity and size, but most residential sheds are completed within 2-4 weeks from permit approval. Commercial projects may require additional time based on specific requirements and site conditions.</p>
          </div>
          <div class="faq-item">
            <h3>Do you provide warranties on your shed construction?</h3>
            <p>Yes, we provide comprehensive warranties on all our work, including structural warranties and material guarantees. Our Australian-made steel comes with manufacturer warranties for added peace of mind.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2>Get Your Free Quote Today</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Contact Best Sheds Bendigo</h3>
            <div class="contact-details">
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <div>
                  <h4>Service Area</h4>
                  <p>Bendigo, Victoria 3550<br>and surrounding areas</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">🕒</span>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 7:00 AM - 6:00 PM<br>Saturday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">⭐</span>
                <div>
                  <h4>Customer Rating</h4>
                  <p>4.9/5 stars from 127+ reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form id="quoteForm">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone">
              </div>
              <div class="form-group">
                <label for="project">Project Type</label>
                <select id="project" name="project">
                  <option value="">Select project type</option>
                  <option value="residential">Residential Shed</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="agricultural">Agricultural Shed</option>
                  <option value="workshop">Workshop Space</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Project Details</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your shed requirements..."></textarea>
              </div>
              <button type="submit" class="btn-primary">Request Free Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Best Sheds Bendigo</h3>
            <p>Premium custom steel shed construction serving Bendigo, Victoria and surrounding areas.</p>
          </div>
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Custom Steel Sheds</li>
              <li>Agricultural Buildings</li>
              <li>Commercial Structures</li>
              <li>Workshop Spaces</li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Service Areas</h4>
            <ul>
              <li>Bendigo</li>
              <li>Castlemaine</li>
              <li>Kyneton</li>
              <li>Heathcote</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Best Sheds Bendigo. All rights reserved. | Licensed Builders | Australian Made Materials</p>
        </div>
      </div>
    </footer>
  </div>
`

// Add smooth scrolling functionality
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
}

function scrollToServices() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
}

// Make functions globally available
window.scrollToContact = scrollToContact
window.scrollToServices = scrollToServices

// Handle form submission
document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault()
  
  // Get form data
  const formData = new FormData(this)
  const data = Object.fromEntries(formData)
  
  // Simple validation
  if (!data.name || !data.email) {
    alert('Please fill in all required fields.')
    return
  }
  
  // Simulate form submission
  alert('Thank you for your quote request! We will contact you within 24 hours to discuss your shed project.')
  this.reset()
})

// Add scroll effect to header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header')
  if (window.scrollY > 100) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})