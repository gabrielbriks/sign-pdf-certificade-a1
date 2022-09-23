import fs from 'fs'
// import { sign } from './sign'

import { sign } from 'pdf-signer-brazil'
// const fs = require('fs')
import date from "date-and-time"

describe('some tests with pdf-signer-brazil', () => {
  it('one signature without image', async () => {
    const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
    const pdfBuffer = fs.readFileSync(`./assets/example.pdf`)

    const signature = 'Gabriel Morais'
    const password = '1234'
    const now = new Date()
    
    const signedPdf = sign(pdfBuffer, p12Buffer, password, {
      reason: 'Test',
      email: 'mail@mail.com',
      location: 'City, BR',
      signerName: signature,
      annotationAppearanceOptions: {
        signatureCoordinates: { left: 20, bottom: 120, right: 190, top: 20 },
        signatureDetails: [
          {
            value: signature,
            fontSize: 5,
            transformOptions: { rotate: 0, space: 2, tilt: 0, xPos: 0, yPos: 32 },
          },
          {
            value: 'Este arquivo foi assinado digitalmente',
            fontSize: 5,
            transformOptions: { rotate: 0, space: 2, tilt: 0, xPos: 0, yPos: 25.4 },
          },
          {
            
            value: 'Assinado em ' + date.format(now,'YYYY/MM/DD HH:mm:ss'),
            fontSize: 5,
            transformOptions: { rotate: 0, space: 2, tilt: 0, xPos: 0, yPos: 18 },
          },
          {
            value: 'Verifique o arquivo em verificador.iti.gov.br',
            fontSize: 5,
            transformOptions: { rotate: 0, space: 2, tilt: 0, xPos: 0, yPos: 11 },
          },
        ]
      },
    })
    signedPdf.then(content => fs.writeFileSync('./assets/results/signed.pdf', content))









    // const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
    //   reason: '2',
    //   email: 'test@email.com',
    //   location: 'Location, LO',
    //   signerName: 'Test User',
    //   annotationAppearanceOptions: {
    //     signatureCoordinates: { left: 0, bottom: 700, right: 190, top: 860 },
    //     signatureDetails: [
    //       {
    //         value: 'Signed by: Gabriel Morais',
    //         fontSize: 7,
    //         transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
    //       },
    //       {
    //         value: 'Date: 2022-09-23',
    //         fontSize: 7,
    //         transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
    //       },
    //     ],
    //   },
    // })

    // fs.writeFileSync('./assets/results/signed.pdf', signedPdf)
  })

  // it('one signature with jpg image', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 700, right: 190, top: 860 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync('./assets/results/signed-with-image.pdf', signedPdf)
  // })

  // it('one signature with jpg image and multi page pdf', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example2.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 200, right: 190, top: 100 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync('./assets/results/signed-with-image-multi-page.pdf', signedPdf)
  // })

  // it('one signature but stamp every page', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example3.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationOnPages: [0, 1, 2],
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 200, right: 190, top: 100 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync('./assets/results/signed-all-page-stamped.pdf', signedPdf)
  // })

  // it('one signature on second page with jpg image and multi page pdf created from ms word', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example3.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationOnPages: [1],
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 200, right: 190, top: 100 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync(
  //     './assets/results/signed-on-second-page-with-image-multi-page-created-from-ms-word.pdf',
  //     signedPdf,
  //   )
  // })

  // it('one signature on last page with jpg image and multi page pdf created from ms word', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example3.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationOnPages: [2],
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 200, right: 190, top: 100 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync(
  //     './assets/results/signed-on-last-page-with-image-multi-page-created-from-ms-word.pdf',
  //     signedPdf,
  //   )
  // })

  // it('one signature on first page with jpg image and multi page pdf created from ms word', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example3.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 200, right: 190, top: 100 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync(
  //     './assets/results/signed-on-first-page-with-image-multi-page-created-from-ms-word.pdf',
  //     signedPdf,
  //   )
  // })

  // it('multiple signature with jpg image', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   let pdfBuffer = fs.readFileSync(`./assets/example.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 700, right: 190, top: 860 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync('./assets/results/signed-once.pdf', signedPdf)

  //   pdfBuffer = fs.readFileSync(`./assets/results/signed-once.pdf`)

  //   const signedPdfSecondly = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 200, bottom: 700, right: 390, top: 860 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais 2',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2019-10-13',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification.jpg',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync('./assets/results/signed-twice.pdf', signedPdfSecondly)
  // })

  // it('one signature with transparent png image', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 700, right: 190, top: 860 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification-transparent.png',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync('./assets/results/signed-with-transparent-image.pdf', signedPdf)
  // })

  // it('one signature with interlaced png image', async () => {
  //   const p12Buffer = fs.readFileSync(`./assets/pdf-signer.pfx`)
  //   const pdfBuffer = fs.readFileSync(`./assets/example.pdf`)

  //   const signedPdf = await sign(pdfBuffer, p12Buffer, 'pdfsigner', {
  //     reason: '2',
  //     email: 'test@email.com',
  //     location: 'Location, LO',
  //     signerName: 'Test User',
  //     annotationAppearanceOptions: {
  //       signatureCoordinates: { left: 0, bottom: 700, right: 190, top: 860 },
  //       signatureDetails: [
  //         {
  //           value: 'Signed by: Gabriel Morais',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
  //         },
  //         {
  //           value: 'Date: 2022-09-23',
  //           fontSize: 7,
  //           transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
  //         },
  //       ],
  //       imageDetails: {
  //         imagePath: './assets/certification-interlaced.png',
  //         transformOptions: { rotate: 0, space: 200, stretch: 50, tilt: 0, xPos: 0, yPos: 10 },
  //       },
  //     },
  //   })

  //   fs.writeFileSync('./assets/results/signed-with-interlaced-image.pdf', signedPdf)
  // })
})
