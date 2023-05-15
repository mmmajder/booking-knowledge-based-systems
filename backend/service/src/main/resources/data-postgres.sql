/*kredencijali za placanje
username:  sb-qq2m924846107@personal.example.com
password:  n?I7/iR2
 */

insert into Role (name)
VALUES ('ROLE_ADMIN');/*1*/
insert into Role (name)
VALUES ('ROLE_DRIVER');/*2*/
insert into Role (name)
VALUES ('ROLE_CUSTOMER');/*3*/
insert into Role (name)
VALUES ('ROLE_USER');

insert into user_auth(deleted, is_enabled, last_password_set, verification_code)
values (false, true, '2021-12-12', null),
       (false, true, '2021-12-12', null),
       (false, true, '2021-12-12', null),
       (false, true, '2021-12-12', null),
       (false, true, '2021-12-12', null),
       (false, true, '2021-12-12', null),
       (false, true, '2021-12-12', null),
       (false, true, '2021-12-12', null);

insert into admin (email, city, deleted, blocked, name, password, phone_number, role, surname, user_auth_id)
values ('admin@gmail.com', 'Adminville', false, false, 'Admin',
        '$2a$10$tnplXdStY6t7kOqqKssMYedAGjJ0T3OJH2BxeT81c1YrDqOUvHLD6', '064 123456', 0, 'Adminic', 1),
       ('admin111@gmail.com', 'Adminville', false, false, 'Admin',
        '$2a$10$tnplXdStY6t7kOqqKssMYedAGjJ0T3OJH2BxeT81c1YrDqOUvHLD6', '064 123456', 0, 'Adminic', 2);

insert into user_auth_roles(user_auth_id, roles_id)
values (1, 1),
       (1, 4),
       (2, 1),
       (2, 4);

insert into user_auth_roles(user_auth_id, roles_id)
values (3, 2),
       (3, 4),
       (4, 2),
       (4, 4),
       (5, 2),
       (5, 4);

insert into customer (email, city, deleted, blocked, name, password, phone_number, role, surname, user_auth_id,
                      number_of_tokens, is_active)
values ('customer@gmail.com', 'Customville', false, false, 'Customer',
        '$2a$10$2Mtev/q1qqNoSn39O7194eZVLBEvgM2dKzjkO0NUWETNKUYY9R/RO', '064 433456', 2, 'Customic', 6, 1000.0, false),
       ('petar@gmail.com', 'Petrovgrad', false, false, 'Petar',
        '$2a$10$tnplXdStY6t7kOqqKssMYedAGjJ0T3OJH2BxeT81c1YrDqOUvHLD6', '064 654321', 2, 'Petrovic', 7, 11150.0, false),
       ('ajder.milan2000@gmail.com', '', false, false, 'Milan',
        '', '', 2, 'Ajder', 8, 0.0, false);

insert into user_auth_roles(user_auth_id, roles_id)
values (6, 3),
       (6, 4),
       (7, 3),
       (7, 4),
       (8, 3),
       (8, 4);
