import React, { useState } from 'react';
import donateImg from "../../img/donate.jpg";
import LoadingOverlay from 'react-loading-overlay-ts';

const Donate = () => {
    const [formData, setFormData] = useState({
        FullName: '',
        MobileNumber: '',
        City: '',
        UpiMethod: 'Bank Transfer Slip',
        Description: ''
    });
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async () => {
        const formDataToSend = new FormData();
        formDataToSend.append('FullName', formData.FullName);
        formDataToSend.append('MobileNumber', formData.MobileNumber);
        formDataToSend.append('City', formData.City);
        formDataToSend.append('UpiMethod', formData.UpiMethod);
        formDataToSend.append('Description', formData.Description);
        formDataToSend.append('UpiUploadImg', image);
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:4009/api/v1/donate', {
                method: 'POST',
                body: formDataToSend,
            });
            const data = await response.json();
            console.log(data);
            setFormData({
                FullName: '',
                MobileNumber: '',
                City: '',
                UpiMethod: 'Bank Transfer Slip',
                Description: ''
            });
            setImage(null);
            document.getElementById('myFile').value = '';
        } catch (error) {
            console.error('Error submitting donation:', error);
        } finally {
            setIsLoading(false);
        }
    };
    const simulateLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            onSubmit();
        }, 3000);
    };

    return (
        <div>
            <LoadingOverlay active={isLoading} spinner text="Loading...">
                <div className="sliderHeading d-flex justify-content-center sliderHeadingForOthers">
                    <h4 className="sliderHeadingText " style={{ marginTop: 180 }}>Donate</h4>
                </div>
                <div className="container formContainer ">
                    <div className='row'>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="fname" className="formlabel">Name <sup className="sup">*</sup> :</label>
                            <input type="text" id="fname" name="FullName" onChange={onInputChange} value={formData.FullName} />
                        </div>
                        <div className="col-md-6 formContainerFor pt-3">
                            <label htmlFor="mobNum" className="formlabel">Mobile Number <sup className="sup">*</sup> :</label>
                            <input type="text" id="mobNum" name="MobileNumber" onChange={onInputChange} value={formData.MobileNumber} />
                        </div>
                        <div className="col-md-6 formContainerFor pt-3">
                            <label htmlFor="city" className="formlabel">City <sup className="sup">*</sup> :</label>
                            <input type="text" id="city" name="City" onChange={onInputChange} value={formData.City} />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="cars" className="formlabel">Payment Mode<sup className="sup">*</sup> :</label>
                            <select id="cars" className="formContainerFor" name="UpiMethod" onChange={onInputChange} value={formData.UpiMethod}>
                                <option value="Bank Transfer Slip">Bank Transfer Slip</option>
                                <option value="Google Pay">Google Pay</option>
                                <option value="Phonepe">Phonepe</option>
                                <option value="Amazon Pay">Amazon Pay</option>
                                <option value="Paytm">Paytm</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="city" className="formlabel">UPI SCAN:<sup className="sup">*</sup> :</label>
                            <img src={donateImg} alt="" className="payImg" />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="myFile" className="formlabel">Payment Receipt Upload<sup className="sup">*</sup> :</label>
                            <input type="file" id="myFile" name="file_donation_upi" onChange={onFileChange} accept=".jpg, .jpeg, .png, .pdf" />
                        </div>
                        <div className="borderBottomForForm my-3 pt-3"></div>
                        <div className="col-md-12 formContainerFor">
                            <label htmlFor="description" className="formlabel">Description :</label>
                            <textarea name="Description" id="description" cols="5" rows="2" className="txtarea" onChange={onInputChange} value={formData.Description}></textarea>
                        </div>
                        <div className="borderBottomForForm my-3"></div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="formBtn" onClick={simulateLoading}>Submit</button>
                        </div>
                    </div>
                </div>
            </LoadingOverlay>

        </div>
    );
};

export default Donate;
