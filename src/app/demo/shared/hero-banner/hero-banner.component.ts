import { Component, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
    @Input() apiTitle: string;
    @Input() apiDescription: string;
}
