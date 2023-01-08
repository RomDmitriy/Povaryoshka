import * as mongoose from "mongoose";

export async function init() {
    if (process.env.MONGODB_LINK === undefined) throw Error('MONGODB_LINK ENV doens\'t set');

    // Подготовка к Mongoose 7
    mongoose.set('strictQuery', false);

    await mongoose.connect(process.env.MONGODB_LINK);

    console.log('Database connected.');
}