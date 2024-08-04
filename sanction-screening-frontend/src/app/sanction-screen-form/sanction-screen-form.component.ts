import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { SanctionScreenService } from './sanction-screen.service';
import { SanctionScreenResultComponent } from '../sanction-screen-result/sanction-screen-result.component';

@Component({
  selector: 'app-sanction-screen-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './sanction-screen-form.component.html',
  styleUrl: './sanction-screen-form.component.scss'
})
export class SanctionScreenFormComponent {
  public screeningForm: FormGroup;
  public submitDisabled = false;
  public screeningResult = {
    nameMatch: null,
    dateOfBirthMatch: null,
    countryMatch: null,
  };

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private sanctionScreenService: SanctionScreenService,
  ) {
    this.screeningForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dateOfBirth:  ['', [Validators.required]],
      country:  ['', [Validators.required]],
    });
  }
  
  public async sendScreeningInfo() {
    this.submitDisabled = true;
    if (this.screeningForm.valid) {
      this.screeningResult = await this.sanctionScreenService.sendSanctionScreenInfo(
        this.screeningForm.value.name,
        this.screeningForm.value.dateOfBirth,
        this.screeningForm.value.country,
      );
    }

    this.dialog.open(SanctionScreenResultComponent, {
      width: '550px',
      data: this.screeningResult,
    });
    
    this.submitDisabled = false;
  }
}
