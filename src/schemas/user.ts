import { Schema } from "mongoose";

export let userSchema: Schema = new Schema({
    createdAt: Date,
    email:String,
    firstName:String,
    lastName:String,
    password:String
});

userSchema.pre('save',function(next){
    if(!this.createdAt){
        this.createdAt = new Date();
    }
    next();
})