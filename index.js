module.exports = {
    rules: {
        'at-rule-no-unknown': [true, {
            ignoreAtRules: [
                'lost',
            ],
        }],
        'property-no-unknown': [ true, {
            ignoreProperties: [
                'lost-align',
                'lost-center',
                'lost-column',
                'lost-flex-container',
                'lost-masonry-column',
                'lost-masonry-wrap',
                'lost-move',
                'lost-offset',
                'lost-row',
                'lost-unit',
                'lost-utility',
                'lost-waffle',
            ],
        }],
    },
};
