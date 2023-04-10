--liquibase formatted sql

--changeset Scherbakov Pavel:fill-user-table

insert into public.user(user_login, user_password, user_first_name, user_last_name, user_email)
values
       ('a','a','a','a','a@ya.ru'),
       ('b','b','b','b','b@ya.ru'),
       ('c','c','c','c','c@ya.ru'),
       ('d','d','d','d','d@ya.ru'),
       ('e','e','e','e','e@ya.ru')
       ;