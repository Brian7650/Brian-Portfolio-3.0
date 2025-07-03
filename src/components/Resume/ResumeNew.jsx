import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Correct worker setup for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const pdf = "/Brian_Bartley_resume1.pdf"; // In public folder
const resumeImage = "https://res.cloudinary.com/ddm8ggiyi/image/upload/v1750715203/Portfolio%203.0/Brian_B_Resume_6.2.25-1_ic3b6z.png"; // Also in public folder

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        

        {/* PDF Viewer */}
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Image fallback */}
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <img 
            src={resumeImage} 
            alt="resume" 
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ddd" }}
          />
        </div>

        <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px", marginBottom: "2rem" }}
              >
                <PiDownloadSimpleThin />
                Download CV
              </Button>
            </Row>


      </Container>
    </div>
  );
}

export default ResumeNew;