import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="btn"
      [ngClass]="{ solid: variant == 'solid', outline: variant == 'outline' }"
    >
      {{ label || 'Template Button' }}
    </button>
  `,
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() variant: string = 'solid';
  @Input() label: string = 'Button';

  constructor() {}

  ngOnInit(): void {}
}
