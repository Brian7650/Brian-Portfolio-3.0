import React, { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs"; // or use CDN if local one fails
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download Button - Top */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/Brian_Bartley_resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            Download CV
          </Button>
        </Row>

        {/* PDF Viewer with error logging */}
        <Row className="resume">
          <Document
            file="/Brian_Bartley_resume.pdf"
            className="d-flex justify-content-center"
            onLoadError={(error) => console.error("PDF Load Error:", error)}
            onSourceError={(error) => console.error("PDF Source Error:", error)}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Download Button - Bottom */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/Brian_Bartley_resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
