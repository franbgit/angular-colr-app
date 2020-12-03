import { Component, OnInit } from '@angular/core';

import { ColorService } from '@core/services';

const animationClasses = ['move-top', 'move-right', 'move-down', 'move-left'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cornerIndex = 0;
  currentColor = '';
  currentCorner = '';
  showAnimation = false;

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.updateCircle();
  }

  updateCircle(): void {
    this.colorService.getRandomColor().subscribe((colorInfo) => {
      this.currentColor = colorInfo.new_color; // circle's color does not change if variable is not hex code
      this.currentCorner = animationClasses[this.cornerIndex];
      this.showAnimation = true;
      this.setNextCorner();
    });
  }

  setNextCorner(): void {
    if (++this.cornerIndex >= 4) {
      this.cornerIndex = 0;
    }
  }
}
