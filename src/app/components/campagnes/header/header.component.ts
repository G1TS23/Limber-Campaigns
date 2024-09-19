import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  showOwner!: boolean;

  ngOnInit(): void {
    this.showOwner = false;
  }

  openOwner(): void {
    this.showOwner = !this.showOwner;  
  }

  showNotifications(): void{
    alert('3 nouvelles notifications');
  }

}
