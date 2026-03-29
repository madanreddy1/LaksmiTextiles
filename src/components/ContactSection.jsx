import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <p className="contact-tag">Contact Us</p>
          <h2>Visit Lakshmi Textiles</h2>
          <p className="contact-text">
            We’d love to help you explore fabrics, outfits, and styling options.
            Reach out to us or visit our store.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>Address</h3>
              <p>
                No 595, Ground floor, Vidyaranyapura Main Rd, next to Corporation
                Bank, near Durga Parameshwari Temple Arch, HMT Layout 3rd Block,
                HMT Layout 4th Block, Vidyaranyapura, Bengaluru, Karnataka-560097
              </p>
            </div>

            <div className="contact-item">
  <h3>Phone</h3>
  <p>
    <a href="tel:+918123339680" className="contact-link">
      +91 81233 39680
    </a>
  </p>
</div>
<div className="contact-item"> <h3>Business Hours</h3> <p>Monday - Sunday: 10:00 AM - 9:00 PM</p> </div>
          </div>

          <div className="map-section">
            <div className="map-header">
              <h3>Find Us on Map</h3>

              <a
                href="https://www.google.com/maps/dir/LAKSHMI+TEXTILES,+No+595,ground+floor,+Vidyaranyapura+Main+Rd,+next+to+Corporation+Bank,+near+Durga+parameshwari+temple+arch,+HMT+Layout+3rd+Block,+HMT+Layout+4th+Block,+Vidyaranyapura,+Bengaluru,+Karnataka+560097/LAKSHMI+TEXTILES,+No+595,ground+floor,+Vidyaranyapura+Main+Rd,+next+to+Corporation+Bank,+near+Durga+parameshwari+temple+arch,+HMT+Layout+3rd+Block,+HMT+Layout+4th+Block,+Vidyaranyapura,+Bengaluru,+Karnataka+560097/@13.0821783,77.5489313,14z/data=!3m2!4b1!5s0x3bae229f04a25aa9:0xd25d2622a3c249c8!4m13!4m12!1m5!1m1!1s0x3bae229e52b3208d:0x7827c02496a331a8!2m2!1d77.559503!2d13.0811404!1m5!1m1!1s0x3bae229e52b3208d:0x7827c02496a331a8!2m2!1d77.559503!2d13.0811404?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Get Directions
              </a>
            </div>

            <div className="map-wrap">
              <iframe
                title="Lakshmi Textiles Location"
                src="https://www.google.com/maps?q=LAKSHMI%20TEXTILES%2C%20No%20595%2C%20ground%20floor%2C%20Vidyaranyapura%20Main%20Rd%2C%20next%20to%20Corporation%20Bank%2C%20near%20Durga%20Parameshwari%20Temple%20Arch%2C%20HMT%20Layout%203rd%20Block%2C%20HMT%20Layout%204th%20Block%2C%20Vidyaranyapura%2C%20Bengaluru%2C%20Karnataka%20560097&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;