import { Directive, effect, ElementRef, HostListener, inject, input, Renderer2 } from '@angular/core';
import { TooltipPlacement } from './tooltip-placement.const';

@Directive({
  selector: '[aportusTooltip]'
})
export class TooltipDirective {

  // #region Injects
  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);
  // #endregion Injects

  // #region Signals
  public readonly aportusTooltip = input.required<string>();
  public readonly placement = input<TooltipPlacement>('top');
  // #endregion Signals

  // #region Properties
  private tooltipElement: HTMLElement | null = null;
  private textNode: any = null;
  // #endregion Properties

  // #region Lifecycle
  constructor() {
    effect(() => {
      const newText: string = this.aportusTooltip();

      // Se o tooltip já estiver aberto na tela, atualiza o texto dele dinamicamente
      if (this.tooltipElement && this.textNode) {
        this.renderer2.setValue(this.textNode, newText);
      }
    })
  }
  // #endregion Lifecycle

  // #region Methods
  @HostListener('mouseenter')
  public onMouseEnter(): void {
    if (!this.tooltipElement) {
      this.createTooltip();
    }
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    if (this.tooltipElement) {
      this.destroyTooltip();
    }
  }

  private createTooltip(): void {
    // 1. Cria o elemento div do tooltip
    this.tooltipElement = this.renderer2.createElement('div');

    // 2. Cria o nó de texto com o valor do nosso Signal
    this.textNode = this.renderer2.createText(this.aportusTooltip());
    this.renderer2.appendChild(this.tooltipElement, this.textNode);

    // 3. Adiciona a classe de estilo do próprio componente (que criaremos abaixo)
    this.renderer2.addClass(this.tooltipElement, 'aportus-tooltip-balloon');

    // Classe dinâmica baseada na posição escolhida (ex: aportus-tooltip-bottom)
    this.renderer2.addClass(this.tooltipElement, `aportus-tooltip-${this.placement()}`);

    // 4. Injeta o tooltip no body ou dentro do elemento pai.
    // Para evitar quebras de layout, o mais seguro é injetar dentro do próprio elemento
    this.renderer2.appendChild(this.elementRef.nativeElement, this.tooltipElement);

    // Garante que o elemento pai tenha posição relativa para o tooltip alinhar corretamente
    this.renderer2.setStyle(this.elementRef.nativeElement, 'position', 'relative');
  }

  private destroyTooltip(): void {
    if (this.tooltipElement) {
      this.renderer2.removeChild(this.elementRef.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
  // #endregion Methods

}
