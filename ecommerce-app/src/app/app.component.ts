import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Discover Our Products - Metti Muse');
    this.meta.addTags([
      { name: 'description', content: 'Browse handcrafted bags, accessories and gifts' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
