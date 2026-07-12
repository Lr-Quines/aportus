import { Directive, inject, input, TemplateRef } from '@angular/core';
import { CellContext } from '../interfaces/cell-context.interface';

@Directive({
  selector: 'ng-template[aportusCellDef]',
})
export class CellDefDirective<T = unknown> {

  public readonly templateRef = inject(TemplateRef<CellContext<T>>);

  /** Chave da coluna que este template deve renderizar. */
  public readonly aportusCellDef = input.required<string>();

}
