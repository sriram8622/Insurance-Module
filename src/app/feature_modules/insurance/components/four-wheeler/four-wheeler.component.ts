import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../../services/insurance.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-four-wheeler',
  templateUrl: './four-wheeler.component.html',
  styleUrls: ['./four-wheeler.component.css']
})
export class FourWheelerComponent implements OnInit {

  brands: string[] = [];
  carTypes: string[] = [];
  carDetailsList: any[] = [];
  fourWheeler!: FormGroup;

  constructor(private insuranceService: InsuranceService, private formBuilder : FormBuilder){}

  ngOnInit() {
    this.initiateForm();
    this.getBrand();
    // this.getCarType();
  }
  initiateForm(){
    this.fourWheeler=this.formBuilder.group({
      brand: this.formBuilder.control(''),
      type: this.formBuilder.control('')
    })
  }

  getBrand() {
    this.insuranceService.getBrand().subscribe({
      next: (data) => {
        this.brands = data;
      }
    })
  }
  getCarType(){
    this.insuranceService.getCarType().subscribe({
      next: (data) => {
        this.carTypes = data;
        console.log(this.carTypes);
        
      }
    })
  }
  getCarDetails(brand : string, type : string) {
    this.insuranceService.getCarDetails(brand , type).subscribe({
      next: (data) => {
        // this.carTypes = data;
        this.carDetailsList = data;
        console.log(data);

      }
    })
  }
  getValue(){
    console.log(this.fourWheeler.get('brand')?.value);
    if (this.fourWheeler.get('brand')?.value !== '') {
      this.getCarType();
    }
  }

  getData(){
    if (this.fourWheeler.get('brand')?.value !== '' && this.fourWheeler.get('type')?.value !== '') {
      let brand = this.fourWheeler.get('brand')?.value;
      let type = this.fourWheeler.get('type')?.value;
      this.getCarDetails(brand, type);
    }
  }
}
