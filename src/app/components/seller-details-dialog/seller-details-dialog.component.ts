import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-seller-details-dialog',
  imports:[],
  templateUrl: './seller-details-dialog.component.html',
  styleUrls: ['./seller-details-dialog.component.css']
})
export class SellerDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SellerDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
