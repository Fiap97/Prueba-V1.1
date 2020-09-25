import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/modelo/videos.model';
import { VideosService } from 'src/app/servicios/videos/videos.service';

@Component({
  selector: 'app-videos-noticia-screen',
  templateUrl: './videos-noticia-screen.component.html',
  styleUrls: ['./videos-noticia-screen.component.css']
})
export class VideosNoticiaScreenComponent implements OnInit {

  public videos: Video[];

  constructor(private videosService : VideosService) { }

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
  }


}
