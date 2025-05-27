import React, { useState } from 'react';
import './GymEnquiryPopup.css'; // Adjust the path if needed

// Category-specific content configuration
const CATEGORY_CONTENT = {
  gym: {
    title: 'Get the List of Top Gyms',
    focusQuestion: 'What is your primary fitness goal?',
    focusOptions: ['Weight loss', 'Muscle building'],
    image: 'https://via.placeholder.com/250x300?text=Gym+Ad', // replace with real image URL
    benefits: [
      'Your requirement is sent to relevant gyms',
      'Get best deals and choose what suits you best',
      'Contact info sent to you by SMS/email',
    ],
  },
  restaurant: {
    title: 'Find the Best Restaurants Near You',
    focusQuestion: 'What type of cuisine are you looking for?',
    focusOptions: ['Indian', 'Chinese', 'Italian', 'Fast Food'],
    image: 'https://via.placeholder.com/250x300?text=Restaurant+Ad',
    benefits: [
      'Explore top-rated restaurants nearby',
      'Get menus, prices, and deals quickly',
      'Reserve your table instantly',
    ],
  },
  beauty: {
    title: 'Discover Top Beauty Salons',
    focusQuestion: 'What service do you need?',
    focusOptions: ['Haircut', 'Facial', 'Spa', 'Makeup'],
    image: 'https://via.placeholder.com/250x300?text=Beauty+Ad',
    benefits: [
      'Find top salons with great reviews',
      'Book appointments with ease',
      'Get personalized beauty tips',
    ],
  },
  realestate: {
    title: 'Top Real Estate Listings Near You',
    focusQuestion: 'What are you looking for?',
    focusOptions: ['Buy', 'Rent', 'PG/Hostel'],
    image: 'https://via.placeholder.com/250x300?text=RealEstate+Ad',
    benefits: [
      'Get connected to trusted real estate agents',
      'View verified property listings',
      'Negotiate best deals directly',
    ],
  },
};

const GymEnquiryPopup = ({ category = 'gym', onClose, onEnquirySent }) => {
  // Get content based on category, fallback to gym if category not found
  const content = CATEGORY_CONTENT[category] || CATEGORY_CONTENT['gym'];

  // Form states
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!mobile.trim()) {
      setError('Mobile Number is required.');
      return;
    }
    if (!/^\d{10}$/.test(mobile.trim())) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!selectedOption) {
      setError('Please select an option.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace this with your actual backend API endpoint
      const response = await fetch('/api/gym-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          mobile: mobile.trim(),
          category,
          selectedOption,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Your enquiry has been sent successfully! Relevant businesses will contact you shortly.');

        if (onEnquirySent) onEnquirySent();
        onClose();

        // Clear form
        setName('');
        setMobile('');
        setSelectedOption('');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to send enquiry. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-button" onClick={onClose} aria-label="Close popup">X</button>

        <div className="popup-main-section">
          <div className="popup-form-container">
            <h3>{content.title}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number*</label>
                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your 10 digit mobile number"
                  required
                  pattern="\d{10}"
                  title="Please enter a 10 digit mobile number"
                  aria-required="true"
                />
              </div>

              <div className="form-group-radio">
                <p className="radio-question">{content.focusQuestion}</p>
                <div className="radio-options">
                  {content.focusOptions.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="focusOption"
                        value={option}
                        checked={selectedOption === option}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        required
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {error && <p className="form-error" role="alert">{error}</p>}

              <button type="submit" disabled={isSubmitting} className="send-enquiry-button">
                {isSubmitting ? 'Sending...' : 'SEND ENQUIRY'}
              </button>
            </form>

            <div className="popup-benefits">
              {content.benefits.map((point, i) => (
                <p key={i}>• {point}</p>
              ))}
            </div>
          </div>

          <div className="popup-ad-section">
            <img src={content.image} alt={`${category} Ad`} className="ad-image" />
            {/* Add more ad content here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymEnquiryPopup;
