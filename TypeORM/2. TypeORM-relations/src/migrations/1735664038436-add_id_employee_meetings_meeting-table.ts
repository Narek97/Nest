import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class add_id_employee_meetings_meeting1735664038436
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'employee_meetings_meeting',
      new TableColumn({
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('employee_meetings_meeting', 'id');
  }
}
