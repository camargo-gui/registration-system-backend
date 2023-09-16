import { pool } from "../../pool";
import { Customer } from "./customer-DTO";


export class CustomerDAO {


    async create(customer:Customer) {
        const DBconection = await pool.getConnection();
        const sql = 'INSERT INTO Customer(cpf,name,id_address) VALUES(?,?,?)'
        const params = [
            customer.cpf,
            customer.name,
            customer.id_address
        ]
        await DBconection.execute(sql,params);
    }

    async update(customer:Customer) {
        const DBconection = await pool.getConnection();
        const sql = 'UPDATE Customer SET cpf = ?, name = ?, id_addres = ? ';
        const params = [
            customer.cpf,
            customer.name,
            customer.id_address
        ];
        await DBconection.execute(sql,params);
    }

    async delete(cpf:string){
        const DBconection = await pool.getConnection();
        const sql = 'DELETE FROM Customer WHERE cpf = ?';
        const params = [cpf];
        await DBconection.execute(sql,params);
    }

    async getAll() {
        const DBconection = await pool.getConnection();
        const sql = 'SELECT * FROM Customer';
        const [rows] = await DBconection.execute(sql,[]);
        return rows;
    }

}