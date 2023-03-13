import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll({
            raw:true,
        });
        console.log(data);
        console.log("Data from Homepage");
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
        
    } catch (error) {
        console.log(e);
    }
    
}
 
let getCrud = (req, res) => {
    return res.render("crud.ejs");
}

let postCrud = async (req, res) => {
    await CRUDService.createUser(req.body);
    
    return res.render("crud.ejs");
}

let viewCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log(data);
    console.log("Data from ViewCrud");
    return res.render("viewCrud.ejs",{
        dataTable: data
    }); 
};


//export để dùng hàm ngoài files controllers
module.exports = {
    getHomePage: getHomePage,
    getCrud:getCrud,
    postCrud:postCrud,
    viewCrud:viewCrud,
} 