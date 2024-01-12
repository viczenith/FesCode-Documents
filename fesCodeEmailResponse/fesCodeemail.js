function sendEmail(e) {
    // Get respondent's name and email from the form response
    var respondentName = e.values[1]; // Adjust the index based on your form fields
    var respondentEmail = e.values[2]; // Adjust the index based on your form fields
    var respondentCourseSelections = e.values[7]; // Adjust the index based on your form fields
  
    // Create HTML content
    var htmlOutput = `
      <img style="margin: 2rem 0;" src="https://github.com/viczenith/FesCode-Documents/blob/master/feslogo.png?raw=true" width="100px"> 
  
      <h1 style="margin-top: 0;">Hi, <span id="respondentName">${respondentName}</span></h1>
  
      <p style="margin-top: 0;">Welcome to <strong>FesCode</strong>, An Online Learning Platform</p>
      <p>Your registration has been received. We have received your course records.</p>
      <p>Here is the list of courses you want to learn after your free Python course.
      <br><i><strong id="respondentCourseSelections">${respondentCourseSelections}</strong></i>
      </p>
  
      <p><strong>This is a free certicate course </strong></p>
  
      <p><strong>Note: </strong>FesCode's Intermediate and Advanced levels of your selected course(s) are paid, except for the Beginner level, which is 100% free.</p>
  
      <p><strong><a href="https://docs.google.com/document/d/1DHlQO9VDxV2SIrSUAWrT7eIF_6UNyy4W1SeUI4AxrYY/edit?usp=sharing">Click to Download Course Overview</a></strong></p>
  
      <p><strong><a href="https://wa.me/message/64E2XVGXYQ4AD1">Click to send us a WhatsApp message for more information.</a></strong></p>
  
      <p>Thank You</p>
      <h1>FesCode, Abuja</h1>
    `;
  
    // Create and send email with HTML content
    GmailApp.sendEmail(
      respondentEmail,
      "Your Registration is Submitted Successfully",
      "",
      { htmlBody: htmlOutput }
    );
  }