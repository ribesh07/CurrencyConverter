const images = {
    in: require('./assets/img/in.png'),
    jp: require('./assets/img/jp.png'),
    au: require('./assets/img/au.png'),
    de : require('./assets/img/de.png'),
    kp : require('./assets/img/kp.png'),
    kr : require('./assets/img/kr.png'),
};

export const currencyByNPR : Currency [] = [
    {
        name: 'INR',
        value : 0.62,
        flag: images.in,
        symbol: 'रु',
    },
    {
        name: 'JPY',
        value : 0.9,
        flag: images.jp,
        symbol: '¥',
    },
    {
        name: 'AUD',
        value : 0.011,
        flag: images.au,
        symbol: '$',
    },
    {
        name: 'DE',
        value : 0.0068,
        flag: images.de,
        symbol: '€',
    },
    {
        name: 'NKP',
        value : 6.705717,
        flag: images.kp,
        symbol: '₩',
    },
    {
        name: 'SKR',
        value : 9.99,
        flag: images.kr,
        symbol: '₩',
    },
];
