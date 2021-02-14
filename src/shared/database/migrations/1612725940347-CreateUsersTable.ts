import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1612725940347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'motherly_rest_api_user',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'is_active',
                        type: 'boolean',
                        default: 'true',
                    },
                    {
                        name: 'is_staff',
                        type: 'boolean',
                        default: 'true',
                    },
                    {
                        name: 'is_superuser',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'chg_psswd_code',
                        type: 'varchar',
                    },
                    {
                        name: 'admin',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'created',
                        type: 'date',
                        default: 'now()',
                    },
                    {
                        name: 'home_notification',
                        type: 'int',
                    },
                    {
                        name: 'num_lidos_biblioteca',
                        type: 'int',
                        default: '0',
                    },
                    {
                        name: 'tutoriais_completos',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'conquista_hg_sono',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'amamentacao_notificada',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'con_1_meditacao',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'con_2_meditacao',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'con_3_meditacao',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'con_1_relaxa',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'con_2_relaxa',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'con_3_relaxa',
                        type: 'boolean',
                        default: 'false',
                    },
                    {
                        name: 'last_promis',
                        type: 'date',
                    },
                    {
                        name: 'altura',
                        type: 'int',
                    },
                    {
                        name: 'data_nascimento',
                        type: 'date',
                    },
                    {
                        name: 'last_login',
                        type: 'timestamp',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('motherly_rest_api_user')
    }

}
