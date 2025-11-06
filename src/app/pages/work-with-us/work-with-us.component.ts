import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../envinronments/environments';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
})
export class WorkWithUsComponent {
  // Separate states for each form
  driverSending = false;
  driverSuccess = '';
  driverError = '';

  businessSending = false;
  businessSuccess = '';
  businessError = '';

  sendEmail(event: Event, type: 'driver' | 'business') {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    // pick correct state
    if (type === 'driver') {
      this.driverSending = true;
      this.driverSuccess = '';
      this.driverError = '';
    } else {
      this.businessSending = true;
      this.businessSuccess = '';
      this.businessError = '';
    }

    emailjs
      .sendForm(
        environment.emailjs.serviceID,
        environment.emailjs.templateID,
        form,
        environment.emailjs.publicKey
      )
      .then(
        () => {
          if (type === 'driver') {
            this.driverSending = false;
            this.driverSuccess = 'Your application has been sent successfully!';
          } else {
            this.businessSending = false;
            this.businessSuccess =
              'Your business inquiry has been sent successfully!';
          }
          form.reset();
        },
        () => {
          if (type === 'driver') {
            this.driverSending = false;
            this.driverError = 'Something went wrong. Please try again.';
          } else {
            this.businessSending = false;
            this.businessError = 'Something went wrong. Please try again.';
          }
        }
      );
  }
}
