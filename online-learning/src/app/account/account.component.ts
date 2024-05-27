import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;
  // showAccountForm = false;
  isEmailDisabled = true;
  constructor(private fb: FormBuilder) { 
    this.accountForm = this.fb.group({
      accountName: ['John Doe'],
      email: [{ value: 'john.doe@example.com', disabled: true }],
      contactNumber: [''],
      addresses: ['']
      // addresses: this.fb.array(['123 Main St', '456 Elm St'])
    });
  }

  ngOnInit(): void {
  }
  get addresses(): FormArray {
    return this.accountForm.get('addresses') as FormArray;
  }

  editField(field: string, index?: number): void {
    if (field === 'addresses' && index !== undefined) {
      this.addresses.controls[index].enable();
    } else {
      this.accountForm.get(field)?.enable();
    }
  }

  addAddress(): void {
    this.addresses.push(this.fb.control(''));
  }

  

  onSubmit(): void {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
      alert('Account details updated successfully!');
    }
  }

  // toggleAccountForm(): void {
  //   this.showAccountForm = !this.showAccountForm;
  // }

}
