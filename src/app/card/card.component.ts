import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closebutton(){
    let card = document.getElementById("card") as HTMLElement;
    card.classList.add('d-none');
    
  }
}
