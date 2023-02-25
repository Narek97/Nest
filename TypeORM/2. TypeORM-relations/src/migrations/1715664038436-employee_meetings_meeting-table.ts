import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class employee_meetings_meeting1715664038436
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'employee_meetings_meeting',
      columns: [
        {
          name: 'employeeId',
          type: 'int',
        },
        {
          name: 'meetingId',
          type: 'int',
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employee_meetings_meeting');
  }
}
