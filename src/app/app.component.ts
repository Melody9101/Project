import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mapOneOrManyArgs } from 'rxjs/internal/util/mapOneOrManyArgs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '我是標題';
content: string = '內容是我';
imgsrc: string = 'https://img.shoplineapp.com/media/image_clips/663c6333a1cc270011604bc1/original.jpg?1715233587';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

}
}
