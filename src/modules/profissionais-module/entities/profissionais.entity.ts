import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ProfissionaisAgenda } from './profissionaisAgenda.entity'; 

@Table({ tableName: 'tab_profissionais', timestamps: false })
export class Profissional extends Model<Profissional> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  nome: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  especialidade: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  telefone: string;

  @HasMany(() => ProfissionaisAgenda)
  schedules: ProfissionaisAgenda[];
}
