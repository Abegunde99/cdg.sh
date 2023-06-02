const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });
const { nanoid } = require('nanoid');

const urlSchema = new mongoose.Schema({
    slug: {
        type: String,
        unique: true,
        default: () => nanoid(3).toLowerCase()
    },
    url: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Number,
        default: Date.now()
    }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;