import React, { useState } from 'react';
import  Button  from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form"; 
import tattoosService from '../Services/tattoos';

export default function BookingForm(){
    const [full_name, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [eMail, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [body_part, setBodyPart] = useState('');
    const [file, setFile] = useState(new File([],""));
    

    // const handleUploadSubmited = event => {
    //     event.preventDefault();
       
    //     let newBookingInfo ={

    //         full_name: full_name,
    //         phone: phone,
    //         eMail: eMail,
    //         body_part: body_part,
    //         description: description,
    //         picture: file
    //     } 
    //     uploadHandler(newBookingInfo);
    // };
    
    // //Handle async request for booking from clients sent to api.
    // const uploadHandler = async(newBookingInfo)=>{
    //     try{
    //         let res = await tattoosService.create(newBookingInfo);
    //         alert(res.data);          
    //         console.log(`Added: `+res.data);
    //     }
    //     catch(e){
    //        alert(e);
    //     }
    // }
 
    //on input change takes in the new choosen file and set it to state.
    //then creates form data including the file to send.
    // const fileUploadHandler = e =>{
    //     setFile(e.target.files[0]);
    //     const formData = new FormData();
    //     formData.append('file', e.target.files[0]);
    //     uploadImage(formData);
    // };

    // Async function takes formData as arg, picture set to formData.file. 
    // Sends Post request, to 'api/tattoos/' with formData in request body. 
    // const uploadImage = async(formData)=>{
    //     try{
    //         let res = await tattoosService.uploadImage(formData);
    //         console.log(res.data);
    //         setFile(res.data);
    //     }
    //     catch(e){
    //         alert(e);
    //     };
    // };
   
    //Validations function, blocking the 'sent' button on UI so email can be sent only if the form field are not empty.
    function validateForm () {
        return description.length > 0 && phone.length > 0 && eMail.length > 0 && full_name.length > 0;
    };
    return(
        <>
            <div className="booking-form container">
                <Form  action="https://submit-form.com/LEW7uvWb">
                    <Form.Label className ='bookingForm'>
                        <h4>:לפגישת יעוץ וקביעת תור יש למלא את הפרטים הבאים</h4>
                    </Form.Label>
                    <Form.Group controlId='fullname'>
                        <h3>שם מלא</h3>
                        <Form.Control
                            name="name" 
                            type="text"
                            value={full_name}
                            onChange={e => setFullName(e.target.value)}
                        />
                    </Form.Group>    
                    <Form.Group controlId='phone'>
                        <h3> מספר טלפון</h3>
                        <Form.Control
                            name='phone'
                            type="text"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='phone'>
                        <h3> כתובת מייל</h3>
                        <Form.Control
                            type="text"
                            name="email"
                            value={eMail}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>                
                    <Form.Group controlId='bPart'>
                        <h3> איזור בגוף בו תרצה/י להתקעקע</h3>
                        <Form.Control
                            type="text"
                            name="bodyPart"
                            value={body_part}
                            onChange={e => setBodyPart(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <h3> תאר/י את הרעיון לקעקוע</h3>
                        <Form.Control 
                            type="text"
                            name="TattooIdea"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    {/* <Form.Group controlId='photo'>
                        <h3>אנא בחר קובץ אחד לפחות..</h3>
                        <input
                            className="file-input"
                            type="file"
                            accept='.jpg, .png, .jpeg'
                            onChange={e => fileUploadHandler(e)}
                        />
                    </Form.Group> */}
                    <Button className="send-btn" disabled={!validateForm()} type="submit">
                        !שלח
                    </Button>
                </Form>
            </div>
            <br/>
        </>
    )
}