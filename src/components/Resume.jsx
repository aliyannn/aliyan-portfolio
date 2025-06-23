import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Resume = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const resumeURL = "/Aliyan-Gohar-Resume-Software-Engineer.pdf";

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-10 animate-fadeIn">
            <a
                href={resumeURL}
                download
                className="mb-6 flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-5 rounded shadow transition duration-300"
            >
                <AiOutlineDownload size={20} />
                Download Resume
            </a>

            <div className="bg-white shadow-xl rounded-md p-4 w-full max-w-5xl animate-slideUp text-black">
                <Document
                    file={resumeURL}
                    loading={<p className="text-center text-gray-500">Loading PDF...</p>}
                >
                    <Page
                        pageNumber={1}
                        scale={width > 786 ? 1.5 : 0.6}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </div>
        </div>
    );
};

export default Resume;
