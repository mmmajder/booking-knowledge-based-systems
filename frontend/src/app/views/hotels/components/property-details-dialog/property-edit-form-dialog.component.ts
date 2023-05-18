import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {
  getValueByKey,
  PropertyDetails,
  PropertyType
} from "../../../../model/Property";
import {User} from "../../../../model/User";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-property-details-dialog',
  templateUrl: './property-edit-form-dialog.component.html',
  styleUrls: ['./property-edit-form-dialog.component.css']
})
export class PropertyEditFormDialogComponent implements OnInit {
  @Input() mode!: string;

  formGroup = this._formBuilder.group({
    nameFormControl: ['name', [Validators.required]],
    addressFormControl: ['address', [Validators.required]],
  });
  type: string = 'House';
  address!: string;
  name!: string;
  fileTypes = Object.values(PropertyType);
  loggedUser!: User
  image: string = ""
  property!: PropertyDetails;

  constructor(public dialogRef: MatDialogRef<PropertyEditFormDialogComponent>, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.mode === "edit") {
      this.type = getValueByKey(this.property.type)
      this.name = this.property.name
      this.address = this.property.address
    }
  }

}
