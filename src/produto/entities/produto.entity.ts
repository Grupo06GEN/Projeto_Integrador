import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";
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

    @Column({ length: 100, nullable: false })
    @ApiProperty()
    email: string

    @Column({ length:100, nullable: false })
    @ApiProperty()
    contato: string

    @Column({ length:100, nullable: false })
    @ApiProperty()
    foto: string

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