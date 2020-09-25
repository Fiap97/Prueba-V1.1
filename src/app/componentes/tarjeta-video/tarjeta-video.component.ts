import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/modelo/videos.model';



@Component({
  selector: 'app-tarjeta-video',
  templateUrl: './tarjeta-video.component.html',
  styleUrls: ['./tarjeta-video.component.css']
})
export class TarjetaVideoComponent implements OnInit {

  @Input()
  public videoTarjeta: Video; 


  constructor() { }

  ngOnInit(): void {
  }

}
