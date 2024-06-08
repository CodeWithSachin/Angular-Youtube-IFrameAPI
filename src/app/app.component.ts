import {
  Component,
} from '@angular/core';
import 'zone.js'
import { VideoPlayerComponent } from './video-player/video-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[VideoPlayerComponent],
  template:`<app-video-player></app-video-player>`
})
export class AppComponent {}