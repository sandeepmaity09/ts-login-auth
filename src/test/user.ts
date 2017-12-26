import { suite, test } from 'mocha-typescript';
import { IUser } from '../interfaces/user';
import { IUserModel } from '../models/user';
import { userSchema } from '../schemas/user';
// import * as mongoose from 'mongoose';
import mongoose = require('mongoose');

@suite
class UserTest {

    //store test data
    private data: IUser;

    //the User model
    public static User: mongoose.Model<IUserModel>;

    public static before(){
        // use q promises
        global.Promise = require('q').Promise;
        // use q library for mongoose promises
        mongoose.Promise = global.Promise;

    }
}