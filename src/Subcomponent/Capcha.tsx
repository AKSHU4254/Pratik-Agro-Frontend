import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import captchaImg from "../../public/images/captchaImg.png";

function generateString(length: number) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export interface capchaProp {
   isVerified:boolean,
   setIsVerified:Dispatch<SetStateAction<boolean>>
  }
  
//function Captcha(props) {
    const Captcha = ({ isVerified, setIsVerified}: capchaProp ) => {
    const [captcha, setcaptcha] = useState('');
   
    useEffect(() => {
        setcaptcha(generateString(6));
    }, [])

    const refreshCaptcha = () => {
        setcaptcha(generateString(6));
    };


    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        var element = document.getElementById("successBTN")! as HTMLButtonElement;
        var inputData = document.getElementById("inputType") as HTMLInputElement;
        element.style.cursor = "wait";
        element.innerHTML = "Checking...";
        inputData.disabled = true;
        element.disabled = true;

        if (captcha == inputData.value) {
            element.style.backgroundColor = "green";
            element.innerHTML = "Captcha Verified";
            element.disabled = true;
            element.style.cursor = "not-allowed";
            inputData.style.display = "none";
            setIsVerified(true);
        } else {
            element.style.backgroundColor = "red";
            element.style.cursor = "not-allowed";
            element.innerHTML = "Not Matched";
            element.disabled = true;
            //  element.disabled = true;
            var myFunction = function () {
                element.style.backgroundColor = "#007bff";
                element.style.cursor = "pointer";
                element.innerHTML = "Verify Captcha";
                element.disabled = false;
                inputData.disabled = false;
                 inputData.value = "";
            };
            setTimeout(myFunction, 5000);
        }

    };

    return (
        <div className="container">
            <div className=" mt-4 ">
                <div className="d-flex gap-2">
                    <h4 id="captcha" className='pt-2 px-2 text-center' style={{ position: "absolute", width: "100px" }} >{captcha}</h4>
                    <img src={captchaImg} className="img-fluid" height="50px" width={"100px"} />
                    <input type="text" id="inputType" placeholder="Enter Captcha" name="username" className='form-control' autoComplete='off' />
                    <button type="button" id="successBTN" onClick={onSubmit} className="btn btn-primary ml-1">Verify&nbsp;Captcha</button>
                </div>
                <div>
                    <p className='mt-2 text-center'>
                        Can't read the image?
                        <Link to='' onClick={refreshCaptcha}>
                            Click Here
                        </Link>{' '}
                        to Refresh
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Captcha;