import { Component } from '@angular/core';
import { Image } from 'src/app/shared/models/image.model';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html'
})
export class OverviewComponent {
  public breadCrumb = [
    {
      url: '/overview',
      title: 'Overview',
      active: true
    },
    // {
    //   url: '/app-pages',
    //   title: 'App Pages',
    //   active: false
    // },
    // {
    //   url: '',
    //   title: 'Team',
    //   active: true
    // }
  ];

  avatars: Array<Image> = [
    {
      src: 'assets/img/avatar-female-1.jpg',
      alt: 'Avatar 1',
      title: 'Jane Doe'
    },
    {
      src: 'assets/img/avatar-male-1.jpg',
      alt: 'Avatar 2',
      title: 'John Doe'
    },
    {
      src: 'assets/img/avatar-female-2.jpg',
      alt: 'Avatar 3',
      title: 'Jane da bhai'
    },
    {
      src: 'assets/img/avatar-male-2.jpg',
      alt: 'Avatar 4',
      title: 'Jogn da bhai'
    },
  ]
}
