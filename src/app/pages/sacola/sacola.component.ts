import { Component, inject } from '@angular/core';
import { SacolaService } from '../../services/sacola.service';
import { SacolaItemComponent } from './sacola-item/sacola-item.component';

@Component({
  selector: 'app-sacola',
  imports: [SacolaItemComponent],
  template: `
    <div class="p-3 d-flex flex-column gap-3">
      <h2 class="fs-4">Meus itens geek</h2>
      @for (item of sacolaService.sacola(); track item.id) {
        <app-sacola-item [item]="item"/>
      }
    </div>
  `,
  styles: ``
})
export class SacolaComponent {
  sacolaService = inject(SacolaService);
}
