import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { CheckToolsService } from '../check-tools.service'
import { Tools } from '../tools'
import {ToolComponent} from '../tool-component'
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent extends ToolComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbTabsetConfig, private checkToolsService: CheckToolsService,private identityService:IdentityService) {
    super(checkToolsService,identityService,Tools.CAST);
    config.justify = 'center';
    config.type = 'pills';
   
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
