# Puchilabs

Laboratorio de experimentos web de Puchita y Puchito.

## Quiénes somos

**Puchilabs** es el espacio de experimentación de Puchita y Puchito, una pareja afincada en Jaén, España.

### Puchito

Ingeniero informático nacido en Jaén (1986). Trabaja como ingeniero de software construyendo un SaaS para el sector clínico. Aporta al laboratorio la visión técnica: inicia prototipos, define la arquitectura de los proyectos y plantea los retos de aprendizaje.

### Puchita

Biotecnóloga nacida en Cali, Colombia (1996), ahora viviendo en España. Aprendiz de desarrollo web en Academia X. Ya domina HTML y CSS, y actualmente avanza en JavaScript. Aporta al laboratorio las ganas de aprender, experimentar y crecer como desarrolladora.

## Objetivo

Puchilabs nace con dos propósitos:

1. **Laboratorio técnico** — un espacio libre para experimentar con tecnologías web sin las restricciones de un proyecto de producción.
2. **Espacio de aprendizaje** — un entorno real donde Puchita practique lo que estudia, trabajando en proyectos concretos con herramientas profesionales (control de versiones, Claude Code, etc.).

## Dinámica de trabajo

- **Puchito** arranca proyectos o prototipos, define la estructura base y abre issues en GitHub con las tareas para Puchita.
- **Puchita** toma esas tareas, las desarrolla, experimenta y aprende en el proceso.
- **Claude Code** actúa como asistente de ambos, adaptando su nivel de ayuda según quién esté en la sesión.

Las tareas pendientes se gestionan como **issues de GitHub** y se organizan en un kanban. Cada proyecto tiene sus propias tareas etiquetadas con `aprendizaje` o `reto`.

## Herramientas

| Herramienta | Uso |
|---|---|
| Claude Code | Asistente de desarrollo en la terminal |
| Git + GitHub | Control de versiones y gestión de tareas |
| HTML, CSS, JS | Stack base del laboratorio |

## Estructura del repositorio

Cada proyecto vive en su propia carpeta con su propio README. El fichero `index.html` de la raíz sirve como página de inicio con el listado de proyectos.

```
puchilabs/
├── index.html      — página de inicio del laboratorio
├── CLAUDE.md       — instrucciones de comportamiento para Claude Code
├── TIPS.md         — consejos que Claude comparte con Puchita al inicio de sesión
├── PUCHITA.md      — progreso y glosario personal de Puchita
└── [proyectos]/    — cada proyecto en su propia carpeta con su README
```

## Proyectos

| # | Proyecto | Descripción | Stack |
|---|---|---|---|
| 01 | [Baraja de pareja](baraja-de-pareja/) | Baraja de cartas con preguntas para conversar en pareja | HTML, CSS, JS |
