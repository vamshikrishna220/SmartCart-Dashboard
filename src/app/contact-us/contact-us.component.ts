import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  imports: [NgIf, ReactiveFormsModule]
})
export class ContactUsComponent {
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      const mailtoLink = `mailto:shiyaelegantfinds@gmail.com?subject=Contact Us Form Submission&body=Name: ${formData.fullName}%0APhone: ${formData.phoneNumber}%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;
      this.formSubmitted = true;
      this.contactForm.reset();
    }
  }
}