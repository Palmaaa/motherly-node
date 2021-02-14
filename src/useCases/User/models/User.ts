import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('motherly_rest_api_user')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    is_active: boolean;
    
    @Column()
    is_staff: boolean;

    @Column()
    admin: boolean;
    
    @Column()
    is_superuser: boolean;

    @Column()
    chg_psswd_code: string;

    @CreateDateColumn()
    created: Date;

    @Column()
    home_notification: number;
    
    @Column()
    num_lidos_biblioteca: number;

    @Column()
    tutoriais_completos: boolean;

    @Column()
    conquista_hg_sono: boolean;

    @Column()
    amamentacao_notificada: boolean;

    @Column()
    con_1_meditacao: boolean;
    
    @Column()
    con_2_meditacao: boolean;

    @Column()
    con_3_meditacao: boolean;

    @Column()
    con_1_relaxa: boolean;

    @Column()
    con_2_relaxa: boolean;

    @Column()
    con_3_relaxa: boolean;

    @CreateDateColumn()
    last_promis: Date;

    @Column()
    altura: number;

    @CreateDateColumn()
    data_nascimento: Date;
    
    @CreateDateColumn()
    last_login: Date;

}

export default User;