import { pool } from "../../pool";
import { Address } from "./address-DTO";


export class AddressDAO {

    async create(address:Address) {
        const DBconection = await pool.getConnection();
        const sql = 'INSERT INTO address(zip_code,street,number,neightborhood,city,state)\
        VALUES(?,?,?,?,?,?,?)'
        const params = [
            address.zip_code,
            address.street,
            address.number,
            address.neighborhood,
            address.city,
            address.state
        ]
        await DBconection.execute(sql,params);
    }

    async update(address:Address) {
        const DBconection = await pool.getConnection();
        const sql = 'UPDATE address SET zip_code = ? ,street = ?,number = ?,\
        neightborhood = ?,city = ?,state = ?';
        const params = [
            address.zip_code,
            address.street,
            address.number,
            address.neighborhood,
            address.city,
            address.state
        ];
        await DBconection.execute(sql,params);
    }

    async delete(cpf:string){
        const DBconection = await pool.getConnection();
        const sql = 'DELETE FROM address WHERE id = ?';
        const params = [cpf];
        await DBconection.execute(sql,params);
    }

    async getAll() {
        const DBconection = await pool.getConnection();
        const sql = 'SELECT * FROM Address';
        const [rows] = await DBconection.execute(sql,[]);
        return rows;
    }

}