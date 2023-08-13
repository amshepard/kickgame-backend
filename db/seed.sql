-- Connect to the 'kickgame' database
\c kickgame


-- Insert records into the 'kicks' table
INSERT INTO kicks (name, brand, price, release_date) VALUES
    ('Air Force One', 'Nike', 089.95, '19820301'),
    ('Jordan 1', 'Nike', 064.99, '19850401'),
    ('Superstar', 'Adidas', 064.99, '19700301'),
    ('Kamikaze', 'Reebok', 124.99, '19951101'),
    ('Aero Jam Mid', 'Converse', 074.99, '19930401'),
    ('Air Max 95 OG', 'Nike', 149.99, '19950301'),
    ('Air Yeezy', 'Nike', 214.99, '20090404'),
    ('Kaws Bapesta', 'A Bathing Ape', 150.00, '20060101'),
    ('DRKSHDW Strobe Hexa', 'Rick Owens', 745.00, '20220720'),
    ('Beams Fishing Vest Grey', 'Crocs', 060.00, '20200303'),
    ('Chunky Dunky', 'Nike', 100.00, '20200526'),
    ('990v6 Baklava', 'New Balance', 220.00, '20230317');
