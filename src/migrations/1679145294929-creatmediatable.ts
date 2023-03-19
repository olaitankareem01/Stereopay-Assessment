import { MigrationInterface, QueryRunner } from "typeorm";

export class creatmediatable1679145294929 implements MigrationInterface {
    name = 'creatmediatable1679145294929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log("I'm migrating");
        await queryRunner.query(`CREATE TABLE \`media\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`media\``);
    }

}
