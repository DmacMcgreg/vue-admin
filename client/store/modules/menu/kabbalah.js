import lazyLoading from './lazyLoading'

export default {
    meta: {
        label   : 'Kabbalah',
        icon    : 'fa-mercury',
        expanded: false
    },

    children: [
        {
            name     : 'Calculator',
            path     : '/calculator',
            meta     : {
                link: 'kabbalah/calculator/Calculator.vue'
            },
            component: lazyLoading('kabbalah/calculator/Calculator')
        }
    ]
}
