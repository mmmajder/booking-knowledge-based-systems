/*kredencijali za placanje
username:  sb-qq2m924846107@personal.example.com
password:  n?I7/iR2
 */

insert into Role (name)
VALUES ('ROLE_ADMIN');/*1*/
insert into Role (name)
VALUES ('ROLE_CUSTOMER');/*2*/
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
       (1, 3),
       (2, 1),
       (2, 3);

-- insert into customer (email, city, deleted, blocked, name, password, phone_number, role, surname, user_auth_id,
--                       number_of_tokens, is_active)
-- values ('customer@gmail.com', 'Customville', false, false, 'Customer',
--         '$2a$10$2Mtev/q1qqNoSn39O7194eZVLBEvgM2dKzjkO0NUWETNKUYY9R/RO', '064 433456', 2, 'Customic', 6, 1000.0, false),
--        ('petar@gmail.com', 'Petrovgrad', false, false, 'Petar',
--         '$2a$10$tnplXdStY6t7kOqqKssMYedAGjJ0T3OJH2BxeT81c1YrDqOUvHLD6', '064 654321', 2, 'Petrovic', 7, 11150.0, false);
--
-- insert into user_auth_roles(user_auth_id, roles_id)
-- values (3, 2),
--        (3, 3),
--        (4, 2),
--        (4, 3);

-- INSERT INTO Hotel (name, address, city, country, rating, stars, image_url, distance_from_center, points)
-- values ('Italian Villa', '123 Via Roma', 'Rome', 'Italy', 8.7, 5,
--         'https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
--         500, 0),
--        ('Coastal Retreat', '456 Via Marina', 'Sorrento', 'Italy', 9.2, 4,
--         'https://images.unsplash.com/photo-1588284722618-55732cfed6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
--         200, 0),
--        ('Tuscan Resort', '789 Via Toscana', 'Florence', 'Italy', 8.5, 4,
--         'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
--         1000, 0),
--        ('Venetian Palace', '321 Piazza San Marco', 'Venice', 'Italy', 9.8, 5,
--         'https://images.unsplash.com/photo-1535825400335-401dbaeea8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
--         300, 0),
--        ('Amalfi Coast Resort', '987 Via Positano', 'Amalfi', 'Italy', 8.3, 3,
--         'https://images.unsplash.com/photo-1528301719638-3f517aebc11c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
--         100, 0),
--        ('Beachfront Hotel', '123 Beach Road', 'Athens', 'Greece', 8.7, 5,
--         'https://images.unsplash.com/photo-1582757345040-9e0d1ebbeefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
--         100, 0),
--        ('Island Paradise', '456 Paradise Island', 'Mykonos', 'Greece', 9.2, 4,
--         'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlrb25vcyUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
--         0, 0),
--        ('Santorini Retreat', '789 Caldera Cliff', 'Santorini', 'Greece', 8.5, 4,
--         'https://images.unsplash.com/photo-1586595847028-8f459a1e58a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80',
--         100, 0),
--        ('Crete Resort', '321 Elafonisi Beach', 'Crete', 'Greece', 9.8, 5,
--         'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JldGUlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
--         200, 0),
--        ('Rhodes Beach Hotel', '987 Rhodes Town', 'Rhodes', 'Greece', 8.3, 3,
--         'https://images.unsplash.com/photo-1671173832142-d4b1ac622b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9kb3MlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
--         50, 0),
--        ('Bosphorus View Hotel', '123 Bosphorus Ave', 'Istanbul', 'Turkey', 8.7, 5,
--         'https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
--         500, 0),
--        ('Antalya Beach Resort', '456 Lara Beach', 'Antalya', 'Turkey', 9.2, 4,
--         'https://images.unsplash.com/photo-1677177906706-c2b597d9e8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFudGFseWElMjBob3RlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
--         0, 0),
--        ('Cappadocia Cave Hotel', '789 Fairy Chimneys St', 'Cappadocia', 'Turkey', 8.5, 4,
--         'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwY2Fkb2NpYSUyMGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
--         2000, 0),
--        ('Pamukkale Thermal Resort', '321 Hierapolis Ave', 'Pamukkale', 'Turkey', 9.8, 5,
--         'https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
--         100, 0),
--        ('Bodrum Beachfront Hotel', '987 Bodrum Peninsula', 'Bodrum', 'Turkey', 8.3, 3,
--         'https://images.unsplash.com/photo-1597390871277-666712598c1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1215&q=80',
--         100, 0);

-- INSERT INTO Review (id, rating, comment, posted)
-- values (1, 9, 'Great hotel with beautiful views!', '2023-05-01'),
--        (2, 8, 'Comfortable stay, friendly staff.', '2023-05-02'),
--        (3, 9, 'Lovely accommodations and excellent service.', '2023-05-03'),
--        (4, 9, 'Perfect beachfront location!', '2023-05-04'),
--        (5, 7, 'Nice hotel, but could use some improvements.', '2023-05-05'),
--        (6, 10, 'Absolutely stunning views and top-notch service.', '2023-05-06'),
--        (7, 8, 'Good hotel for a relaxing getaway.', '2023-05-07'),
--        (8, 9, 'Highly recommended, great facilities.', '2023-05-08'),
--        (9, 7, 'Decent hotel, but not exceptional.', '2023-05-09');

-- INSERT INTO Hotel_Review (hotel_id, review_id)
-- VALUES (1, 1),
--        (2, 2),
--        (3, 3),
--        (4, 4),
--        (5, 5),
--        (6, 6),
--        (7, 7),
--        (8, 8),
--        (9, 9);






-- INSERT INTO AIRPORT(CODE, COUNTRY, NAME)
-- VALUES
--     ('BEG', 'Serbia', 'Belgrad (Beograd) - Belgrade Nikola Tesla International'),
--     ('SOF', 'Bulgaria', 'Sofia - Vrazhdebna'),
--     ('INI', 'Serbia', 'Nis'),
--     ('IST', 'Turkey', 'Istanbul - Istanbul Atatürk Airport'),
--     ('AMS', 'Netherlands', 'Amsterdam - Amsterdam Airport Schiphol'),
--     ('PAR', 'France', 'Paris'),
--     ('MUC', 'Germany', 'Muenchen (Munich) - Franz Josef Strauss'),
--     ('AAR', 'Denmark', 'Aarhus'),
--     ('ZRH', 'Switzerland', 'Zurich (Zürich) - Kloten');
--
-- insert into price_catalog_flight(business_price, choose_seat_price, discount_for_children, economy_price, first_class_price, holidays_price_increase_in_percent, premium_price, priority_boarding_price)
-- values (150, 30, 0.2, 100, 170, 25, 200, 20);
--
-- insert into discount_for_multiple_flight_tickets(discount, number_of_tickets_threshold)
-- values (0.1, 5),
--        (0.2, 10);
--
-- insert into price_catalog_flight_discount_for_multiple_tickets(price_catalog_flight_id, discount_for_multiple_tickets_id)
-- values (1, 1);
--
-- INSERT INTO flight (departure_airport_id, arrival_airport_id, departure_time, arrival_time, airline, price_catalog_id)
-- VALUES (1, 3, '2023-07-01 11:19:42.12', '2023-07-01 13:19:42.12', 'Air Serbia', 1),
--        (3, 4, '2023-07-01T13:59:42.12Z', '2023-07-01T15:19:42.12Z', 'Air Serbia', 1),
--        (3, 4, '2023-07-01 14:59:42.12', '2023-07-01 15:19:42.12', 'Turkish Airlines', 1),
--         (4, 6, '2023-07-01 16:19:42.12', '2023-07-01 19:19:42.12', 'Turkish Airlines', 1),
--         (3, 5, '2023-07-01 13:59:42.12', '2023-07-01 15:19:42.12', 'Air Serbia', 1),
--         (5, 6, '2023-07-01 16:19:42.12', '2023-07-01 19:19:42.12', 'Air France', 1),
--         (1, 2, '2023-07-01 16:19:42.12', '2023-07-01 19:19:42.12', 'Air Serbia', 1),
--         (6, 7, '2023-07-01 20:19:42.12', '2023-07-01 21:19:42.12', 'Air France', 1);

