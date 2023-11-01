import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Image {
    id: number;
    teamimg: string;
    fname5: string
    firstName:string
}

export default function AboutTeam() {
    const [imagesAboutTeam, setimagesAboutTeam] = useState<Image[]>([]);
    console.log(imagesAboutTeam)
    const getUserData5 = async () => {
        const res2 = await axios.get("https://pratik-agro-backend.vercel.app/getAboutTeamImg", {
            headers: {
                "Content-Type": " application/json",
            },
        });
        if (res2.data.status === 401 || !res2.data) {
            console.log("error");
        } else {
            setimagesAboutTeam(res2.data.getImage);
        }
    };
    useEffect(() => {
        getUserData5();
    }, []);
    return (
        <div className='container bgmiddletext'>
            <div>
                <b><h2 className='ourproduct container '>Team</h2></b>
            </div>


            <div>
                <h1 className=' container mt-5  '>Key people in Pratik Agro Export</h1>
            </div>

            <div className="container">
                <div className="row g-5 mt-5">
                    {
                        imagesAboutTeam.map((el,index) => {
                            return (
                                <>
                                    <div className="col-md-4" >
                                        <div className="card border-0 text-center bg-transparent">
                                            <a href="#"> <img src={el.teamimg} className="card-img-top img-fluid" alt="..." style={{ "width": "12rem" }} /></a>
                                            <div className='text-center'>
                                                <h2> {el.firstName}</h2>
                                                <p>{el.fname5}</p>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }



                </div>
            </div>


        </div>
    )
}
