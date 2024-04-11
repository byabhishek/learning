import React, { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';

const YourProblem = () => {

  const [formData, setFormData] = useState({
    FullName: '',
    MobileNumber: '',
    City: '',
    Message: '',
    Description: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4009/api/v1/problemForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset the form state after successful submission
        setFormData({
          FullName: '',
          MobileNumber: '',
          City: '',
          Message: '',
          Description: ''
        });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateLoading = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      handleSubmit(e); // Pass the event object to handleSubmit
    }, 3000);
  };

  return (
    <section className="py-5 mx-4">
      <LoadingOverlay active={isLoading} spinner text="Loading...">

        <div className="sliderHeading d-flex justify-content-center sliderHeadingForOthers">
          <h4 className="sliderHeadingText" >Complain / Suggestion</h4>
        </div>
        <div className="container formContainer">

          <div className="row">
            <div className="col-md-6 formContainerFor">
              <label htmlFor="fname" className="formlabel">Name <sup className="sup">*</sup> :</label>
              <input type="text" id="fname" name="FullName" value={formData.FullName} onChange={handleChange} />
            </div>
            <div className="col-md-6 formContainerFor pt-3">
              <label htmlFor="mobNum" className="formlabel">Mobile Number <sup className="sup">*</sup> :</label>
              <input type="text" id="mobNum" name="MobileNumber" value={formData.MobileNumber} onChange={handleChange} />
            </div>
            <div className="col-md-6 formContainerFor pt-3">
              <label htmlFor="city" className="formlabel">City <sup className="sup">*</sup> :</label>
              <input type="text" id="city" name="City" value={formData.City} onChange={handleChange} />
            </div>
            <div className="borderBottomForForm my-3"></div>
            <div className="col-md-12 formContainerFor">
              <label htmlFor="message" className="formlabel">Message :</label>
              <textarea name="Message" id="message" cols="5" rows="2" className="txtarea" value={formData.Message} onChange={handleChange}></textarea>
            </div>
            <div className="borderBottomForForm my-3"></div>
            <div className="col-md-12 formContainerFor">
              <label htmlFor="description" className="formlabel me-2" style={{ whiteSpace: "nowrap" }}>Description :</label>
              <textarea name="Description" id="description" cols="5" rows="2" className="txtarea" value={formData.Description} onChange={handleChange}></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="formBtn" onClick={(e) => simulateLoading(e)}>Submit</button>
            </div>
          </div>
        </div>
      </LoadingOverlay>

    </section>
  )
}


export default YourProblem;

