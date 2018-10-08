INSERT INTO public.customer (id, "name", email) VALUES(1, 'Oscar Garcia', 'correofalso@corre.com');
INSERT INTO public.customer (id, "name", email) VALUES(3, 'Jhon Smith', 'jhonsmith@corre.com');
INSERT INTO public.customer (id, "name", email) VALUES(2, 'JazminAngulo', 'correofalse@corre.com');
INSERT INTO public.product (id, "name", price) VALUES(1, 'Producto #1', 1275);
INSERT INTO public.product (id, "name", price) VALUES(2, 'Producto #2', 1200);
INSERT INTO public.product (id, "name", price) VALUES(3, 'Producto #3', 2000);
INSERT INTO public.product (id, "name", price) VALUES(4, 'Producto #4', 5000);
INSERT INTO public.product (id, "name", price) VALUES(5, 'Producto #5', 1000);
INSERT INTO public.product (id, "name", price) VALUES(6, 'Producto #6', 10000);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(1, 1, 1);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(2, 1, 2);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(3, 1, 3);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(4, 2, 1);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(5, 2, 2);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(6, 3, 4);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(7, 3, 5);
INSERT INTO public.customer_available_product (id, customer_id, product_id) VALUES(8, 3, 6);
INSERT INTO public.customer_order (id, order_date, total, delivery_address, customer_id) VALUES(1, '2018-10-07', 1275, 'calle falsa 123', 1);
INSERT INTO public.customer_order (id, order_date, total, delivery_address, customer_id) VALUES(2, '2018-10-07', 1200, 'calle falsa 123', 2);
INSERT INTO public.customer_order (id, order_date, total, delivery_address, customer_id) VALUES(3, '2018-10-07', 1000, 'calle falsa 123', 3);
INSERT INTO public.order_detail (id, quantity, price, product_id, order_id) VALUES(1, 1, 1275, 1, 1);
INSERT INTO public.order_detail (id, quantity, price, product_id, order_id) VALUES(2, 1, 1200, 2, 2);
INSERT INTO public.order_detail (id, quantity, price, product_id, order_id) VALUES(3, 1, 1000, 5, 3);
