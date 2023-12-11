CREATE TABLE IF NOT EXISTS card
(
    id
    SERIAL
    PRIMARY
    KEY,
    card_id
    VARCHAR
(
    255
)
    NOT NULL,
    title
    VARCHAR
    NOT
    NULL,
    content
    VARCHAR,
    column_id
    VARCHAR
(
    255
) NOT NULL
    )