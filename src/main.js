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
          <a href="#process">Process</a>
          <a href="#areas">Service Areas</a>
          <a href="#contact" class="cta-button">Get Quote</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Custom Steel Sheds in Bendigo, Victoria 3550</h1>
          <p class="hero-subtitle">Premium Australian-made steel buildings designed for Bendigo's unique conditions</p>
          
          <div class="hero-features">
            <div class="hero-feature">
              <div class="feature-icon">⚡</div>
              <div>
                <h4>Fast Installation</h4>
                <p>2-4 week completion</p>
              </div>
            </div>
            <div class="hero-feature">
              <div class="feature-icon">🏆</div>
              <div>
                <h4>Australian Standards</h4>
                <p>BlueScope steel construction</p>
              </div>
            </div>
            <div class="hero-feature">
              <div class="feature-icon">👥</div>
              <div>
                <h4>Local Experts</h4>
                <p>Bendigo's trusted builders</p>
              </div>
            </div>
          </div>
          
          <div class="hero-buttons">
            <button class="btn-primary" onclick="scrollToContact()">Get Your Free Quote Today</button>
            <button class="btn-secondary" onclick="scrollToServices()">View Services</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Custom steel shed construction in Bendigo" />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <h2>Our Steel Shed Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🏠</div>
            <h3>Residential Sheds</h3>
            <p>Custom storage solutions for Bendigo homes</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🏢</div>
            <h3>Commercial Buildings</h3>
            <p>Industrial-grade structures for businesses</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🚜</div>
            <h3>Agricultural Sheds</h3>
            <p>Farm buildings and livestock shelters</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3>Workshop Spaces</h3>
            <p>Professional hobby and work areas</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">⚙️</div>
            <h3>Machinery Storage</h3>
            <p>Heavy equipment protection facilities</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🌾</div>
            <h3>Hay Storage</h3>
            <p>Weather-resistant feed storage</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🚗</div>
            <h3>Vehicle Garages</h3>
            <p>Car and truck protection structures</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">📦</div>
            <h3>Retail Storage</h3>
            <p>Commercial inventory facilities</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🏭</div>
            <h3>Manufacturing Units</h3>
            <p>Industrial production spaces</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🐄</div>
            <h3>Livestock Shelters</h3>
            <p>Animal protection structures</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🌱</div>
            <h3>Garden Sheds</h3>
            <p>Compact outdoor storage solutions</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
          <div class="service-card">
            <div class="service-icon">🏗️</div>
            <h3>Multi-Purpose Buildings</h3>
            <p>Versatile customizable structures</p>
            <a href="mailto:info@bestshedsbendigo.com" class="service-cta">Email Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2>Why Choose Best Sheds Bendigo</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="about-intro">When you need reliable, high-quality shed solutions in Bendigo, Best Sheds Bendigo stands as your premier destination for custom steel buildings that withstand Victoria's demanding weather conditions. Our locally-focused team specializes in delivering exceptional shed construction services throughout Bendigo and surrounding communities, combining decades of manufacturing experience with personalized customer service that puts your needs first.</p>
            
            <p>Best Sheds Bendigo offers comprehensive shed solutions for residential, commercial, and rural applications across the greater Bendigo region. Whether you're seeking a simple garden storage solution or a complex commercial facility, our expert team designs and manufactures custom steel buildings that meet your exact specifications while exceeding Australian engineering standards.</p>
            
            <div class="about-sections">
              <div class="about-section">
                <h3>Custom Shed Design and Manufacturing in Bendigo</h3>
                <h4>Tailored Solutions for Every Property</h4>
                <p>Our Bendigo shed specialists understand that every property presents unique challenges and opportunities. From compact residential lots in central Bendigo to expansive rural properties in surrounding areas, we create custom designs that maximize your available space while meeting local council requirements and building codes.</p>
                
                <h4>Premium Australian Steel Construction</h4>
                <p>Best Sheds Bendigo exclusively uses high-grade Australian BlueScope steel in all our constructions, ensuring your investment withstands Bendigo's variable climate conditions. Our steel components are precision-manufactured to exact specifications, providing superior strength and longevity compared to standard flat-pack alternatives available in the market.</p>
                
                <h4>Complete Design-to-Delivery Service</h4>
                <p>From initial consultation through final installation, our Bendigo team manages every aspect of your shed project. We handle council permits, site preparation assessments, and coordinate all trades required for your build, eliminating the stress and complexity typically associated with construction projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="process">
      <div class="container">
        <h2>Our Construction Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Initial Consultation and Site Assessment</h3>
              <p>Every Best Sheds Bendigo project begins with a thorough consultation where our experts assess your property, discuss your requirements, and provide professional recommendations.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Custom Design Development</h3>
              <p>Using advanced design software, our Bendigo team creates detailed plans that incorporate your specific requirements while optimizing structural integrity and cost-effectiveness.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Professional Installation</h3>
              <p>Our certified installation teams bring years of experience to every Bendigo project, coordinating all aspects of construction from foundation preparation through final inspections.</p>
            </div>
          </div>
        </div>
        
        <div class="emergency-service">
          <h3>Emergency Shed Services</h3>
          <p>Need urgent shed repairs or emergency construction? Our Bendigo team provides rapid response services for critical situations affecting your property or business operations.</p>
          <a href="mailto:info@bestshedsbendigo.com" class="btn-emergency">Emergency Email Now</a>
        </div>
      </div>
    </section>

    <!-- Service Areas Section -->
    <section id="areas" class="service-areas">
      <div class="container">
        <h2>Our Bendigo Service Areas</h2>
        <p class="areas-intro">Best Sheds Bendigo proudly serves the entire greater Bendigo region, providing professional shed construction services to:</p>
        
        <div class="areas-grid">
          <div class="area-item">Central Bendigo</div>
          <div class="area-item">Eaglehawk</div>
          <div class="area-item">Kangaroo Flat</div>
          <div class="area-item">Strathfieldsaye</div>
          <div class="area-item">Golden Square</div>
          <div class="area-item">Epsom</div>
          <div class="area-item">Long Gully</div>
          <div class="area-item">Maiden Gully</div>
          <div class="area-item">White Hills</div>
          <div class="area-item">Flora Hill</div>
          <div class="area-item">Quarry Hill</div>
          <div class="area-item">East Bendigo</div>
        </div>
        
        <p class="service-radius">Our service radius extends 50 kilometers from Bendigo, ensuring comprehensive coverage for surrounding communities and rural properties requiring specialized shed solutions.</p>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2>What Our Bendigo Customers Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial">
            <p>"Outstanding quality and service. Our new workshop shed exceeded expectations!"</p>
            <div class="testimonial-author">
              <strong>Sarah Mitchell</strong>
              <span>Eaglehawk</span>
            </div>
          </div>
          <div class="testimonial">
            <p>"Professional team, fair pricing, and excellent workmanship. Highly recommended!"</p>
            <div class="testimonial-author">
              <strong>John Thompson</strong>
              <span>Kangaroo Flat</span>
            </div>
          </div>
          <div class="testimonial">
            <p>"From design to installation, Best Sheds delivered exactly what we needed."</p>
            <div class="testimonial-author">
              <strong>Maria Rodriguez</strong>
              <span>Central Bendigo</span>
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
            <h3>Can sheds be customized for specific uses?</h3>
            <p>Absolutely! We specialize in custom designs tailored to your specific needs, whether it's agricultural storage, commercial workshops, or residential applications. Our team works with you to create the perfect solution.</p>
          </div>
          <div class="faq-item">
            <h3>What warranty coverage is provided?</h3>
            <p>We provide comprehensive warranties on all our work, including structural warranties and material guarantees. Our Australian-made BlueScope steel comes with manufacturer warranties for added peace of mind.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2>Contact Best Sheds Bendigo Today</h2>
        <p class="contact-intro">Ready to transform your property with a premium shed solution? Best Sheds Bendigo is here to help you create the perfect building for your needs. Our expert team provides complimentary consultations and detailed quotes for all projects throughout the Bendigo region.</p>
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Get Your Free Quote</h3>
            <p class="contact-subtitle">Professional Service You Can Trust</p>
            <p class="contact-subtitle">Serving Bendigo & Surrounding Areas</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <div>
                  <h4>Service Area</h4>
                  <p>Bendigo, Victoria 3550<br>and surrounding areas</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:info@bestshedsbendigo.com">info@bestshedsbendigo.com</a></p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">🏆</span>
                <div>
                  <h4>Professional Consultation</h4>
                  <p>Available for all projects</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">✅</span>
                <div>
                  <h4>Licensed & Insured</h4>
                  <p>Fully certified builders</p>
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
                <label for="location">Location</label>
                <select id="location" name="location">
                  <option value="">Select your area</option>
                  <option value="central-bendigo">Central Bendigo</option>
                  <option value="eaglehawk">Eaglehawk</option>
                  <option value="kangaroo-flat">Kangaroo Flat</option>
                  <option value="strathfieldsaye">Strathfieldsaye</option>
                  <option value="golden-square">Golden Square</option>
                  <option value="epsom">Epsom</option>
                  <option value="long-gully">Long Gully</option>
                  <option value="maiden-gully">Maiden Gully</option>
                  <option value="white-hills">White Hills</option>
                  <option value="flora-hill">Flora Hill</option>
                  <option value="quarry-hill">Quarry Hill</option>
                  <option value="east-bendigo">East Bendigo</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="project">Project Type</label>
                <select id="project" name="project">
                  <option value="">Select project type</option>
                  <option value="residential">Residential Shed</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="agricultural">Agricultural Shed</option>
                  <option value="workshop">Workshop Space</option>
                  <option value="machinery">Machinery Storage</option>
                  <option value="hay">Hay Storage</option>
                  <option value="vehicle">Vehicle Garage</option>
                  <option value="retail">Retail Storage</option>
                  <option value="manufacturing">Manufacturing Unit</option>
                  <option value="livestock">Livestock Shelter</option>
                  <option value="garden">Garden Shed</option>
                  <option value="multi-purpose">Multi-Purpose Building</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Project Details</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your shed requirements, dimensions, and any specific needs..."></textarea>
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
            <p>Premium steel shed construction serving Bendigo, Victoria and surrounding areas.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#areas">Service Areas</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Service Areas</h4>
            <ul>
              <li>Central Bendigo</li>
              <li>Eaglehawk</li>
              <li>Kangaroo Flat</li>
              <li>Strathfieldsaye</li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact Info</h4>
            <p>Bendigo, Victoria 3550</p>
            <p><a href="mailto:info@bestshedsbendigo.com">info@bestshedsbendigo.com</a></p>
            <p>Professional Consultation Available</p>
            <p><strong>Licensed & Insured</strong></p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Best Sheds Bendigo. All rights reserved. | Custom Steel Sheds Bendigo, Victoria</p>
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
  alert('Thank you for your quote request! We will contact you within 24 hours to discuss your shed project in the Bendigo area.')
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