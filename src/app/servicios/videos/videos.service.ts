import { Injectable } from '@angular/core';
import { Video } from 'src/app/modelo/videos.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private videos: Video[];

  constructor() { 

    this.videos = [
      {
        _id: 1,
        titulo: "Coronavirus en Chile: balance 22 de septiembre",
        vidUrl: "https://www.youtube.com/watch?v=u1JHMSXmdVE",

      },
      {
        _id: 2,
        titulo: "SMA reformula cargos contra ENAP por infracciones en Quintero y Puchuncaví",
        vidUrl: "https://www.youtube.com/watch?v=rO0KDbgXn5o",

      }



    ]
  }
  public getVideos(): Video[]{
    return this.videos;
  }
  public getVideosById(id: string): Video{
    return this.videos.find((videos: Video) => videos._id.toString() === id )
  }
}
