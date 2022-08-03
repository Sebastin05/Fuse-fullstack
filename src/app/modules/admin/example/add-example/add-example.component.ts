import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-example',
  templateUrl: './add-example.component.html',
  styleUrls: ['./add-example.component.scss']
})
export class AddExampleComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      payee: ['', Validators.required],
      child: ['', Validators.required],
      threeweek: ['', Validators.required],
      twoweek: ['', Validators.required],
      oneweek: ['', Validators.required],
      current: ['', Validators.required],
      pending_amount: ['', Validators.required],
      over_payment: ['', Validators.required],
      pending_credit: ['', Validators.required],
      total_amount: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
  }

}
