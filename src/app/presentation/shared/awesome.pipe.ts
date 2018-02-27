/** Pipe that precede the input string with the word "Awesome " */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'par' })
export class AwesomePipe implements PipeTransform {
    transform(phrase: string) {
        return phrase ? 'Awesome ' + phrase : '';
    }
}