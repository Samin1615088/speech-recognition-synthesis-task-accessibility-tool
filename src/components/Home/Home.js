import React from 'react';

const Home = () => {
    return (
        <section className="container h-100">
            <div className="text-center h-100">
                <h1 className="fw-bold">Welcome to the Speech Recognition and Synthesis App</h1>
                <textarea id='text-box' className="w-100">This is a text area</textarea>
            </div>
        </section>
    );
};

export default Home;