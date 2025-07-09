import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tattooIdea: '',
    placement: '',
    size: '',
    availability: [] as string[],
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      availability: checked 
        ? [...prev.availability, value]
        : prev.availability.filter(item => item !== value)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { formData, files });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="page-container">
        <div className="page-content">
          <header className="page-header">
            <Link to="/" className="back-button">
              <ArrowLeft size={20} />
              <span>Back</span>
            </Link>
            <h1 className="page-title">BOOK</h1>
          </header>
          
          <div className="confirmation-message">
            <h2>Thank you for your request!</h2>
            <p>I will get back to you soon.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>
          <h1 className="page-title">BOOK</h1>
        </header>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tattooIdea" className="form-label">Tattoo Idea Description</label>
            <textarea
              id="tattooIdea"
              name="tattooIdea"
              value={formData.tattooIdea}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="Describe your tattoo idea in detail..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="placement" className="form-label">Preferred Placement on Body</label>
            <input
              type="text"
              id="placement"
              name="placement"
              value={formData.placement}
              onChange={handleInputChange}
              className="form-input"
              placeholder="e.g., forearm, shoulder, ankle..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="size" className="form-label">Preferred Size (in cm)</label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="form-input"
              placeholder="e.g., 10x15 cm"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Reference Images (Upload at least 2)</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="form-file"
              required
            />
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
              Please upload at least 2 reference images
            </p>
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Availability</label>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
              I'll do my best to match your preferences but cannot guarantee exact times
            </p>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="weekdays"
                  value="Weekdays only"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="weekdays">Weekdays only</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="weekends"
                  value="Weekends only"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="weekends">Weekends only</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="mornings"
                  value="Mornings only"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="mornings">Mornings only</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="evenings"
                  value="Evenings only"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="evenings">Evenings only</label>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            <span className="button-text">Submit Request</span>
            <div className="highlight-overlay"></div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookPage;