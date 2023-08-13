import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appSubscriptionManagement]',
})
export class SubscriptionManagementDirective implements OnDestroy {
  componetDestroyed = new Subject<void>();

  constructor() {}

  ngOnDestroy(): void {
    this.componetDestroyed.next();
    this.componetDestroyed.unsubscribe();
  }
}
