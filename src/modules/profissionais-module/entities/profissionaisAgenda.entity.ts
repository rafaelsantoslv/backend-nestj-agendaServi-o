import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Profissional } from './profissionais.entity';  // Supondo que você tenha um modelo 'Professional' definido em outro arquivo

@Table({ tableName: 'tab_profissionais_horarios', timestamps: false })
export class ProfissionaisAgenda extends Model<ProfissionaisAgenda> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Profissional)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  profissional_id: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  semana: string;

  @Column({
    allowNull: false,
    type: DataType.TIME,
  })
  inicio_hora: string;

  @Column({
    allowNull: false,
    type: DataType.TIME,
  })
  fim_hora: string;
}
