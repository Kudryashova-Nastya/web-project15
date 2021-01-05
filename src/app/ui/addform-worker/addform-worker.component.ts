import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})

export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;

  AddForm : FormGroup;

  public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.AddForm = new FormGroup({   
      "workerName": new FormControl("", Validators.required),
      "workerSurname": new FormControl("", Validators.required),
      "workerPhone": new FormControl("", Validators.required),
      "workerType": new FormControl(0, Validators.required)
  })
}

  ngOnInit(): void {
  }

  onAddWorker() {
    console.log(this.AddForm);
      this.addWorker.emit({
        name: this.AddForm.get('workerName').value,
        surname: this.AddForm.get('workerSurname').value,
        phone: this.AddForm.get('workerPhone').value,
        type: this.AddForm.get('workerType').value,
      });
  }
}
