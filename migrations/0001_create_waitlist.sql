-- Inscripciones a la lista de espera / piloto de Tambo360.
CREATE TABLE IF NOT EXISTS waitlist (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre        TEXT    NOT NULL,
  telefono      TEXT    NOT NULL UNIQUE,
  rol           TEXT,
  provincia     TEXT,
  vacas_ordene  TEXT,
  acepto_privacidad INTEGER NOT NULL CHECK (acepto_privacidad = 1),
  origen        TEXT,
  creado_en     TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_waitlist_creado_en ON waitlist (creado_en);
