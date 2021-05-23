import React, { useContext, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { UserTextData } from '../../App';

const TexttoSpeech = () => {
    const { textList, setTextList } = useContext(UserTextData);
    const [text, setText] = useState('I am a robot');
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [voiceIndex, setVoiceIndex] = useState(null);
    const onEnd = () => {
        // You could do something here after speaking has finished
    };
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
        onEnd,
    });

    const voice = voices[voiceIndex] || null;

    const styleFlexRow = { display: 'flex', flexDirection: 'row' };
    const styleContainerRatePitch = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 12,
        width: '40vw'
    };
    return (
        <section className="container h-75  mt-5 d-flex flex-column justify-content-center">
            <div>
                {
                    (!supported) ?
                        (<h3>Oh no, it looks like your browser donot support Speech Synthesis. Please download latest Chrome Browser</h3>)
                        :
                        (< div className="container-fluid bg-light border border-5 rounded w-75">
                            <h3 className="text-center pt-4">SpeechSynthesis</h3>

                            <div class="mb-3">
                                <label class="form-label">Voice</label>
                                <select
                                    className="form-control"
                                    id="voice"
                                    name="voice"
                                    value={voiceIndex || ''}
                                    onChange={(event) => {
                                        setVoiceIndex(event.target.value);
                                    }}
                                >
                                    <option value="">Default</option>
                                    {voices.map((option, index) => (
                                        <option key={option.voiceURI} value={index}>
                                            {`${option.lang} - ${option.name}`}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div style={styleContainerRatePitch}>
                                <div style={styleFlexRow}>
                                    <label htmlFor="rate">Rate: </label>
                                    <div className="rate-value">{rate}</div>
                                </div>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    defaultValue="1"
                                    step="0.1"
                                    id="rate"
                                    onChange={(event) => {
                                        setRate(event.target.value);
                                    }}
                                />
                            </div>
                            <div style={styleContainerRatePitch}>
                                <div style={styleFlexRow}>
                                    <label htmlFor="pitch">Pitch: </label>
                                    <div className="pitch-value">{pitch}</div>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="2"
                                    defaultValue="1"
                                    step="0.1"
                                    id="pitch"
                                    onChange={(event) => {
                                        setPitch(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    value={text}
                                    onChange={(event) => {
                                        setText(event.target.value);
                                    }}
                                />
                            </div>

                            {speaking ? (
                                <button type="button" className="btn btn-danger my-5 w-100" onClick={cancel}>
                                    Stop
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-success my-5 w-100"
                                    onClick={() => {
                                        speak({ text, voice, rate, pitch })
                                        
                                    }
                                    }
                                >
                                    Speak
                                </button>
                            )}
                        </div>)
                }
            </div>
        </section>
    );
};

export default TexttoSpeech;