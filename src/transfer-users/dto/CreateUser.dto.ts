export class CreateUserDTO {
    readonly phone: String;
    readonly address: String;
    readonly name: String;

    constructor(item: any){
        this.phone = item.phone;
        this.address = item.address;
        this.name = item.name;
    }
}