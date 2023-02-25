import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class contactInfoTable1685664038436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'contact_info',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '15',
          isNullable: true,
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
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
          name: 'fk_contact_info_employee', // only name
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
    await queryRunner.dropTable('contact_info');
  }
}
