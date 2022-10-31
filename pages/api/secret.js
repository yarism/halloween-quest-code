const secrets = {
    0: {
        code: '6123',
        secret: 'First suspect clue is here'
    },
    1: {
        code: '9841',
        secret: 'Second suspect clue is here'
    },
    2: {
        code: '4235',
        secret: 'Third suspect clue is here'
    },
    3: {
        code: '9124',
        secret: 'Fourth suspect clue is here'
    }
};

export default function handler(req, res) {
    const { code, id } = req.query;
    const secret = secrets[id];
    if (code === secret.code) {
        res.status(200).json({ secret: secret.secret });
    }
    else {
        res.status(403).end();
    }
};