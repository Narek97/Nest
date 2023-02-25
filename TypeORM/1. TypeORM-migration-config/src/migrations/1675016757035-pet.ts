import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class pet1675016757035 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'pet',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isGenerated: true,
          length: '36',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pet');
  }
}
