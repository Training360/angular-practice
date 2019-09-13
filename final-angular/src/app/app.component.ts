import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list$: Observable<any> = this.us.read();

  constructor(private us:UserService) {
    us.access();
  }
  title = 'final-angular';

  onDelete(id:number):void{
    this.us.delete(id).forEach(data=>console.log(data));
  }

  searchText = '';

}
