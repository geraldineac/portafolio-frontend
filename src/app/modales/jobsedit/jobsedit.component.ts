import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-jobsedit',
  templateUrl: './jobsedit.component.html',
  styleUrls: ['./jobsedit.component.css']
})
export class JobseditComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


}
