import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../envinronments/environments';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
})
export class WorkWithUsComponent {
  sending = false;
  successMessage = '';
  errorMessage = '';

  // 📨 handle form submit (same logic for both forms)
  sendEmail(event: Event, type: 'driver' | 'business') {
    event.preventDefault();
    this.sending = true;
    this.successMessage = '';
    this.errorMessage = '';

    const form = event.target as HTMLFormElement;

    emailjs
      .sendForm(
        environment.emailjs.serviceID,
        environment.emailjs.templateID,
        form,
        environment.emailjs.publicKey
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('✅ Email sent:', result.text);
          this.sending = false;
          this.successMessage =
            type === 'driver'
              ? 'Your driver application has been sent successfully!'
              : 'Your business request has been sent successfully!';
          form.reset();
        },
        (error: { text: any }) => {
          console.error('❌ Email error:', error.text);
          this.sending = false;
          this.errorMessage = 'Something went wrong. Please try again later.';
        }
      );
  }
}
