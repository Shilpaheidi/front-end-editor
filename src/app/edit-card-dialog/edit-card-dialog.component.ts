import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Ticket } from '../interface/ticket.model';
// import { ApiService } from '../api.service';
export interface Ticket {
  id: number;
  title: string;
  status: string;
  description: string;
  updatedData?: {
    id: number;
    title: string;
    status: string;
    description: string;
  };
}
@Component({
  selector: 'app-edit-card-dialog',
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.scss'],
})



export class EditCardDialogComponent {
  // @Output() ticketUpdated = new EventEmitter<Ticket>();

  // constructor(
  //   public dialogRef: MatDialogRef<EditCardDialogComponent>,
  //   private apiservice: ApiService,
  //   @Inject(MAT_DIALOG_DATA) public data: Ticket
  // ) {}

  // // onSaveClick(): void {
  // //   // Implement card update logic here
  // //   // You can update the card data in your service
  // //   // Emit the updated data to the parent component
  // //   this.ticketUpdated.emit(this.data);
  // //   this.dialogRef.close(this.data);
  // //   console.log('data saved');

  // //   console.log(this.data);

  // //   this.apiservice.updateEditedTickets(this.data).subscribe((res) => {
  // //     console.log(res);
  // //   });
  // // }

  // onSaveClick(): void {
  //   // Emit the updated data to the parent component
  //   this.ticketUpdated.emit(this.data);
    
  //   // Make an HTTP POST request to update the data on the server

  //   const body = {}
  //   this.apiservice.updateEditedTickets(this.data).subscribe((res) => {
  //     console.log('Data saved:', res);

  //     // Close the dialog
  //     this.dialogRef.close(res);
  //   });
  // }

  // onCancelClick(): void {
  //   this.dialogRef.close();
  // }

  @Output() ticketUpdated = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    // private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: Ticket
  ) {}

  onSaveClick(): void {
    // Create the data object in the required format


    // Emit the updated data to the parent component
    this.ticketUpdated.emit(this.data);
    const body = {
      id: this.data.id,
      title: this.data.title,
      status: this.data.status,
      description: this.data.description
    };
    const requestData = {
      id: this.data.id,
      updatedData: {
        id: this.data.id,
        title: this.data.title,
        status: this.data.status,
        description: this.data.description,
      },
    };
    // Make an HTTP POST request to update the data on the server
    // this.apiService.updateEditedTickets(requestData).subscribe((res) => {
    //   console.log('Data saved:', res);

    //   // Close the dialog
    //   this.dialogRef.close(res);
    // });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
