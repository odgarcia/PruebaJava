CREATE DATABASE BeitechTestBD;
CREATE USER user_beitech WITH ENCRYPTED PASSWORD 'beitech123*';
GRANT ALL PRIVILEGES ON DATABASE BeitechTestBD TO user_beitech;

-- Drop table

-- DROP TABLE public.customer

CREATE TABLE public.customer (
	id serial NOT NULL,
	"name" varchar(255) NULL,
	email varchar(255) NULL,
	CONSTRAINT customer_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE public.product

CREATE TABLE public.product (
	id serial NOT NULL,
	"name" varchar NOT NULL,
	price float8 NOT NULL,
	CONSTRAINT product_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE public.customer_available_product

CREATE TABLE public.customer_available_product (
	id serial NOT NULL,
	customer_id int4 NULL,
	product_id int4 NULL,
	CONSTRAINT "CustomerAvailableProduct_pkey" PRIMARY KEY (id),
	CONSTRAINT customer_fk FOREIGN KEY (customer_id) REFERENCES customer(id),
	CONSTRAINT product_fk FOREIGN KEY (product_id) REFERENCES product(id)
);

-- Drop table

-- DROP TABLE public.customer_order

CREATE TABLE public.customer_order (
	id serial NOT NULL,
	order_date date NULL DEFAULT 'now'::text::date,
	total float8 NULL,
	delivery_address varchar(255) NULL,
	customer_id int4 NULL,
	CONSTRAINT customer_order_pkey PRIMARY KEY (id),
	CONSTRAINT customer_fk FOREIGN KEY (customer_id) REFERENCES customer(id)
);

-- Drop table

-- DROP TABLE public.order_detail

CREATE TABLE public.order_detail (
	id serial NOT NULL,
	quantity int4 NULL,
	price float8 NULL,
	product_id int4 NULL,
	order_id int4 NULL,
	CONSTRAINT order_detail_pkey PRIMARY KEY (id),
	CONSTRAINT order_fk FOREIGN KEY (order_id) REFERENCES customer_order(id),
	CONSTRAINT product_fk FOREIGN KEY (product_id) REFERENCES product(id)
);




GRANT ALL ON TABLE public.customer_order TO user_beitech;
GRANT ALL ON TABLE public.product TO user_beitech;
GRANT ALL ON TABLE public.order_detail TO user_beitech;
GRANT ALL ON TABLE public.customer_available_product TO user_beitech;
GRANT ALL ON TABLE public.customer TO user_beitech;