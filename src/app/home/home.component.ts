import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

import { ColorService, SvgNodeService } from '../core/services';

const corners = [
  { x: 25, y: 25 },
  { x: 375, y: 25 },
  { x: 375, y: 175 },
  { x: 25, y: 175 },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  circle: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  cornerIndex = 0;
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;

  constructor(
    private colorService: ColorService,
    private svgNodeService: SvgNodeService
  ) {}

  ngOnInit(): void {
    this.createSvg();
    this.updateCircle();
  }

  createSvg(): void {
    this.svg = this.svgNodeService.getNode(d3.select('#svgContainer'), 'svg', {
      width: 400,
      height: 200,
      style: 'visibility:hidden',
    });

    this.circle = this.svgNodeService.getNode(this.svg, 'circle', {
      cx: 25,
      cy: 25,
      r: 25,
    });

    this.svgNodeService.getNode(this.svg, 'rect', {
      x: 2,
      y: 2,
      rx: 25,
      ry: 25,
      width: 396,
      height: 196,
      style: 'fill:transparent;stroke:#000;stroke-width:4',
    });
  }

  updateCircle(): void {
    this.colorService.getRandomColor().subscribe((colorInfo) => {
      this.moveAndColorCircle(colorInfo.new_color);
      this.svg.style('visibility', 'visible');
      this.setNextCorner();
    });
  }

  moveAndColorCircle(color: string): void {
    this.circle
      .style('fill', '#' + color) // circle's color does not change if variable is not hex code
      .transition()
      .duration(900)
      .attr('cx', corners[this.cornerIndex].x)
      .attr('cy', corners[this.cornerIndex].y)
      .ease(d3.easeElastic);
  }

  setNextCorner(): void {
    if (++this.cornerIndex >= 4) {
      this.cornerIndex = 0;
    }
  }
}
