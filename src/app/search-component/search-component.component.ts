import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {

  @Output() searchbarClicked: EventEmitter<void> = new EventEmitter<void>();
  cards: { image: string, title: string, description: string }[] = [
    { image: '/assets/womenDress/dress1.jpg', title: 'Card 1', description: 'Description for Card 1' },
    { image: '/assets/womenDress/dress2.jpg', title: 'Card 2', description: 'Description for Card 2' },
    { image: '/assets/womenDress/dress3.jpg', title: 'Card 1', description: 'Description for Card 3' },
    { image: '/assets/womenDress/dress4.webp', title: 'Card 4', description: 'Description for Card 4' },
    { image: '/assets/womenDress/dress5.jpg', title: 'Card 5', description: 'Description for Card 5' },
    { image: '/assets/womenDress/dress6.jpg', title: 'Card 1', description: 'Description for Card 6' },
    { image: '/assets/womenDress/dress7.jpg', title: 'Card 7', description: 'Description for Card 7' }
  ];

  searchQuery:  string = '';

  // Filtered array of cards based on search query
  filteredCards: any[];

  constructor() {
    // Initialize filteredCards with all cards
    this.filteredCards = [];
  }
  filterCards() {

    this.filteredCards = this.cards.filter(card =>
      card.title.toLowerCase() === this.searchQuery.toLowerCase()
    );

  }

  handleClick() {
    this.searchbarClicked.emit();
  }
}
