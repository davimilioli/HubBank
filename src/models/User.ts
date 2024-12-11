import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

export interface UserAttributes {
    id?: number;
    nome: string;
    cpf: number;
    rg: number;
    email: string;
    senha: string;
    celular: number;
    imagem?: string;
    data_criacao: Date | string;
    data_atualizacao: Date | string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public nome!: string;
    public cpf!: number;
    public rg!: number;
    public email!: string;
    public senha!: string;
    public celular!: number;
    public imagem!: string;
    public data_criacao!: Date | string;
    public data_atualizacao!: Date | string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            unique: true,
        },
        rg: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        celular: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        data_criacao: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        data_atualizacao: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: "usuarios",
        timestamps: false,
    }
);

export default User;