DEMO: https://image-to-pdf-react.vercel.app

Image to PDF Converter
Image to PDF Converter is a React application that allows users to upload images, customize PDF settings such as paper size, margin size, and image positioning, and download the images as a PDF file.

Features
Upload multiple images.
Customize paper size (A4, Letter, Legal, Executive).
Adjust margin size (Normal, Narrow, Moderate).
Choose image position (Top, Center, Bottom, Cover, Stretch).
Download the final PDF containing all uploaded images.
Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher recommended)
npm (comes with Node.js)
Installation
Clone the repository:

git clone https://github.com/asadullahbd/IMAGE-TO-PDF-REACT.git

Navigate to the project directory:

cd image-to-pdf

Install the dependencies:

npm install

Usage
Development Mode
To start the development server:

npm run dev

The application will be available at http://localhost:3000.

Build for Production
To create a production-ready build:

npm run build

Serve the build locally using:

npm run preview

Linting
To lint the codebase:

npm run lint

Project Structure
src/: Contains the source code.
App.jsx: Main application logic.
ImgToPdf.jsx: Component to handle image uploading, PDF generation, and customization options.
package.json: Project metadata and dependencies.
Dependencies
Production
React: JavaScript library for building user interfaces.
Bootstrap: Styling framework for responsive designs.
React-Bootstrap: Bootstrap components built for React.
jsPDF: Library for generating PDF documents.
Development
Vite: Fast build tool for modern web projects.
ESLint: Linter for identifying and fixing problems in JavaScript code.
Various React and TypeScript type definitions.
How to Use the Application
Start the application using the instructions above.
Upload one or more images using the "Upload Images" input field.
Choose your desired paper size, margin size, and image position.
Click the "Download PDF" button to generate and download the PDF.
Customization Options
Paper Size:
A4
Letter
Legal
Executive
Margin Size:
Normal
Narrow
Moderate
Image Position:
Top
Center
Bottom
Cover
Stretch
Author
Asad

License
This project is licensed under the MIT License.

Feedback
If you encounter any issues or have suggestions, feel free to open an issue or create a pull request. Contributions are welcome!