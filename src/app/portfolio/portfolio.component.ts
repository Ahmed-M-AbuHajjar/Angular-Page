import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
showCard(){
  let card = document.getElementById('card') as any;
  card.classList.remove('d-none');
}
showCurrentPicture(elem:any){
  let cardPicture = document.getElementById('card-picture') as any;
  cardPicture.setAttribute('src',elem)
}
cardTitle(elem:any){
  let cardTitle = document.getElementById('card-Title') as any;
  cardTitle.innerText = `${elem}`
}
}
