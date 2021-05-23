import React, { useContext } from 'react';
import { UserTextData } from '../../App';


const Home = () => {
    const {textList, setTextList} = useContext(UserTextData);
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <section className="container h-75  mt-5 d-flex flex-column justify-content-center">
            < div className="container-fluid p-5 bg-light border border-5 rounded w-75">
                <h3 className="text-center">Search Your Previous Text</h3>
                <input type="text" className="form-control" placeholder="search here" onChange={handleChange} />
            </ div>
        </section>
    );
};

export default Home;

