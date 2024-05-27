import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseVideoService {

  private videos = [
    { id: 1, title: 'Angular Developer', lessons:'15 Lessons', description: 'Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework', price: "18,000", old_price:"20,000", discount:"25%", src: '../../assets/video/video1.mp4', thumbnail: '../../assets/Image/Angular-img.png' },
    { id: 2, title: 'React Developer', lessons:'20 Lessons', description: 'Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework', price: "15,000", old_price:"20,000", discount:"25%", src: '../../assets/video/video2.mp4', thumbnail: '../../assets/Image/React-img.png' },
    { id: 3, title: 'Java Developer', lessons:'18 Lessons', description: 'Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework', price: "20,000", old_price:"25,000", discount:"25%", src: '../../assets/video/video1.mp4', thumbnail: '../../assets/Image/Java-img.jpg' },
    { id: 4, title: '.Net Developer', lessons:'18 Lessons', description: 'Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework', price: "18,000", old_price:"20,000", discount:"25%", src: '../../assets/video/video2.mp4', thumbnail: '../../assets/Image/Dotnet-img2.png' },
    { id: 5, title: 'Automation & Manual Testing',lessons:'18 Lessons', description: 'Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework', price: "15,000", old_price:"20,000", discount:"25%", src: '../../assets/video/video1.mp4', thumbnail: '../../assets/Image/Testing-img.jpg' }
  ];
  constructor() { }
  getVideos() {
    return this.videos;
  }

  getVideoById(id: number) {
    return this.videos.find(video => video.id === id);
  }

  getRelatedVideos(videoId: number) {
    // Filter out the selected video
    const filteredVideos = this.videos.filter(video => video.id !== videoId);
    return filteredVideos;
}
}
