--liquibase formatted sql

--changeset Scherbakov Pavel:create-user-table

create table public.user
(
    user_id bigserial
        constraint user_pkey
            primary key,
    user_login varchar(255) not null unique,
    user_password varchar(255) not null,
    user_first_name varchar(255) not null,
    user_last_name varchar(255) not null,
    user_email varchar(255) not null unique
);
comment on table public.user is 'Город';
comment on column public.user.user_login is 'Логин';
comment on column public.user.user_login is 'Логин';
alter table public.user owner to postgres;