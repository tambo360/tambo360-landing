# BUG-001 · /equipo: grilla y "Lo que escuchamos en los tambos" con el mismo fondo

- **Estado:** fixed, pending verification (u76, 23/10/2026)
- **Severidad:** 1 (cosmético): el contenido se lee bien, pero la página no sigue la Regla del Corte (DESIGN.md, Q-56).
- **Tipo:** contradice una convención del design system. El bloque es de u49, que sigue sin aprobar.
- **Dónde:** `src/pages/equipo.astro`, sección `campo-titulo` después de la grilla "Integrantes del equipo".
- **Reproducción:** abrir `/equipo` a 1366 px. La grilla y el bloque "Lo que escuchamos en los tambos" quedan los dos en blanco `rgb(255,255,255)`, unidos por un borde interno (`pt-0` y `border-t`).
- **Hallazgo relacionado (confirmado en la captura):** la lista de problemas de ese bloque usa todavía el ícono en caja, el molde que la home dejó (Q-57).
- **Evidencia:** `testing/evidence/2026-10-23/rediseno-equipo-1366.png`, `rediseno-equipo-390.png`; escenario 63.
- **Causa sugerida (sin confirmar):** el bloque se diseñó en u49 como continuación de la grilla, antes de Q-56.
- **Arreglo (u76, 23/10/2026):** el texto del bloque quedó aprobado (QT-19). El bloque pasa a ser una sección verde-900 (QT-26), sin borde interno, y los problemas pasan a una lista con divisores, sin el ícono en caja. Papel no servía porque el cierre de abajo ya es papel. Orden de fondos: papel, blanco, verde-900, papel. Captura del build: `evidence/2026-10-23/u76-equipo-1366.png`. Falta volver a correr el escenario 63 para verificarlo.
