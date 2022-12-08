import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: "tb_usuario" })
export class Usuario{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number


    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome: string

    @IsEmail()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    usuario: string //e-mail

    @MinLength(8)
    @Column({length: 255, nullable: false})
    @IsNotEmpty()
    @ApiProperty()
    senha: string

    @Column({length: 5000})
    @ApiProperty()
    foto: string

    @ApiProperty({ type: () => Produto})
    @OneToMany(() => Produto, (Produto) => Produto.usuario)
    produto: Produto[]

}