import { Component, OnInit } from '@angular/core';
declare global {
  interface Window { onYouTubeIframeAPIReady: any; YT: any; }
}

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
})
export class VideoPlayerComponent implements OnInit {
  player: any;
  done: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadYouTubeAPI();
  }

  loadYouTubeAPI(): void {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag:any = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => this.onYouTubeIframeAPIReady();
  }

  onYouTubeIframeAPIReady(): void {
    this.player = new window.YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': (event: any) => this.onPlayerReady(event),
        'onStateChange': (event: any) => this.onPlayerStateChange(event)
      }
    });
  }

  onPlayerReady(event: any): void {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any): void {
    if (event.data == window.YT.PlayerState.PLAYING && !this.done) {
      setTimeout(() => this.stopVideo(), 6000);
      this.done = true;
    }
  }

  stopVideo(): void {
    this.player.stopVideo();
  }
}
