import Slider from "react-slick";
import ProjectCards from "./ProjectCards";
import chatify from "../../assets/projects/chatify.webp";

const projects = [
    {
        img: chatify,
        title: "Portfolio",
        images: ["vite.svg", "react.svg", "javascript.svg", "threejs.svg", "tailwind.svg", "vercel.svg"],
        text: "Personal portfolio showcasing Aliyan's software development work and skills. Features responsive design, smooth animations, dynamic content, and social media integration.",
        ghLink: "https://github.com/aliyannn/aliyan-portfolio",
        demoLink: "https://aliyannn.vercel.app/"
    },
    {
        img: chatify,
        title: "Digi Dukaan",
        images: ["wordpress.svg", "woocommerce.svg", "elementor.svg", "php.svg", "mysql.svg", "nginx.svg"],
        text: "Multi-vendor eCommerce platform built for Pakistanis. Features include user-friendly vendor dashboards, secure checkout, product management, and responsive design optimized for mobile and desktop.",
        ghLink: "",
        demoLink: "https://digi-dukaan.com/"
    }
];

const ProjectsCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="w-full px-4 pt-10">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCards
                            img={project.img}
                            title={project.title}
                            text={project.text}
                            images={project.images}
                            ghLink={project.ghLink}
                            demoLink={project.demoLink}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectsCarousel;
