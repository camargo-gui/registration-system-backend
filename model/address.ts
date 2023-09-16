import { AddressDAO } from "../database/DAO/address/address-DAO";


export class Address {

    #id: number;
    #zip_code: string;
    #street: string;
    #number: number;
    #neightborhood: string;
    #city: string;
    #state: string;
    #DAO: AddressDAO

    constructor(
        zip_code: string,
        street: string,
        number: number,
        neightborhood: string,
        city: string,
        state: string
    ) {
        this.#zip_code = zip_code,
            this.#street = street,
            this.#number = number,
            this.#neightborhood = neightborhood,
            this.#city = city,
            this.#state = state
        this.#DAO = new AddressDAO()
    }

    async create() {
        await this.#DAO.create({
            zip_code: this.#zip_code,
            street: this.#street,
            number: this.#number,
            neighborhood: this.#neightborhood,
            city: this.#city,
            state: this.#state
        })
    }
}