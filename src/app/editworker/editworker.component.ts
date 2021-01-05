import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-editworker',
  templateUrl: './editworker.component.html',
  styleUrls: ['./editworker.component.css']
})
export class EditworkerComponent implements OnInit {
  @Input() workerData: object;
  myWorkerType = MyWorkerType;
  id: number;
  EditForm : FormGroup;

  public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() cancelEdit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.id = this.workerData["id"];
    this.EditForm = new FormGroup({   
      "workerName": new FormControl(this.workerData["name"], Validators.required),
      "workerSurname": new FormControl(this.workerData["surname"], Validators.required),
      "workerPhone": new FormControl(this.workerData["phone"], Validators.required),
      "workerType": new FormControl(this.workerData["type"], Validators.required)
  })
  }

  onEditWorker() {
      this.editWorker.emit({
        id: this.id,
        name: this.EditForm.get('workerName').value,
        surname: this.EditForm.get('workerSurname').value,
        phone: this.EditForm.get('workerPhone').value,
        type: this.EditForm.get('workerType').value,
      });
  }

  closeEdit(){
    this.cancelEdit.emit();
  }
}
