// GymEnquiryPopup.jsx
import React, { useState } from 'react';
import './GymEnquiryPopup.css'; // Make sure this path is correct for your project structure

/**
 * Renders a popup for gym enquiry.
 * @param {object} props - The component props.
 * @param {function} props.onClose - Function to call when the popup needs to be closed.
 * @param {function} [props.onEnquirySent] - Optional function to call on successful enquiry submission.
 */
const GymEnquiryPopup = ({ onClose, onEnquirySent }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [fitnessFocus, setFitnessFocus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission
    setError(''); // Clear any previous errors

    // --- Client-side validation ---
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!mobile.trim()) {
      setError('Mobile Number is required.');
      return;
    }
    if (!/^\d{10}$/.test(mobile.trim())) { // Simple 10-digit mobile number validation
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!fitnessFocus) {
      setError('Please select your primary fitness focus.');
      return;
    }
    // --- End Client-side validation ---

    setIsSubmitting(true); // Disable button and show loading state

    try {
      // *** IMPORTANT: Replace this with your actual backend API endpoint ***
      // This is where the form data will be sent for processing (e.g., saving to DB, sending emails)
      const response = await fetch('/api/gym-enquiry', { // Example API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If your API requires authentication (e.g., Bearer Token), add it here:
          // 'Authorization': `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify({
          name: name.trim(),
          mobile: mobile.trim(),
          fitnessFocus: fitnessFocus,
        }),
      });

      if (response.ok) {
        // Assuming your API returns a JSON response on success
        const result = await response.json();
        console.log('Enquiry sent successfully:', result);

        // Inform the user
        alert('Your enquiry has been sent successfully! Relevant businesses will contact you shortly.');

        // Call optional callback for parent component
        if (onEnquirySent) {
          onEnquirySent();
        }

        // Close the popup
        onClose();

        // Optionally clear form fields after successful submission
        setName('');
        setMobile('');
        setFitnessFocus('');
      } else {
        // Handle API errors (e.g., server returned 4xx or 5xx status)
        const errorData = await response.json(); // Try to parse error message from response body
        const errorMessage = errorData.message || 'Failed to send enquiry. Please try again.';
        setError(errorMessage);
        console.error('API Error:', response.status, errorData);
      }
    } catch (apiError) {
      // Handle network errors (e.g., no internet connection, server unreachable)
      console.error('Network or API call error:', apiError);
      setError('An error occurred. Please check your internet connection and try again later.');
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    // The overlay covers the entire screen, dimming the background
    <div className="popup-overlay" onClick={onClose}> {/* Clicking overlay can also close popup */}
      {/* The actual popup content container */}
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Stop propagation so clicking inside popup doesn't close it */}

        {/* Close button */}
        <button className="popup-close-button" onClick={onClose} aria-label="Close popup">X</button>

        {/* Main section containing form and ad */}
        <div className="popup-main-section">

          {/* Form container */}
          <div className="popup-form-container">
            <h3>Get the List of Top Gyms</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required // HTML5 built-in validation
                  aria-required="true" // ARIA attribute for accessibility
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number*</label>
                <input
                  type="tel" // Semantic type for telephone numbers
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your 10 digit mobile number"
                  required
                  pattern="[0-9]{10}" // HTML5 pattern for exactly 10 digits
                  title="Please enter a 10 digit mobile number" // Tooltip for pattern
                  aria-required="true"
                />
              </div>

              <div className="form-group-radio">
                <p className="radio-question">What is your primary focus in fitness?</p>
                <div className="radio-options">
                  <label>
                    <input
                      type="radio"
                      name="fitnessFocus" // Same name groups radio buttons
                      value="Weight loss"
                      checked={fitnessFocus === 'Weight loss'}
                      onChange={(e) => setFitnessFocus(e.target.value)}
                      required
                    /> Weight loss
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="fitnessFocus"
                      value="Muscle building"
                      checked={fitnessFocus === 'Muscle building'}
                      onChange={(e) => setFitnessFocus(e.target.value)}
                      required
                    /> Muscle building
                  </label>
                </div>
              </div>

              {/* Display error message if any */}
              {error && <p className="form-error" role="alert">{error}</p>}

              <button
                type="submit"
                className="send-enquiry-button"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? 'Sending...' : 'SEND ENQUIRY'}
              </button>
            </form>

            {/* Benefits/Information Section */}
            <div className="popup-benefits">
              <p>• Your requirement is sent to the selected relevant businesses</p>
              <p>• Businesses compete with each other to get you the Best Deal</p>
              <p>• You choose whichever suits you best</p>
              <p>• Contact info sent to you by SMS/email</p>
            </div>
          </div>

          {/* Ad Section - This would typically be dynamic or part of an ad service */}
          <div className="popup-ad-section">
            {/* You'd replace this with an actual image URL from your assets or CDN */}
            <img src="https://via.placeholder.com/250x300?text=Your+Ad+Here" alt="Sponsored Ad" className="ad-image" />
            <div className="ad-text">
              <p className="ad-company">Indeed</p>
              <p className="ad-description">Sponsored Jobs deliver 80% more applicants on average than non-sponsored jobs</p>
              <button className="ad-button">Sponsor your job</button>
              <p className="ad-small-text"><span>i</span> Sponsored Jobs (Details A-Z)</p>
            </div>
            <button className="ad-close-button" aria-label="Close Ad">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymEnquiryPopup;