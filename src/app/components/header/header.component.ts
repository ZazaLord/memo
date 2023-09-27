import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title123:string = "Add/Delete Memo"
  
  toggleAddNote(): void {  
    console.log("[HEADER] button was clicked!");
  }
}
