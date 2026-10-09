-- Q-45: el formulario pregunta las vacas del campo, ya no las vacas en ordeñe.
ALTER TABLE waitlist RENAME COLUMN vacas_ordene TO vacas_campo;
