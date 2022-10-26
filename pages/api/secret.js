const secrets = [
    {
        code: '6123',
        secret: 'blaheej'
    },
    {
        code: '9841',
        secret: 'blahaej'
    },
    {
        code: '4235',
        secret: 'blaheeej'
    },
    {
        code: '9124',
        secret: 'blaheefffj'
    }
];

export default function handler(req, res) {
    const guessedCode = req.query.code;
    const secret = secrets.find(obj => obj.code === guessedCode);
    if (secret) {
        res.status(200).json({ secret: secret.secret });
    }
    else {
        res.status(403).end();
    }
};