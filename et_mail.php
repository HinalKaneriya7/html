<?php
  session_start();
  // require_once("mail_classes/class.phpmailer.php");

  $name = $_REQUEST['name'];
  $from= $_REQUEST['email'];
  $etsubject= $_REQUEST['subject'];
  $how_can = $_REQUEST['radio313'];
  $yourmessage= $_REQUEST['your-message'];
  $headers = "From: mgt.encircle@gmail.com\r\n";
  $headers .= 'Reply-To: ' .$from. "\r\n" ;
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $to = "mgt.encircle@gmail.com";
  $subject = "Contact Us | Encircle Technologies";
  
  $htmlContent = '<html>
  <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="background-color: #f6f6f6; width: 100%;">
      <tr>
        <td>&nbsp;</td>
        <td style="display: block; margin: 0 auto !important; max-width: 700px; padding: 10px; width: 700px;">
          <div style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 700px; padding: 10px;">
            <table role="presentation" style="background: #ffffff; border-radius: 3px; width: 100%;">
        
              <tr>
              <td style="box-sizing: border-box; padding: 20px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              <tr>
              <td><p>Hello,<br/><br/>Thank you for contacting us.</p>
               <table style="padding: 12px;">
                <tr><td style="padding: 5px;vertical-align: top;line-height: 20px;width: 170px;">Name: </td><td style="padding: 5px;vertical-align: top;line-height: 20px;">'.$name.'</td></tr>
                <tr><td style="padding: 5px;vertical-align: top;line-height: 20px;width: 170px;">Subject: </td><td style="padding: 5px;vertical-align: top;line-height: 20px;">'.$etsubject.'</td></tr>
                <tr><td style="padding: 5px;vertical-align: top;line-height: 20px;width: 170px;">From: </td><td style="padding: 5px;vertical-align: top;line-height: 20px;">'.$from.'</td></tr>
                <tr><td style="padding: 5px;vertical-align: top;line-height: 20px;width: 170px;">How can we help you?: </td><td style="padding: 5px;vertical-align: top;line-height: 20px;">'.$how_can.'</td></tr>
                <tr><td style="padding: 5px;vertical-align: top;line-height: 20px;width: 170px;">Message: </td><td style="padding: 5px;vertical-align: top;line-height: 20px;">'.$yourmessage.'</td></tr>

               </table>
              </td>
              </tr>
              </table></td></tr>
              </table>
                    
                      </div>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                </table>
  </body></html>
  ';


if(mail($to,$subject,$htmlContent,$headers)) {
    $message = "Message sent successfully";
} else {
    $message = "Message could not be sent";
}
echo $message;