import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwiperContainer } from 'swiper/element';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'aportus-auth',
  imports: [
    RouterOutlet
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {

  // #region Signals
  private swiperElement = viewChild.required<ElementRef<SwiperContainer>>('swiperElement');
  // #endregion Signals

  // #region Lifecycle
  public ngOnInit(): void {
    this.initSwiper();
  }
  // #endregion Lifecycle

  // #region Methods
  private getSwiperStyles(): string {
    const bulletColor: string = '#808080';
    const bulletActiveColor: string = '#00C896';

    return `
      .swiper-pagination {
        position: absolute;
        bottom: 16px;
        left: 0;
        right: 0;
        display: flex !important;
        justify-content: center;
        gap: 6px;
        z-index: 10;
      }
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${bulletColor};
        display: inline-block !important;
        cursor: pointer;
        transition: background 0.2s;
      }
      .swiper-pagination-bullet-active {
        background: ${bulletActiveColor};
      }
    `;
  }

  private initSwiper(): void {
    const swiperContainer: SwiperContainer = this.swiperElement().nativeElement;

    const swiperOptions: SwiperOptions = {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        enabled: true,
        clickable: true,
        type: 'bullets',
      },
      modules: [
        Autoplay,
        Pagination
      ],
      injectStyles: [
        this.getSwiperStyles()
      ],
    };

    Object.assign(swiperContainer, swiperOptions);
    swiperContainer.initialize();
  }
  // #endregion Methods

}
