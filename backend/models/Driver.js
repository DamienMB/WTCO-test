import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const DriverSchema = new Schema({
    last_name: String,
    first_name: String,
    nickname: String,
    picture: String,
    birthdate: Date,
    sexe: String,
    adress: String,
    licence: String,
    licence_validity: Date,
    medical_visits: [{ date: Date}],
    fcos: [{ date: Date }],
    formations: [{date: Date, label: String, organism: String}],
    nss: Number,
    mail: String,
    password: String,
    phone: Number,
    nationality: String,
    compagny_id: ObjectId,
    languages: [ObjectId],
    current_vehicles: [ObjectId],
    vehicles_history: [ObjectId],
    missions: [ObjectId],
    articles_fav: [ObjectId],
    friends: [ObjectId],
});

// export our module to use in server.js
export default mongoose.model('Driver', DriverSchema);
