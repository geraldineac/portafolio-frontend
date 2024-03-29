import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-headeredit',
  templateUrl: './headeredit.component.html',
  styleUrls: ['./headeredit.component.css']
})
export class HeadereditComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


}
