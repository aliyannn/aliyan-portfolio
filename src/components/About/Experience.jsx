import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
    {
        title: "Software Engineer",
        company: "Equinox Devs",
        logo: "experience/equinoxdevs.webp",
        date: "Sept 2024 - June 2025",
        techstack: ["react.svg", "vite.svg", "javascript.svg", "threejs.svg", "tailwind.svg"],
        description: "Developed interactive and responsive userinterfaces using React.JS forreal-time dashboards, landing pages, and product websites. Created reusable UI components, integrated 3D elements. Ensured pixel-perfect design implementation and optimized frontend performance.",
    },
    {
        title: "Software Engineer Intern",
        company: "Techlogix",
        logo: "experience/techlogix.webp",
        date: "June 2024 - Aug 2024",
        techstack: ["react.svg", "vite.svg", "javascript.svg", "tailwind.svg"],
        description: "I learned React.js and gained hands-on experience by contributing to senior developers’ projects.",
    },
    {
        title: "WordPress Developer",
        company: "Systechware",
        logo: "experience/systechware.webp",
        date: "May 2023 - May 2024",
        techstack: ["php.svg", "wordpress.svg", "woocommerce.svg", "shopify.svg", "nginx.svg", "mysql.svg", "elementor.svg"],
        description: "Creating and maintaining websites, managing full-scale e-commerce platforms, adding products, and fixing bugs in backend code and phpMyAdmin.",
    },
    {
        title: "Software Engineer Intern",
        company: "Developer's Alley",
        logo: "experience/DevelopersAlley.webp",
        techstack: ["react.svg", "javascript.svg", "tailwind.svg"],
        date: "July 2022 - Sept 2022",
        description: "Completed courses in HTML, CSS, JavaScript, and React, built small JavaScript projects, and gained hands-on experience on a React project with a senior developer",
    },
];

const Experience = () => {
    return (
        <div className="text-white">
            <div className="text-center pb-10 workExperience">
                <h1>Work <span className="spanText">Experience</span></h1>
                <p className="text-xl">Some of my recent work experience</p>
            </div>
            <VerticalTimeline>
                {experiences.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1d1836", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f2937" }}
                        date={exp.date}
                        iconStyle={{
                            background: "#050816",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        icon={
                            <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-[90%] h-[90%] object-contain rounded-full"
                            />
                        }
                    >
                        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle" style={{ color: "var(--light-purple)", fontSize: '20px' }}>{exp.company}</h5>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {exp.techstack?.map((icon, idx) => (
                                <div key={idx} className="w-8 h-8 p-1 flex items-center justify-center hover:scale-110 transition">
                                    <img
                                        src={`/${icon}`}
                                        alt={icon}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm">{exp.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
