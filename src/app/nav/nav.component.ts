import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import IUser from '../models/user.model';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user!: IUser;
  constructor(
    public modal: ModalService, 
    public auth: AuthService,

    ) {}

  ngOnInit(): void {}
  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }
  
}
