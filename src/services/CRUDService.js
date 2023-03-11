import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject)=>{
        try {
            var hashPassword = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordUser = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordUser,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                birthday: data.birthday,
                positionId: data.positionId,
                image: data.image,
                roleId:data.roleId,
            })

            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

