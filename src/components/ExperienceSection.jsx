import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
    {
        title: "Sr. WordPress Developer",
        company: "Calibre Media",
        logo: "/Calibre-Media-Logo.png",
        date: "Oct 2024 - Feb 2025",
        description: "Responsible for developing and maintaining websites, managing e-commerce platforms, fixing backend issues.",
    },
    {
        title: "Software Engineer Intern",
        company: "Techlogix",
        logo: "/techlogix.png",
        date: "Jun 2024 - Aug 2024",
        description: "I learned React.js and gained hands-on experience by contributing to senior developers’ projects.",
    },
    {
        title: "WordPress Developer",
        company: "Systechware",
        logo: "/systechware.png",
        date: "May 2023 - May 2024",
        description: "Creating and maintaining websites, managing full-scale e-commerce platforms, adding products, and fixing bugs in backend code and phpMyAdmin.",
    },
    {
        title: "Software Engineer Intern",
        company: "Developer's Alley",
        logo: "/DevelopersAlley.png",
        date: "May 2023 - May 2024",
        description: "Completed courses in HTML, CSS, JavaScript, and React, built small JavaScript projects, and gained hands-on experience on a React project with a senior developer",
    },
];

const ExperienceSection = () => {
    return (
        <div className="text-white py-16 px-4">
            <div className="text-center pb-10">
                <h1 style={{ fontSize: '58px', textShadow: '1px 1px 6px white' }}>Work <span className="spanText">Experience</span></h1>
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
                        <h3 className="vertical-timeline-element-title text-lg font-bold">{exp.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle" style={{ color: "var(--light-purple)", fontSize: '20px' }}>{exp.company}</h5>
                        <p className="text-sm">{exp.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default ExperienceSection;
