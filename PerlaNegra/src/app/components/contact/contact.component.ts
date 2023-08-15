import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup
  show = false
  showError = false

  constructor(private httpClient: HttpClient) {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),
      mobile: new FormControl(null, [
        Validators.required
      ]),
      subject: new FormControl(null, [
        Validators.required
      ]),
      message: new FormControl(null, [
        Validators.required
      ])
    }, [])
  }

  checkError(control: string, validator: string) {
    return this.form.get(control)?.hasError(validator) && this.form.get(control)?.touched
  }

  onSubmit() {
    if (!this.form.valid) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false
      }, 8000);
      console.log('hola', this.form.valid)
    } else {
      let params = {
        name: this.form.value.name,
        email: this.form.value.email,
        mobile: this.form.value.mobile,
        subject: this.form.value.subject,
        message: this.form.value.message
      }
      console.log(params)
      this.httpClient
        .post('https://fran-portfolio-backend.onrender.com/send', params)
        .subscribe(res => {
          console.log(res)
        })
      this.show = true
      this.form.reset()
    }
  }

}
