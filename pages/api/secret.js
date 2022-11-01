const secrets = {
    0: {
        code: '6123',
        imgKey: '3216'
    },
    1: {
        code: '9841',
        imgKey: '1489'
    },
    2: {
        code: '4235',
        imgKey: '5324'
    },
    3: {
        code: '9124',
        imgKey: '4219'
    }
};

export default function handler(req, res) {
    const { code, id } = req.query;
    const secret = secrets[id];
    if (code === secret.code) {
        res.status(200).json({ imgKey: secret.imgKey });
    }
    else {
        res.status(403).end();
    }
};