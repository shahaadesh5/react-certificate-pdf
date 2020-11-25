import './App.css';
import ClearBrilliant from './components/ClearBrilliant/ClearBrilliant';
import Thermage from './components/Thermage/Thermage';
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Fraxel from './components/Fraxel/Fraxel';

function App() {

  return (
    <div>
      <PDFDownloadLink document={<ClearBrilliant firstName="Aadesh" lastName="Shah" />} fileName="somename.pdf">Download CB PDF</PDFDownloadLink>
      <PDFDownloadLink document={<Thermage firstName="Aadesh" lastName="Shah" />} fileName="somename.pdf">Download Thermage PDF</PDFDownloadLink>
      <PDFDownloadLink document={<Fraxel firstName="Aadesh" lastName="Shah" />} fileName="somename.pdf">Download Fraxel PDF</PDFDownloadLink>
    </div>
  );
}

export default App;
