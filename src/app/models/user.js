import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UserSchema = new Schema({
	username: String,
	email: String
});


export default mongoose.model('User', UserSchema);