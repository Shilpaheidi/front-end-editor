import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from '../interface/ticket.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  ticketForm: FormGroup;
  ticketFormModel: Ticket = { id: 0, title: '', status: '', description: '' }; // Initialize the model
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '20rem',
    maxHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private apiservice: ApiService,
    private fb: FormBuilder
  ) {
    this.ticketForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      status: ['', Validators.required],
      description: [''],
    });
  }

  submitForm(): void {
    if (this.ticketForm.valid) {
  
      this.ticketFormModel = {
        ...this.ticketFormModel,
        ...this.ticketForm.value,
      };
      this.dialogRef.close(this.ticketFormModel);
      // this.apiservice.insertAllCards(this.ticketFormModel).subscribe((res) => {
      //   console.log(res);
      // });
      console.log('data is saving');
    }
  }
}
