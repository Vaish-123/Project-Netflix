class ResponseMessages {
  static loginSuccess = "Login successful";
  static badRequest = "Bad Request";
  static multipleUsersFound = "Multiple users found";
  static userNotFound = "User not found";
  static passwordIncorrect = "Password incorrect";
  static registrationSuccess = "User registered successfully";
  static logoutSuccess = "Logged out succesfully";
  static userAlreadyExists = "User with same email already exists";
  static valueNull = "Email/password cannot be null";
  static MultipleErrorsOccured = "Multiple errors occured";
}

class EmailSettings {
  static senderAddress = "vaishnavnampoothiri@outlook.com";
  static senderPassword = "Voltric2";
  static FailedMessage = "Failed to send email. Please contact support."
  static SupportEmailAddress = "support@netflixclone.com";
}

class EmailContent {
  static Subject = "Welcome to Netflix Clone";
  static WelcomeMessage = "Finish signing up to watch";
  static GettingStartedUrl = "http://localhost:3000/signup";
  static FinishSignupButton = `<div class="buttonDiv"><a class="finishSignupButtonText" href="${this.GettingStartedUrl}"><button class="finishSignupButton">Finish Signing Up</button></a></div>`
  static LearningPurposetext = `<div class="learningPurposetext"><small>** This application is a learning and development project intended to replicate the functionalities of Netflix for educational purposes. The entire application, including its components such as emails and any related items, is created solely for educational and practice use and is NOT intended for commercial purposes or for public release. All content used or developed within this project is for educational and non-commercial use only.</small></div>`
  static BodyText = `<div class="mainBody"><p>Hiya,<br/><br/>Welcome to Netflix! We're glad to have you. Finish signing up to watch today's hottest TV programmes & films. Plans start at ₹149/month.</p><br/>${this.FinishSignupButton}<br/><br/></div>${this.LearningPurposetext}`
  static Header = `<header class="header"><h1>${this.WelcomeMessage}</h1></header>`;
  static Footer = `<footer class="footer">
  <div class="footerDiv">
  <span>®All copyrights reserved to Vaishnav. ©This product uses the TMDB API but is not endorsed or certified by TMDB.</span><br/><br/>
  <span>Contact us at <a href="mailto:${EmailSettings.SupportEmailAddress}">${EmailSettings.SupportEmailAddress}</a></span>
  </footer>`;
  static styles = `
  .header {
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
    color: #4a4d4b;
  }
  .mainBody {
    padding: 20px;
    font-family: Arial, sans-serif;
    font-size: 17px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .footer {
    padding: 20px;
    background-color: #f9f9f9;
    color: #666;
  }
  .footerDiv {
    text-align: center;
  }
  .finishSignupButton {
    background-color: #e50914;
    border: solid 1px #e50914;
    font-weight: 700;
    border-radius: 4px;
    text-align: center;
    padding: 13px 0 13px 0;
    width: 30%;
    font-size: 14px;
    display: inline-block;
    color: #fff
  }
  .finishSignupButton:hover {
    cursor: pointer !important;
  }
  .finishSignupButtonText {
    text-decoration: none;
  }
  .buttonDiv {
    text-align: center;
  }
  .learningPurposetext {
    font-family: Arial, sans-serif;
    color: #727171;
    margin-bottom: 5px;
  }
  `
  // input[type=submit]:hover {
  //   opacity: 0.8;
  // }
}

const EmailInstance = { ...EmailSettings, ...EmailContent }

module.exports = { ResponseMessages, EmailInstance };
