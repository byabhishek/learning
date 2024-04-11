import React, { useState} from 'react';
import '../../css/style.css'
import upiImg from "../../img/donate.jpg"
import LoadingOverlay from 'react-loading-overlay-ts';

const ApplyMember = () => {

    const [formData, setFormData] = useState({
        FullName: '',
        MobileNumber: '',
        City: '',
        UpiMethod: 'Bank Transfer Slip',
        Gender: '',
        State: '',
        District: '',
        Email: '',
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
        formDataToSend.append('Gender', formData.Gender);
        formDataToSend.append('MobileNumber', formData.MobileNumber);
        formDataToSend.append('Email', formData.Email);
        formDataToSend.append('City', formData.City);
        formDataToSend.append('District', formData.District);
        formDataToSend.append('State', formData.State);
        formDataToSend.append('UpiMethod', formData.UpiMethod);
        formDataToSend.append('UpiUploadImg', image);
        setIsLoading(true);

        try {
            const response = await fetch('/api/v1/applyMembers', {
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
                Gender: '',
                State: '',
                District: '',
                Email: '',
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
        <div className="py-5 mx-4">
            <LoadingOverlay active={isLoading} spinner text="Loading...">
                <div className="sliderHeading  d-flex justify-content-center sliderHeadingForOthers">
                    <h4 className="sliderHeadingText">Apply Membership</h4>
                </div>
                <div className="container formContainer">
                    <div className="row">
                        <div className="col-md-6 formContainerFor">
                            <label for="Name" className="formlabel">Full Name <sup className="sup">*</sup> :</label>
                            <input type="text" id="fname" name="FullName" onChange={onInputChange} />
                        </div>
                        <div className="col-md-6 formContainerFor ">
                            <label for="cars">Gender <sup className="sup">*</sup> :</label>
                            <select id="cars formContainerFor" name="Gender" onChange={onInputChange}>
                                <option value="">Select one option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label for="State" className="formlabel">State<sup className="sup">*</sup> :</label>
                            <input type="text" id="mobNum" name="State" onChange={onInputChange} />
                        </div>
                        <div className="col-md-6 formContainerFor">
                            <label for="District" className="formlabel">District <sup className="sup">*</sup> :</label>
                            <input type="text" id="city" name="District" onChange={onInputChange} />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label for="City" className="formlabel">City <sup className="sup">*</sup> :</label>
                            <input type="text" id="city" name="City" onChange={onInputChange} />
                        </div>
                        <div className="col-md-6 formContainerFor ">
                            <label for="Mobile Number" className="formlabel">Mobile Number <sup className="sup">*</sup> :</label>
                            <input type="text" id="mobNum" name="MobileNumber" onChange={onInputChange} />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label for="City" className="formlabel">Email <sup className="sup">*</sup> :</label>
                            <input type="email" id="city" name="Email" onChange={onInputChange} />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label for="cars">Payment Mode<sup className="sup">*</sup> :</label>
                            <select id="cars formContainerFor" name="UpiMethod" onChange={onInputChange}>
                                <option value="Bank Transfer Slip">Bank Transfer Slip</option>
                                <option value="Google Pay">Google Pay</option>
                                <option value="Phonepe">Phonepe</option>
                                <option value="Amazon Pay">Amazon Pay</option>
                                <option value="Paytm">Paytm</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-6 formContainerFor ">
                            <label for="City" className="formlabel">UPI SCAN:<sup className="sup">*</sup> :</label>
                            <img src={upiImg} alt="" className="payImg" />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label for="City" className="formlabel">Payment Reciept Upload<sup className="sup">*</sup> :</label>
                            <input type="file" id="myFile" name="file_upi" className="" onChange={onFileChange} />
                        </div>
                    </div>
                    <div className="borderBottomForForm my-3"></div>
                    <div className=" d-flex justify-content-center" id="formBtn">
                        <button type="button" className="formBtn" onClick={simulateLoading} >Submit</button>
                    </div>
                </div >
            </LoadingOverlay>
        </div>


    )
}

export default ApplyMember;
