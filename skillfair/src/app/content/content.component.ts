import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  image: string;
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  items: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Item[]>('assets/items.json').subscribe(data => {
      this.items = data;
    });
  }
}