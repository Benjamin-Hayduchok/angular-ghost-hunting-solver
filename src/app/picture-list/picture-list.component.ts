import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css'],
})
export class PictureListComponent {
  basePatterns: { imageName: string; text: string; isFlipped: boolean }[] = [
    { imageName: '1-3', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '3-5', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '5-8', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '8-10', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '10-12', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
    { imageName: '12-1', text: 'ENTERING PUZZLE ROOM', isFlipped: false },
  ];

  imagesWithText: { imageName: string; text: string; isFlipped: boolean }[] =
    this.basePatterns;

  hour: string = '0';
  minutes: string = '0';

  setImageView() {
    const hour = parseInt(this.hour);
    if (hour === 0) return this.basePatterns;

    const patternIndex = Math.floor((hour - 1) / 2);
    if (patternIndex >= 0 && patternIndex < this.basePatterns.length) {
      return [this.basePatterns[patternIndex]];
    }

    return this.basePatterns;
  }

  hoursChanged(event: any) {
    this.hour = event.target.value;
    this.imagesWithText = this.setImageView();
  }

  minutesChanged(event: any) {
    this.minutes = event.target.value;
  }

  clearTime() {
    this.hour = '0';
    this.minutes = '0';
    this.imagesWithText = this.basePatterns;
  }

  flipImage(index: number): void {
    if (index >= 0 && index < this.imagesWithText.length) {
      this.imagesWithText[index].isFlipped =
        !this.imagesWithText[index].isFlipped;
    }
  }

  calcBackgroundImage(imageName: string, isFlipped: boolean): string {
    const suffix = isFlipped ? '-rotated' : '';
    return `url(assets/images/${imageName}${suffix}.png)`;
  }
}
