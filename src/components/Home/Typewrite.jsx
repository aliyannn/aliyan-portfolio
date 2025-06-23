import React from 'react'
import Typewriter from 'typewriter-effect'

function Typewrite() {
    return (
        <div className="text-4xl font-bold font-mono inline-block" style={{ color: '#cd5ff8' }}>
            <Typewriter
                options={{
                    strings: [
                        "Software Developer",
                        "Frontend React Developer",
                        "Freelancer",
                        "WordPress Developer",
                        "Shopify Developer",
                        "Business Developer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                    cursor: '_'
                }}
            />
        </div>
    )
}

export default Typewrite
