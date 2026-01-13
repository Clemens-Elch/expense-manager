import viteLogo from '../assets/vite.svg'

const About = () => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className=" text-center col-8">
                    <div className="pt-4">
                        <img src={viteLogo} className="logo" alt="Vite Logo"/>
                    </div>
                    <h1 className = "fw-bold">Expense Manager</h1>
                    <div className="pt-4">
                        <h3 className = "fw-bold py-4">About</h3>
                      <p> About this Expense Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;