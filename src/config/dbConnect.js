/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm?authSource=admin');

const db = mongoose.connection;

export default db;
