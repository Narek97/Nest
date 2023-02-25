import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class petOwnerId1675017602657 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'pet',
      new TableColumn({
        name: 'ownerId',
        type: 'varchar',
        isPrimary: true,
        isGenerated: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('pet', 'ownerId');
  }
}
