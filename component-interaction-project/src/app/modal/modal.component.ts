import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  /**
   * Az adatok, amelyek megjelennek a modális ablakban.
   */
  @Input() modalData: any = {};

  /**
   * Ha a showCounter property változik, akkor fut le a setter.
   * Amennyiben a számláló nem 0, akkor megjeleníti az ablakot.
   */
  @Input() set showCounter(counter) {
    console.log(counter);
    if (counter > 0) {
      this.show();
    }
  }

  isShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.isShow = true;
  }
  
  hide(): void {
    this.isShow = false;
  }

  getDisplay(): string {
    return this.isShow ? 'block' : 'none';
  }

}
