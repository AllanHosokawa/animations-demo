import { keyframes, animate, transition, style, trigger, state, animation, useAnimation } from "@angular/animations";

export let bounceOutLeftAnimation = animation(
    animate(
        '0.5s ease-out',
        keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ])     
    )
);

export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
}

);

export let fadeOutAnimation = animation([    
    animate(2000, style({ opacity: 0 }))
]);

export let fade = trigger('fade', [
    transition(':enter', [
        useAnimation(fadeInAnimation)
    ]),

    transition(':leave',
        useAnimation(fadeOutAnimation)
    )
]);

export let slideRight = trigger('slideRight', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(500)
    ]),

    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
        // animate(
        //     '0.5s ease-out',
        //     keyframes([
        //         style({
        //             offset: .2,
        //             opacity: 1,
        //             transform: 'translateX(20px)'
        //         }),
        //         style({
        //             offset: 1,
        //             opacity: 0,
        //             transform: 'translateX(-100%)'
        //         })
        //     ])
        //     //style({ transform: 'translateX(-100%)' })
        // )
    )
]);