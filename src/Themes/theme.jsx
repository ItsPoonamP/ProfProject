import './theme.css'

function Theme() {

    return (
        <>
            <div className="sponsor">
                <div className="blueLine"></div>
                <div className="textS"><p>THEMES</p></div>
                <div className="blueLine"></div>
            </div>
            <div className="theme-container">
                <div className="themes">
                    <h2> Quantum Materials</h2>
                    <ul>
                        <li>Quantum structures <span style={{ fontSize: "0.8em" }}>(Quantum dots, Nanorods, Nanosheets)</span></li>
                        <li>Quantum Energy Materials</li>
                        <li>Quantum Sensing Materials</li>
                        <li>Semiconductor Quantum Materials</li>
                        <li>Quantum Electronic Materials</li>
                        <li>Spin Active Materials</li>
                        <li>Computational Quantum Materials</li>
                        <li>Two Dimensional Materials</li>
                    </ul>
                </div>
                <div className="themes">
                    <h2>Quantum Devices</h2>
                    <ul>
                        <li>Spintronic Devices</li>
                        <li>Quantum and Spin Photonics</li>
                        <li>Emerging Quantum Devices</li>
                        <li>Single Electron Devices</li>
                        <li>Interferometric Devices</li>
                        <li>Quantum Heterostructure Devices</li>
                        <li>Quantum Architectures</li>
                    </ul>
                </div>
                <div className="themes">
                    <h2>Quantum Systems</h2>
                    <ul>
                        <li>Atomic Heat Engineering</li>
                        <li>Quantum Sensors and Atomic Clocks</li>
                        <li>Quantum Entangled System</li>
                        <li>Quantum Communication and Information theory</li>
                        <li>Quantum Machine Learning</li>
                        <li>Ultra-Fast Processes</li>
                        <li>Ultra Cold atoms: Systems and Dynamics</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Theme;