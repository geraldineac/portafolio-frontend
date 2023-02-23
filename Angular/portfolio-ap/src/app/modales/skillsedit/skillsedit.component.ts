import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-skillsedit',
  templateUrl: './skillsedit.component.html',
  styleUrls: ['./skillsedit.component.css']
})
export class SkillseditComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


}
