import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);
  
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject)=>{
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let passwordUserHashed = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: passwordUserHashed,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                // birthday: data.birthday,
                // positionId: data.positionId,
                // image: data.image,
                roleId:data.roleId,
            })

            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw:true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    getAllUser: getAllUser,
    createUser: createUser,
}

