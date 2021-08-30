import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', [Validators.required]],
    });
    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => console.log(value));
  }
  
  save(e: Event) {
    e.preventDefault();
    if (this.form.valid) {
      console.log('desde send', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  ngOnInit(): void {}
}
