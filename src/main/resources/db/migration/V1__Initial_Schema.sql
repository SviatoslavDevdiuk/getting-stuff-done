CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS authentication_details (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_id BIGINT,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user" (id)
    );

CREATE TABLE IF NOT EXISTS board (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    board_number SMALLINT
    );

CREATE TABLE IF NOT EXISTS "column" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    column_number SMALLINT,
    board_id BIGINT,
    CONSTRAINT fk_board FOREIGN KEY (board_id) REFERENCES board (id),
    CONSTRAINT unique_column_number_per_board UNIQUE (board_id, column_number)
    );

CREATE TABLE IF NOT EXISTS card (
    id SERIAL PRIMARY KEY,
    card_number VARCHAR(255),
    title VARCHAR(255),
    content TEXT,
    column_number SMALLINT,
    column_id BIGINT,
    CONSTRAINT fk_column FOREIGN KEY (column_id) REFERENCES "column" (id),
    CONSTRAINT unique_card_number_per_column UNIQUE (column_id, card_number)
    );

CREATE TABLE user_board (
    user_id BIGINT,
    board_id BIGINT,
    CONSTRAINT fk_user_board_user FOREIGN KEY (user_id) REFERENCES "user" (id),
    CONSTRAINT fk_user_board_board FOREIGN KEY (board_id) REFERENCES board (id),
    CONSTRAINT unique_user_board UNIQUE (user_id, board_id)
);

