import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-user-analytics',
  imports: [],
  templateUrl: './user-analytics.component.html',
  styleUrl: './user-analytics.component.scss'
})
export class UserAnalyticsComponent {
  private data = [
    { month: 'Jan', activeUsers: 400 },
    { month: 'Feb', activeUsers: 300 },
    { month: 'Mar', activeUsers: 500 },
    { month: 'Apr', activeUsers: 700 },
    { month: 'May', activeUsers: 600 },
  ];

  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  constructor() {}

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#barChart')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', `translate(${this.margin}, ${this.margin})`);
  }

  private drawBars(data: any[]): void {
    // Create X-axis
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.month))
      .padding(0.2);
    this.svg
      .append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create Y-axis
    const y = d3.scaleLinear().domain([0, 800]).range([this.height, 0]);
    this.svg.append('g').call(d3.axisLeft(y));

    // Create bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.month))
      .attr('y', (d: any) => y(d.activeUsers))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.activeUsers))
      .attr('fill', '#d04a35');
  }
}
