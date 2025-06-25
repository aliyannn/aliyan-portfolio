import Typewriter from 'typewriter-effect'

function Typewrite() {
    return (
        <div className="text-4xl font-bold inline-block typewriter" style={{ color: '#cd5ff8' }}>
            <Typewriter
                options={{
                    strings: [
                        "Software Developer",
                        "React Developer",
                        "Freelancer",
                        "WordPress Developer",
                        "Shopify Developer"
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
