import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class taskTable1695664038436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'task',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'employeeId',
          type: 'int',
          isNullable: false,
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
      // sranq relationnern en,
      foreignKeys: [
        {
          name: 'fk_task_employee', // only name
          columnNames: ['employeeId'],
          referencedTableName: 'employee',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('task');
  }
}
