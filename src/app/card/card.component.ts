import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Ticket } from '../interface/ticket.model';
import { EditCardDialogComponent } from '../edit-card-dialog/edit-card-dialog.component';
import { MatDialog } from '@angular/material/dialog';
// import { ApiService } from '../api.service';
import { CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() ticket!: Ticket;
  @Output() statusChanged = new EventEmitter<{ card: Ticket; newStatus: string }>();
  isBeingDragged = false;

  constructor(private dialog: MatDialog,
    //  private apiservice: ApiService
     ) { }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditCardDialogComponent, {
      width: '400px',
      data: { ...this.ticket }
    });

    dialogRef.componentInstance.ticketUpdated.subscribe((updatedTicket: Ticket) => {
      // Update the local ticket object with the edited data
      this.ticket = updatedTicket;
      // You can also update your service with the updated data here if needed
    });
  }

  onDragStarted(event: CdkDragStart): void {
    this.isBeingDragged = true;
  }

  onDragEnded(event: CdkDragEnd): void {
    this.isBeingDragged = false;
    const newStatus = event.source.data.status; // Get the status from the card's data
    this.statusChanged.emit({ card: this.ticket, newStatus });
  }
}
