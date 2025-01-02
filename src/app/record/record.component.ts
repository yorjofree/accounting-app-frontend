import { Component, computed, input, signal } from '@angular/core';
import { Record } from '../record.interface';

@Component({
  selector: 'app-record',
  imports: [],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
  record = input.required<Record>();
  name = computed(() => "optionMenu" + this.record().id);

  showOptionMenu(e: MouseEvent): void {
    
    this.hideOptionMenus();

    const optionMenu = document.getElementById("optionMenu" + this.record().id);
    if (optionMenu !== null) {
      optionMenu.style.display = "initial";
      console.log("changed display property of element with id = " + optionMenu.id);
      e.stopPropagation();
    }
  }

  hideOptionMenus(): void {
    const optionMenus = document.getElementsByClassName("option-menu") as HTMLCollectionOf<HTMLElement>;
    for (const optionMenu of optionMenus) {
      if (optionMenu.style.display == "initial") {
        optionMenu.style.display = "none";  
      }
    }
  }  
}
