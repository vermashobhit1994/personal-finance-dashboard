"use client";

import React from 'react'
import { PDFExtract } from 'pdf.js-extract';

export default function SpendingCategory() {
  const onFileUpload = (ev) => {
    console.log(ev)

    // Step1 - Extract data from pdf
    // const pdfExtract = new PDFExtract();
    // const options = {};
    // pdfExtract.extract('test.pdf', options, (err, data) => {
    //   if (err) return console.log(err);
    //   console.log(data);
    // });


  }

  return (
    <input type="file" name="" id="" onChange={onFileUpload} />
  )
}
