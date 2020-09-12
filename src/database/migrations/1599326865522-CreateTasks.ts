import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateTasks1599326865512 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "task",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "macaddress",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "user_name",
            type: "varchar",
          },
          {
            name: "id_user",
            type: "varchar",
          },
          {
            name: "id_task",
            type: "varchar",
          },
          {
            name: "id_task_validator",
            type: "boolean",
          },
          {
            name: "chat_id",
            type: "varchar",
          },
          {
            name: "message_id",
            type: "varchar",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "done",
            type: "boolean",
          },
          {
            name: "created",
            type: "varchar",
          },
          {
            name: "modified",
            type: "varchar",
          },
          {
            name: "accessed",
            type: "varchar",
          },
          {
            name: "deleted",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("task");
  }
}
