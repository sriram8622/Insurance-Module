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
    // this.myData();

  }
  initiateForm() {
    this.fourWheeler = this.formBuilder.group({
      brand: this.formBuilder.control(''),
      varient: this.formBuilder.control(''),
      type: this.formBuilder.control('')
    })
  }
  // data: {}={}
  // myData(){
  //   let value = this.fourWheeler.value;
  //   Object.entries(this.fourWheeler.value).forEach(([id, answer]) => {
  //     if (answer !== '' || answer!== null){
  //       console.log(answer);
  //       let val=[id,answer]
  //       const newObj = Object.fromEntries(Object.entries(this.data).concat([val] as [string, number][]));
  //       console.log(newObj);
        
  //     }else{
  //       console.log(answer);
  //     }
  //   })
  // }
  getCarDetails() {
    this.insuranceService.getCarDetails().subscribe({
      next: (data) => {
        // this.brands = data.carBrandList;
        // this.carTypes = data.carTypeList;
        // this.carVarients = data.carVarientList;
        this.carDetailsList = data.carDetails; 
        this.carDetailsList.forEach(res=>{
          this.brands.push(res.brand);
          console.log(res.brand);
          
        })
        // this.getData();
              
      }
    })
  }
  getBrand(){
    this.carVarients=[];
    this.carDetails = undefined
    this.carDetailsList.forEach(res=>{
      if (res.brand === this.fourWheeler.get('brand')?.value){
        this.carVarients.push(res.varient);    
      }
    })
  }
  getVarient(){
    this.carTypes=[];
    this.carDetails = undefined
    this.carDetailsList.forEach(res=>{
      if (res.varient === this.fourWheeler.get('varient')?.value){
        this.carTypes.push(res.type); 
      }
    })
  }
  getValue() {
    this.carDetails = undefined
    if (this.fourWheeler.get('brand')?.value !== '' && this.fourWheeler.get('varient')?.value !== '' && this.fourWheeler.get('type')?.value !== '') {
      this.isButtonDisable =false;
    }
  }

  getData() {
    this.carDetailsList.forEach(data=>{
      if (data.brand === this.fourWheeler.get('brand')?.value && data.varient === this.fourWheeler.get('varient')?.value && data.type === this.fourWheeler.get('type')?.value){
        this.carDetails= data;
        console.log("vigneshasdfg");
        
      }
    })
    // console.log(this.carDetails);
    // this.myData();
    
  }

}
