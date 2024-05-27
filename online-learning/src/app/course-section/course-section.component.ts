import { Component, OnInit } from '@angular/core';
import { CourseVideoService } from '../course-video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css']
})
export class CourseSectionComponent implements OnInit {
  
  videos:any = [];
  // selectedVideo: any = null;

  constructor(private courseVideo: CourseVideoService, private router: Router) { }

  ngOnInit(): void {
    this.videos = this.courseVideo.getVideos();
  }

  openPlaylist(videoId: number) {
    this.router.navigate(['/playlist', videoId]);
  }

  // selectVideo(video: any) {
  //   this.selectedVideo = video;
  // }

  // closePopup() {
  //   this.selectedVideo = null;
  // }

}
