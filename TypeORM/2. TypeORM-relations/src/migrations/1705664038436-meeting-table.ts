import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class meeting1705664038436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'meeting',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'zoomUrl',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          isNullable: false,
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          isNullable: false,
          default: 'CURRENT_TIMESTAMP',
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('meeting');
  }
}
