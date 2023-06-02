const { object, string, number } = require('yup');
const { nanoid } = require('nanoid');

const schema = object().shape({
    slug: string().trim().matches(/[\w\_]/i).default(() => nanoid(5)),
    url: string().trim().url().required(),
    clicks: number().integer().min(0).default(0),
    created_at: number().integer().default(() => Date.now())
});

module.exports = schema;