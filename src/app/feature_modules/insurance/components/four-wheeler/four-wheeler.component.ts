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
  carVarients: string[] = [];
  carDetailsList: any[] =[] ;
  carDetails:any;
  fourWheeler!: FormGroup;

  isButtonDisable: boolean = true;

  constructor(private insuranceService: InsuranceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initiateForm();
    this.getCarDetails();

  }
  initiateForm() {
    this.fourWheeler = this.formBuilder.group({
      brand: this.formBuilder.control(''),
      varient: this.formBuilder.control(''),
      type: this.formBuilder.control('')
    })
  }

  getCarDetails() {
    this.insuranceService.getCarDetails().subscribe({
      next: (data) => {
        this.brands = data.carBrandList;
        this.carTypes = data.carTypeList;
        this.carVarients = data.carVarientList;
        this.carDetailsList = data.carDetails;  
        this.getData();
              
      }
    })
  }
  getValue() {
    if (this.fourWheeler.get('brand')?.value !== '' && this.fourWheeler.get('varient')?.value !== '' && this.fourWheeler.get('type')?.value !== '') {
      this.isButtonDisable =false;
    }
  }

  getData() {
    this.carDetailsList.forEach(data=>{
      if (data.brand === this.fourWheeler.get('brand')?.value && data.varient === this.fourWheeler.get('varient')?.value && data.type === this.fourWheeler.get('type')?.value){
        this.carDetails= data;
      }else{
        // this.carDetails = null;
      }
    })
    console.log(this.carDetails);
    
  }

}
