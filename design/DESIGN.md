# Design system

Reglas para cualquier interfaz generada en este proyecto. Son obligatorias: si algo no encaja, propón un cambio aquí en vez de saltártelas.

## Tipografía

Pareja "Accesible": Atkinson Hyperlegible Next para todo (titulares, texto e interfaz) + Atkinson Hyperlegible Mono para datos y etiquetas. Atkinson está diseñada por el Braille Institute para máxima legibilidad: letras que no se confunden (I/l/1, O/0). Valores en `tokens/typography.css`.

### Uso
- Titulares (hero, h1, h2): `font-display`, peso 700, tracking -0.02em.
- Texto e interfaz: `font-sans`. Pesos permitidos: 400 (texto), 500 (botones, etiquetas, navegación), 600 (énfasis, títulos de tarjeta) y 700 (solo titulares).
- Jerarquía en interfaz primero con tamaño y color (`text-fg` / `text-fg-muted`); el peso como apoyo.
- Horas, IDs, códigos y etiquetas en mayúsculas: `font-mono text-xs uppercase tracking-wider`.
- Tablas, precios y contadores: `tabular-nums`.
- Párrafos: `max-w-[65ch]`, interlineado 1.55. No centres párrafos de más de dos líneas.
- Tamaño mínimo de texto: 14px (`text-sm`). `text-xs` solo para etiquetas en mono.

### Escala (usa SOLO estos tamaños)
- text-display-2xl: 64px / 66px (font-display)
- text-display-xl: 48px / 49px (font-display)
- text-display-lg: 36px / 40px (font-display)
- text-heading: 28px / 32px (font-display)
- text-title: 20px / 28px, peso 600
- text-lg: 18px / 28px
- text-base: 16px / 24px
- text-sm: 14px / 20px
- text-xs: 12px / 16px (mono, etiquetas)

No uses tamaños arbitrarios (`text-[17px]`). Si hace falta uno nuevo, propónlo y añádelo aquí.

### Prohibido
- Inter, Roboto o system-ui como fuente visible.
- `font-light` y más finos en texto de interfaz; `font-extrabold` y `font-black`.
- Más de tres pesos distintos en una misma pantalla.
- Texto con degradado (`bg-clip-text`).
- Emojis en títulos, botones o etiquetas.
- Texto de cuerpo por debajo de 14px.

## Color

Neutro "Papel" (gris con matiz 85°, tinte 8) + acento "Cian" (#0099C6). Modo claro y oscuro con los mismos tokens; valores en `globals.css`.

### Tokens semánticos (usa SOLO estos)
- Fondos: `bg` (página), `surface` (paneles, tarjetas, tablas).
- Bordes: `line` (separadores), `line-strong` (inputs, botones secundarios).
- Texto: `fg` (principal), `fg-muted` (secundario), `fg-subtle` (labels, metadatos).
- Acento: `accent` (fondo del botón principal), `accent-hover`, `accent-fg` (texto sobre accent), `accent-soft` (fila seleccionada, resaltado), `accent-text` (enlaces, palabras destacadas, foco).
- Estados: `success`, `warning`, `danger` y sus `*-soft` para fondos.

### Uso
- Neutros para el 90% de la pantalla. El acento solo en: la acción principal, la selección, el foco y algún detalle puntual.
- Una sola acción con `bg-accent` por vista.
- Para texto en color usa siempre `text-accent-text`, nunca `text-accent`.
- El texto sobre `bg-accent` es oscuro (`text-accent-fg`), nunca blanco.
- El acento tiene poco contraste con el fondo: el botón principal lleva siempre `border border-line-strong` en modo claro.
- Estados con fondo suave + texto, y siempre con palabra o icono además del color.

### Prohibido
- Clases de la paleta por defecto de Tailwind (`slate-*`, `gray-*`, `blue-*`, `purple-*`…). No existen en este proyecto.
- Degradados de cualquier tipo.
- Colores hex sueltos en componentes.

## Espaciado, radios y bordes

Densidad "Normal", radio 6px, separación "Líneas", sombras "Solo lo que flota".

Valores en `tokens/space.css`.

### Espaciado
- Base de 4px. Usa solo la escala de Tailwind en múltiplos de 4 (`1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24`). Nada de `p-[13px]` ni `mt-7`.
- Tokens semánticos (úsalos en vez de números sueltos):
  - `control-h`: 40px. Altura de botones, inputs y selects.
  - `control-x`: 14px. Padding horizontal de botones.
  - `card-p`: 24px. Padding interior de tarjetas, modales y paneles.
  - `stack`: 16px. Separación entre campos de un formulario.
  - `gap`: 20px. Separación entre tarjetas o columnas.
  - `row-h`: 44px. Altura de fila en tablas y listas.
  - `section`: 80px. Separación vertical entre secciones de una página.
- Dentro de un componente, menos espacio que entre componentes. Entre secciones, mucho más (`section`).
- Contenido de lectura con ancho máximo (`max-w-[65ch]`); layouts de app hasta `max-w-7xl`.

### Radios
- `rounded-sm` (3px): Etiquetas, checkboxes, items de menú.
- `rounded` (6px): Inputs, menús y botones.
- `rounded-lg` (9px): Tarjetas y modales.
- No mezcles radios fuera de estos tres. Elementos anidados: el interior nunca más redondo que el exterior.

### Bordes y separación
- Separa con bordes de 1px (`border border-line`). Las tarjetas usan `bg-surface` y borde; nada de fondos de color para separar.

### Sombras
- Sin sombras en tarjetas. Solo lo que flota (menús, popovers, modales, toasts) usa `shadow-float`.

### Prohibido
- `rounded-2xl`, `rounded-3xl` o `rounded-full` en tarjetas y botones.
- `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`.
- Tarjetas dentro de tarjetas con borde y sombra a la vez.
- Espaciado uniforme en toda la página: la jerarquía también se construye con el espacio.

## Componentes

Usa siempre estas recetas. Si un componente no está aquí, constrúyelo con los mismos tokens y propón añadirlo.

### Botones
- Principal: "Relleno de acento". Uno solo por vista.
- Secundario: "Tono". Fantasma para acciones terciarias (cerrar, cancelar en barras).
- Peligro: fondo `danger`, solo para confirmar acciones destructivas (normalmente dentro de un modal).
- Con icono: icono de 16px a la izquierda del texto. Botón solo icono: cuadrado (`w-control`) y siempre con `aria-label`.
- Cargando: spinner de 14px + texto en gerundio ("Guardando…"), botón desactivado.
- Tamaños: normal (`h-control`, 40px) y pequeño (32px) para tablas y barras. No hay botón grande.

### Formularios
- Inputs: "Relleno". Label encima, siempre visible (nunca solo placeholder), `text-sm font-medium`.
- Ayuda debajo en `text-sm text-fg-subtle`. Error: borde `danger` + mensaje con icono debajo. Nunca solo color.
- Checkbox, radio y switch: "Acento". Switch solo para ajustes que se aplican al momento; checkbox para formularios con "Guardar".

### Foco
- "Anillo de acento" en todo elemento interactivo con `:focus-visible`. Nunca `outline-none` sin alternativa.

### Datos
- Tablas: "Cebra". Cabecera en mono mayúsculas pequeña. Horas e IDs en mono. Cifras alineadas a la derecha con `tabular-nums`. Fila seleccionada con `bg-accent-soft` y una barra de 2px a la izquierda.
- Etiquetas de estado: "Fondo suave". Siempre con texto, no solo color.
- Pestañas: "Subrayado". Con contador en mono si aporta.

### Avisos y flotantes
- Avisos en página: "Fondo suave".
- Menús, popovers, modales y toasts: `bg-surface` + borde + `shadow-float` (los toasts, en tinta: `bg-fg text-bg`).
- Modales destructivos: título en pregunta concreta ("¿Cancelar la reserva de X?"), texto con la consecuencia, botones "Mantener" + acción en `danger`.

### Iconos
- Librería: Phosphor (`@phosphor-icons/react`), estilo regular. 16px en botones y menús, 18–20px sueltos. Color heredado del texto.
- Nunca iconos dentro de cuadrados o círculos de color. Nunca emojis como iconos.
- No mezcles librerías.

### Copy en componentes
- Botones con verbo + objeto: "Guardar reserva", "Enviar SMS". Nada de "Enviar", "OK" o "Sí".
- Mensajes concretos con datos reales ("Reserva movida a M4"), no genéricos ("¡Operación realizada con éxito!").
- Sin signos de exclamación ni emojis.

### Recetas Tailwind

Clases exactas para cada componente (`bg-line/55` es el gris de relleno).

```
/* Recetas Tailwind v4 — usan los tokens de tokens/*.css */

BOTÓN (base)    inline-flex items-center justify-center gap-2 h-control px-control-x rounded text-sm font-medium whitespace-nowrap transition-colors disabled:opacity-45 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text
  principal     bg-accent text-accent-fg border border-line-strong dark:border-accent hover:bg-accent-hover
  secundario    bg-line/55 text-fg hover:bg-line
  fantasma      text-fg-muted hover:bg-line/55 hover:text-fg
  peligro       bg-danger text-bg hover:brightness-95
  solo icono    w-control px-0
  pequeño       h-8 px-2.5 text-[13px]

INPUT           h-control w-full text-[15px] text-fg placeholder:text-fg-subtle disabled:opacity-50 px-3 rounded border border-transparent bg-line/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text
  error         border-danger bg-danger-soft  + mensaje: text-sm text-danger con icono
  label         text-sm font-medium
  ayuda         text-sm text-fg-subtle
CHECKBOX        size-[18px] appearance-none rounded-sm border border-line-strong bg-bg checked:bg-accent checked:border-accent-text (marca en text-accent-fg)
SWITCH activo   bg-accent border border-accent-text (pomo bg-accent-fg)

TABLA           w-full text-sm tabular-nums · contenedor: border border-line rounded-lg bg-surface overflow-auto
  th            h-9 px-4 text-left font-mono text-[10.5px] uppercase tracking-wider text-fg-subtle font-normal border-b border-line
  tr            even:bg-line/55 hover:bg-accent-soft
  td            h-row px-4 whitespace-nowrap · horas e IDs: font-mono text-fg-muted
ETIQUETA        inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium · ok: bg-success-soft text-success · aviso: bg-warning-soft text-warning · error: bg-danger-soft text-danger · neutro: bg-line/55 text-fg-muted
PESTAÑAS        lista: flex gap-6 border-b border-line · pestaña: h-10 -mb-px border-b-2 border-transparent text-sm font-medium text-fg-muted aria-selected:border-fg aria-selected:text-fg

AVISO           flex gap-3 items-start px-3.5 py-3 text-sm · título font-semibold · texto text-fg-muted · rounded · error: bg-danger-soft · aviso: bg-warning-soft · ok: bg-success-soft · info: bg-accent-soft · icono del color del estado
MENÚ            bg-surface border border-line rounded shadow-float p-1.5 min-w-60 · item: flex items-center gap-2.5 px-2.5 py-2 rounded-sm text-sm hover:bg-accent-soft · destructivo: text-danger
MODAL           fondo: bg-fg/30 · panel: bg-surface border border-line rounded-lg shadow-float max-w-md · cabecera p-card pb-2 (título text-xl font-semibold) · pie: flex justify-end gap-2 p-card pt-5
TOAST           bg-fg text-bg rounded shadow-float px-3.5 py-2.5 text-sm flex items-center gap-3 · acción: botón texto subrayado

ICONOS          @phosphor-icons/react · size 16 en botones, 18–20 sueltos
```
