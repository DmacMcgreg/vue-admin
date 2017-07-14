import lazyLoading from './lazyLoading'

export default {
    meta: {
        label   : 'Astrology',
        icon    : 'fa-mercury',
        expanded: false
    },

    children: [
        {
            name     : 'Practices',
            path     : '/astrology/practices',
            meta     : {
                link: 'astrology/AstrologyPractices.vue'
            },
            component: lazyLoading('astrology/AstrologyPractices')
        }
    ]
}
