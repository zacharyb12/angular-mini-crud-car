import { DOCUMENT, inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

export const quitGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  
  const document = inject(DOCUMENT)

  const formElement = document.querySelector('form')

  if(formElement?.classList.contains('ng-dirty')){
    return confirm('Modifications non-sauvegardées . voulez-vous Quitter ?')
  }

  return true
};
