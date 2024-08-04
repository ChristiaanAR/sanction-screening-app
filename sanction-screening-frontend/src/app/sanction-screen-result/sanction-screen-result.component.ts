import { CommonModule } from '@angular/common';  
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface ScreeningResultData {
  nameMatch: boolean,
  dateOfBirthMatch: boolean,
   countryMatch: boolean,
}

@Component({
  selector: 'app-sanction-screen-result',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sanction-screen-result.component.html',
  styleUrl: './sanction-screen-result.component.scss'
})
export class SanctionScreenResultComponent {
  public resultText: string;
  constructor(
    public dialogRef: MatDialogRef<SanctionScreenResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScreeningResultData) {
      if (!data.nameMatch && !data.dateOfBirthMatch && !data.countryMatch) {
        this.resultText = 'Clear';
      } else {
        this.resultText = 'Hit';
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*
TODO:
 * finish dialog (result display)
 * make front end nicer looking
 * do the second question
 * maybe clean up the backend? 
*/