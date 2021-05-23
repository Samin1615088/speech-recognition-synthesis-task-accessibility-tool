import React, { useContext, useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import { UserTextData } from '../../App';

const SpeechtoText = () => {
    const {textList, setTextList} = useContext(UserTextData);
    const [value, setValue] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setValue(result);
        },
    });

    return (
        <section className="container h-75  mt-5 d-flex flex-column justify-content-center">
            < div className="container-fluid p-5 bg-light border border-5 rounded w-75">
                <h3 className="text-center ">Speech Recognition</h3>
                <label className="form-label">Your Speech is here</label>
                <textarea
                    rows={3}
                    className="form-control"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <button onMouseDown={listen} onMouseUp={stop} className="btn btn-outline-success w-25 my-4 text-uppercase">
                    Hold Me 🎤
                </button>
                {listening && <div>Go ahead I'm listening</div>}
            </div>
        </section>
    );
};

export default SpeechtoText;