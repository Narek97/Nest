import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class userPetRelation1675016839073 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'pet',
      new TableForeignKey({
        columnNames: ['ownerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('pet');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('id') !== -1,
    );
    await queryRunner.dropForeignKey('pet', foreignKey);
  }
}
