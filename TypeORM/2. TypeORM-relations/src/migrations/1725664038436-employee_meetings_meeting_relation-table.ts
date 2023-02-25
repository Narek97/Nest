import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class employee_meetings_meeting_relation1725664038436
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'employee_meetings_meeting',
      new TableForeignKey({
        name: 'fk_employee_meetings_meeting',
        columnNames: ['employeeId'],
        referencedTableName: 'employee',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'employee_meetings_meeting',
      new TableForeignKey({
        name: 'fk_meeting_employee_meeting',
        columnNames: ['meetingId'],
        referencedTableName: 'meeting',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'employee_meetings_meeting_relation',
      'fk_employee_meetings_meeting',
    );
    await queryRunner.dropColumn(
      'employee_meetings_meeting_relation',
      'fk_meeting_employee_meeting',
    );
  }
}
