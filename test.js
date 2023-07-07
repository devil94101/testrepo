const express = require('express');
const { PDFDocument } = require('pdf-lib');
const ejs = require('ejs');
const fs = require('fs');

const app = express();
const port = 5000;

app.get('/download-pdf', async (req, res) => {
  try {
    const pdfDoc = await createPdf();

    // Set response headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');

    // Send the PDF as the response
    res.send(await pdfDoc.save());
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
});

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();

  const templateFilePath = 'testTemp.ejs'; // Replace with the path to your EJS template file

  let url = 'https://assets.zyod.com/cdn-cgi/imagedelivery/Rz4WhkFQk9C3zZCls6gfAA/1688641706124_1055_MONIKA.jpg/model'
  let imgArray = []
  for(let i=0;i<1;i++){
    imgArray.push([url,url,url,url])
  }

  const data = { name: 'John Doe', email: 'john.doe@example.com', imgArray }; // Replace with your data

  const templateContent = fs.readFileSync(templateFilePath, 'utf-8');
  const renderedHtml = ejs.render(templateContent, data);

  const svg = await pdfDoc.embedSvg(renderedHtml);
  const svgDims = svg.scale(1).width(width).height(height);
  page.drawSvg(svgDims);

  return pdfDoc;
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});