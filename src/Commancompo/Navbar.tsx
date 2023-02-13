export interface INavbar { }

const Navbar: React.FunctionComponent<INavbar> = (props: any) => {
    return (
        <>


                <div className="d-flex justify-content-between bg-dark text-white px-2 sticky-top">
                    <div className="">
                        <p className="Navtext text-white bg-dark">Call us: +91 99981 98011, +91 74339 55222</p>

                    </div>
                    <div className="flex-container">

                        <div>
                            <i className="bi bi-twitter"></i>
                        </div>
                        <div>
                            <i className="bi bi-linkedin "></i>
                        </div>
                        <div>
                            <i className="bi bi-facebook  "></i>
                        </div>
                    </div>

                </div>



           

        </>
    )
}

export default Navbar;
