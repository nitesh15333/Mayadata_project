import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  tableData=[];
  meeting:any={};
  search:any={};
  backUpData=[];
  constructor(private homeService:HomeService
    ) { 


    }

  ngOnInit() {
    this.homeService.getTableData().subscribe(res=>{
      
      this.tableData=res;
      this.backUpData=res;
    })
  }
  
  delete(value){

   this.tableData= this.tableData.filter(val=>val.meetingName!=value.meetingName)
  }


  add(meeting){
    if(meeting.meetingName){
    this.tableData.push(meeting);
    this.meeting={};
    }
  }


  textChange(value){
    let data=[];
    console.log(value)
    if(value.length>0){
    this.tableData.map(val=>{
        if(((val.meetingName).toLowerCase().includes((value).toLowerCase()))){
            data.push(val)
        }
      });
      console.log("data",data);
      this.tableData=data;
    }else{
     this.tableData=this.backUpData
    }

    

  }

  toDateChaged(val){
    
     let data=[];
     this.tableData.map(val=>{
      //  alert((new Date(val.date))>new Date(this.search.fromdate));
      //  console.log(new Date(val.date))
      // if(((val.date)>this.search.fromdate&&(val.date)<this.search.fromdate)){
      //     data.push(val)
      // }
    });
    console.log("data",data);
    this.tableData=data;
  }
}
