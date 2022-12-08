import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_produto"})
export class Produto{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable: false})
    @ApiProperty()
    nome: string

    @Column("decimal", { precision: 10, scale: 2 })
    @ApiProperty()
    preco: number

    @Column({ default: true})
    @ApiProperty()
    disponibilidade: boolean

    @Column({ default: true})
    @ApiProperty()
    reutilizavel: boolean

    @ApiProperty({type: () => Categoria})
    @ManyToOne(() => Categoria, (Categoria) => Categoria.produto, {
        onDelete: "CASCADE"
    })
    
categoria: Categoria




@ApiProperty({type: () => Usuario})
@ManyToOne(() => Usuario, (Usuario) => Usuario.produto, {
    onDelete: "CASCADE"
})

    usuario: Usuario
}