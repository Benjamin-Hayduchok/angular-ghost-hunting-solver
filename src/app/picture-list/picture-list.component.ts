import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css'],
})
export class PictureListComponent {
  imagesWithText: { imageName: string; text: string; isFlipped: boolean }[] = [
    { imageName: '1-3', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '3-5', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '5-8', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '8-10', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '10-12', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '12-1', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
  ];
  onClick(index: number): void {
    console.log('index', index)
    this.imagesWithText[index].isFlipped = !this.imagesWithText[index].isFlipped;
    console.log('this.imagesWithText[index].isFlipped', this.imagesWithText[index].isFlipped)
  }
  calcBackgroundImage(imageName: string, isFlipped: boolean): string {
    console.log('imageName', imageName)
    console.log('isFlipped', isFlipped)
    // 'url(assets/images/' + item.imageName + '.png)'
    return isFlipped ? 'url(assets/images/' + imageName + '-rotated.png)' : 'url(assets/images/' + imageName + '.png)'
  }
}
