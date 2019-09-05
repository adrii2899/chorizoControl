import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiempo-excedido',
  templateUrl: './tiempo-excedido.component.html',
  styleUrls: ['./tiempo-excedido.component.css']
})
export class TiempoExcedidoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TiempoExcedidoComponent>) { }
  displayedColumns: string[] = ['item', 'cost'];
  transactions: any[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  ngOnInit() {
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  onNoClick(): void {

    this.dialogRef.close();

  }


}
