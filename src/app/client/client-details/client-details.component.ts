import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  public clients?: any;
  constructor(private route: ActivatedRoute,private clientService:ClientService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
     
         const clientId = params.get('id');
         this.clientService.get(clientId!).subscribe(clients => this.clients = clients);
        });
      }
    
  }


