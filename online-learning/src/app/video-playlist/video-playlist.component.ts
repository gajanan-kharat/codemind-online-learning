import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseVideoService } from '../course-video.service';

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.css']
})
export class VideoPlaylistComponent implements OnInit {
 
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;

  selectedVideo: any;
  relatedVideos: any[] = [];
  videos: any[] = [];
  isPlaying = true;
  controlsVisible = false;
  controlTimeout: any;

  constructor(private route: ActivatedRoute, private router: Router,  private courseVideoService: CourseVideoService) { }

  ngOnInit(): void {
    this.videos = this.courseVideoService.getVideos();
    const videoId: any = +this.route.snapshot.paramMap.get('videoId')!;
    this.loadVideo(videoId);
    this.loadRelatedVideos(videoId);
  }
  loadVideo(videoId: number) {
    // Fetch the selected video data based on the videoId
    this.selectedVideo = this.courseVideoService.getVideoById(videoId);
    this.loadRelatedVideos(videoId);
    this.playVideo();

    // this.relatedVideos = this.courseVideoService.getRelatedVideos(videoId);
  } 
  loadRelatedVideos(videoId: number) {
    // Fetch related videos using the service
    const fetchedRelatedVideos = this.courseVideoService.getRelatedVideos(videoId);
  
    // Add the current video to the list of related videos
    const currentVideo = this.courseVideoService.getVideoById(videoId);
    this.relatedVideos = [currentVideo, ...fetchedRelatedVideos];
  }

  
  openPlaylist(videoId: number) {
  this.router.navigate(['/playlist', videoId]);
}


playPrevious() {
  const currentIndex = this.videos.findIndex(video => video.id === this.selectedVideo.id);
  if (currentIndex > 0) {
    const previousVideoId = this.videos[currentIndex - 1].id;
    this.loadVideo(previousVideoId);
    this.router.navigate(['/playlist', previousVideoId]);
  }
}

playNext() {
  const currentIndex = this.videos.findIndex(video => video.id === this.selectedVideo.id);
  if (currentIndex < this.videos.length - 1) {
    const nextVideoId = this.videos[currentIndex + 1].id;
    this.loadVideo(nextVideoId);
    this.router.navigate(['/playlist', nextVideoId]);
  }
}

togglePlayPause() {
  const videoElement = this.videoPlayer.nativeElement;
  if (videoElement.paused) {
    videoElement.play();
    this.isPlaying = true;
  } else {
    videoElement.pause();
    this.isPlaying = false;
  }
}

private playVideo() {
  const videoElement = this.videoPlayer.nativeElement;
  videoElement.load();
  videoElement.play();
  this.isPlaying = true;
  }

  showControls() {
    this.controlsVisible = true;
    this.clearControlTimeout();
  }

  hideControls() {
    this.controlTimeout = setTimeout(() => {
      this.controlsVisible = false;
    }, 1000); // hide after 1 seconds
  }

  showControlsTemporarily() {
    this.showControls();
    this.hideControls();
  }

  private clearControlTimeout() {
    if (this.controlTimeout) {
      clearTimeout(this.controlTimeout);
      this.controlTimeout = null;
    }
  }

}
