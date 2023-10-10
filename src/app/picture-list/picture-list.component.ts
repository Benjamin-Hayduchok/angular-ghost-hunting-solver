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
  imagesWithText: { imageName: string; text: string; isFlipped: boolean }[] = this.basePatterns;
  setImageView() {
    console.log('this.hour', typeof this.hour)
    let hour = parseInt(this.hour);
    if (hour === 0) return this.basePatterns;
    if (hour <= 2) return [this.basePatterns[0]];
    if (hour <= 4) return [this.basePatterns[1]];
    if (hour <= 7) return [this.basePatterns[2]];
    if (hour <= 9) return [this.basePatterns[3]];
    if (hour <= 11) return [this.basePatterns[4]];
    if (hour === 12) {
      console.log("must be true")
      return [this.basePatterns[5]];
    }
    return this.basePatterns;
  }
  hour: string = "0";
  minutes: string = "0";
  hoursChanged(event: any) {
    this.hour = event.target.value;
    this.imagesWithText = this.setImageView();
  }
  minutesChanged(event: any) {
    this.minutes = event.target.value;
  }
  clearTime() {
    this.hour = "0";
    this.minutes = "0";
    this.imagesWithText = this.basePatterns;
  }
  flipImage(index: number): void {
    console.log('index', index);
    this.imagesWithText[index].isFlipped =
      !this.imagesWithText[index].isFlipped;
    console.log(
      'this.imagesWithText[index].isFlipped',
      this.imagesWithText[index].isFlipped
    );
  }
  calcBackgroundImage(imageName: string, isFlipped: boolean): string {
    return isFlipped
      ? 'url(assets/images/' + imageName + '-rotated.png)'
      : 'url(assets/images/' + imageName + '.png)';
  }
}
