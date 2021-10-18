import React from 'react';
import { Document } from 'react-pdf';

function Resume(props) {
    return (
        <div>
            <a href='/somefile.txt' download>Click to download</a>
            <Document
            file = ""
            onLoadSuccess = {this.onDocumentLoadSuccess}
            >
                Click here to download resume
            </Document>
        </div>
    );
}

export default Resume;