import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Josephine';
  constructor(firestore: AngularFirestore){}
  ngOnInit(){
    AOS.init();
  }
}


