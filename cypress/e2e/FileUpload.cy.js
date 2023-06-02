
import 'cypress-file-upload';

describe("File Uploads", ()=> {


    it('Single File Upload',() => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('dummy.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
     
    });

    it('File Upload - Renaming file',() => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'dummy.pdf', fileName:'myfile.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000)

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    });


    it('File Upload - Drag and Drop',() => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('pdf-sample.pdf', {subjectType:'drag-n-drop'})
        cy.wait(5000)
          cy.contains('pdf-sample.pdf')

    });


    it('File Upload - Uploading multiple files',() => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile( ['pdf-sample.pdf', 'dummy.pdf'])
         
         cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')

        
    });


    it('File Upload - Shadow Dom',() => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        

        
    });

});