import { animate, animateChild, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const dataChange: AnimationTriggerMetadata = trigger('dataChange', [
    transition('done => entering', [
        style({
            'opacity': '0'
        }),
        animate(
            '300ms ease',
            style({
                'opacity': '100'
            })
        )
    ]),
]);
