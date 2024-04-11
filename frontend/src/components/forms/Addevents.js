import React, {useState} from 'react'
import '../../css/style.css'
import Agri from '../../img/agri.png'
const Addevents = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:4009/api/v1/upcomingevents", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ imgUrl: "Agri", cardTitle: title, Description: desc })
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Data saved successfully!..", data);
            } else {
                console.error("Data failed to save:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <div class="pt-5 mt-5">
            <div class="container-fluid mx-0 px-0 mt-5">
                <div class="row d-flex justify-content-center">
                    <div class=" card col-sm-5 pt-5" >
                        <div class="row justify-content-center">
                            <div class="col-md-6 formContainerForLogin mb-5 d-flex flex-column">
                            <input type="hidden" id="imgUrl" name="imgUrl" value={Agri} />
                                <label for="Name" class="formlabel">Title</label>
                                <input type="text" id="cardTitle" name="cardTitle" 
                                onChange={(e) => setTitle(e.target.value)} value={title}/>
                                <label for="Name" class="formlabel">Description</label>
                                <textarea id="Description" name="Description" 
                                onChange={(e) => setDesc(e.target.value)} value={desc}/>
                                <button type="button" className="formBtn" onClick={handleLogin}>Add Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addevents;
