// SpeakerList.js

import React from 'react';
import './speakerlist.css'; // Adjust the path as per your file structure
import Speakers from './speakers'; // Assuming Speakers component exists

function SpeakerList() {
    // Example data for demonstration
    const speakers = [
        { name: 'Speaker 1', institute: 'Institute A', image: 'https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg' },
        { name: 'Speaker 2', institute: 'Institute B', image: 'https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg' },
        { name: 'Speaker 3', institute: 'Institute C', image: 'https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg' },
        { name: 'Speaker 4', institute: 'Institute D', image: 'https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg' },
        { name: 'Speaker 5', institute: 'Institute E', image: 'https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg' },
        { name: 'Speaker 6', institute: 'Institute F', image: 'https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg' },
    ];

    return (
        <div className="speaker-list">
            <div className="list">
                {speakers.map((speaker, index) => (
                    <Speakers
                        key={index}
                        name={speaker.name}
                        institute={speaker.institute}
                        image={speaker.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default SpeakerList;
