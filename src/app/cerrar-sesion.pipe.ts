import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cerrarSesion'
})
export class CerrarSesionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
