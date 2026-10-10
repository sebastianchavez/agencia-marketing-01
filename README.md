# Nova Marketing — Landing Page Template

Template de sitio web completo tipo landing page para una agencia de marketing digital, construido con HTML semántico, Tailwind CSS y JavaScript nativo. Listo para personalizar y desplegar.

## Stack tecnológico

- **HTML5** — Marcado semántico
- **Tailwind CSS 3.4** — Framework CSS (via CDN)
- **JavaScript nativo (vanilla)** — Lógica e interactividad en `main.js`
- **Google Fonts (Inter)** — Tipografía principal
- **Sin build, sin npm** — Solo abrir `index.html` en un navegador

## Estructura del proyecto

```
agencia-marketing-01/
├── index.html              Página de inicio (hero + stats + servicios + casos + testimonios + CTA)
├── nosotros.html           Sobre nosotros (timeline + equipo + valores + razones)
├── servicios.html          Nuestros 10 servicios + proceso + stack de herramientas
├── horarios.html           Horario semanal de workshops (tabs L-S + modalidad)
├── precios.html            3 planes mensuales + servicios individuales + FAQ
├── galeria.html            Galería con filtros por categoría + lightbox
├── contacto.html           Formulario completo + info + horarios + mapa de Google Maps
├── privacidad.html         Política de privacidad (11 secciones)
├── terminos.html           Términos y condiciones (12 secciones)
├── README.md               Este archivo
└── main.js                 Lógica compartida: mocks + renders + interactividad
```

## Cómo usar

1. Clona o descarga los archivos en una carpeta local.
2. Abre `index.html` directamente en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
3. Para un servidor local opcional (recomendado para evitar restricciones del navegador):
   ```bash
   # Con Python 3
   python -m http.server 8000

   # Con Node.js (http-server)
   npx http-server

   # Con PHP
   php -S localhost:8000
   ```
4. Visita `http://localhost:8000` en tu navegador.

## Páginas incluidas

| Página | Ruta | Descripción |
|--------|------|-------------|
| Inicio | `index.html` | Hero, stats animados, 6 servicios destacados, casos de éxito, testimonios, CTA final |
| Sobre nosotros | `nosotros.html` | Historia timeline (5 hitos), equipo (4 personas), 4 valores, 4 razones |
| Servicios | `servicios.html` | 10 servicios + proceso en 4 pasos + 18 herramientas del stack |
| Horarios | `horarios.html` | Tabs por día (L-S) con workshops de marketing + info adicional |
| Precios | `precios.html` | 3 planes mensuales + 8 paquetes individuales + FAQ (6 preguntas) |
| Galería | `galeria.html` | 16 fotos en 4 categorías con filtros + lightbox al hacer click |
| Contacto | `contacto.html` | Formulario validado + info de contacto + horarios + mapa Google Maps |
| Política de privacidad | `privacidad.html` | Documento legal con 11 secciones |
| Términos y condiciones | `terminos.html` | Documento legal con 12 secciones |

## Características

### Diseño
- Paleta vibrante de agencia creativa: magenta principal (#ec4899) + rosa light (#f472b6)
- Diseño 100% responsive (mobile, tablet, desktop)
- **Hero con imagen de fondo** + gradiente overlay + badge con efecto pulse
- **Imágenes de Picsum Photos** para mockups consistentes
- **Navbar sticky** con efecto blur y modo oscuro con toggle
- **Tarjetas con efecto hover** y elevación
- **Iconografía SVG inline** (no requiere Font Awesome ni librerías)

### Navegación
- Navbar sticky con efecto blur (modo claro y oscuro)
- Indicador de página activa automático (via JS)
- Menú hamburguesa en mobile con cierre al hacer click
- Toggle de modo oscuro con persistencia en `localStorage`

### Animaciones (JS nativo)
- **Scroll reveal**: los elementos aparecen con fade-up al entrar en viewport (`IntersectionObserver`)
- **Modo oscuro**: toggle con persistencia
- **Tabs por día** en horarios (sin recargar)
- **Filtros por categoría** en galería con efecto stagger
- **Lightbox** en galería (click para abrir, ESC para cerrar)
- **Validación de formulario** en blur y submit
- **Año dinámico** en footer (se actualiza automáticamente)
- **Animación pulse** en badges y CTAs
- **Gradiente animado** en sección CTA final
- **Scrollbar personalizada** en color primario

### Datos mock incluidos

Para que el template se vea "listo para producción", incluye los siguientes datos ficticios fáciles de personalizar:

- **Agencia:** Nova Marketing (eslogan: "Estrategias que conectan, resultados que escalan")
- **Dirección:** Av. Providencia 1234, Piso 8, Providencia, Santiago, Chile
- **Teléfonos:** +56 9 8765 4321 / +56 2 2987 6543
- **Emails:** hola@novamarketing.cl / ventas@novamarketing.cl / privacidad@novamarketing.cl
- **Horarios:** Lun-Vie 09:00-19:00 | Sáb 10:00-14:00 | Dom cerrado
- **Equipo:** 4 personas (Sofía Navarro, Andrés Vega, Camila Rojas, Diego Salazar)
- **Stats:** 10+ años, 180 clientes, 520 campañas, 25 premios
- **10 servicios:** Estrategia Digital, SEO, SEM, Social Media, Branding, Diseño Web, Email Marketing, Contenidos, Audiovisual, Influencers
- **3 planes:** Starter ($450.000), Professional ($950.000 destacado), Enterprise ($2.400.000)
- **8 paquetes individuales** desde $250.000
- **Galería:** 16 fotos en 4 categorías (Campañas, Branding, Eventos, Equipo)
- **6 FAQs** (precio + reserva)

Busca y reemplaza `Nova Marketing`, `hola@novamarketing.cl`, los teléfonos y direcciones según tu negocio.

## Personalización rápida

### Cambiar colores
Edita las variables CSS en `main.js` (función `inyectarEstilos`) o el `<head>` de cada HTML:
```javascript
colors: {
  primary: "#ec4899",        // Magenta principal
  "primary-light": "#f472b6", // Rosa claro
  "background-light": "#f7f6f8",
  "background-dark": "#0f0a14",
}
```

### Cambiar los datos mock
Todos los datos están en `main.js` al inicio del archivo, en objetos JavaScript (`servicios`, `equipo`, `planes`, `galeria`, `faqs`, etc.). Modificá los valores y se reflejarán automáticamente en todas las páginas.

### Cambiar el mapa
En `contacto.html`, reemplaza el `src` del iframe con tu ubicación de Google Maps:
1. Ve a Google Maps → tu ubicación → Compartir → Incorporar un mapa
2. Copia el `src` del iframe y reemplaza el actual.

### Cambiar el año del copyright
Se actualiza automáticamente con JavaScript leyendo `new Date().getFullYear()` en `main.js` (función `setAnioFooter`). No requiere cambios manuales.

### Cambiar la fuente
Edita el `<link>` de Google Fonts en el `<head>` de cada página y la propiedad `font-family` en `body` dentro del `tailwind.config`.

## Imágenes

Todas las imágenes del template se cargan desde `picsum.photos` con seeds fijos para garantizar consistencia. Si quieres reemplazar las imágenes por unas propias:

1. Sube tus imágenes a una carpeta (ej. `assets/images/`)
2. Reemplaza las URLs en `main.js` apuntando a las rutas locales
3. Para mejor rendimiento, optimiza las imágenes (WebP, tamaño máx 200kb para fotos de cards)

URLs de Picsum utilizadas (referencia para reemplazo):
- Hero: `https://picsum.photos/seed/novahero/1920/1080`
- Equipo: `https://i.pravatar.cc/300?img=47`, `12`, `44`, `33`
- Casos de éxito: `casobloom`, `casotech`, `casolumi`
- Galería: 16 imágenes con seeds `novacamp*`, `novabrand*`, `novaevento*`, `novaequipo*`

## Compatibilidad

- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+
- Navegadores móviles modernos (iOS Safari 14+, Chrome Android)

Incluye fallbacks para navegadores sin `IntersectionObserver` (los elementos simplemente aparecen sin animación).

## Modo oscuro

El modo oscuro está implementado con la clase `dark` de Tailwind. Se activa mediante el botón con id `btnDarkMode` y la preferencia se guarda en `localStorage`. La paleta clara es la siguiente:

- `background-light`: #f7f6f8 (gris muy claro)
- `background-dark`: #0f0a14 (morado muy oscuro)
- `primary`: #ec4899 (magenta)
- `primary-light`: #f472b6 (rosa claro)

## Notas legales

Los textos de `privacidad.html` y `terminos.html` son plantillas genéricas de ejemplo adaptadas al rubro de una agencia en Chile. Antes de usar en producción:

1. Revisa y adapta el contenido con asesoría legal especializada.
2. Actualiza las fechas de "última actualización".
3. Verifica el cumplimiento con la legislación local aplicable (Ley 19.628 sobre Protección de Datos en Chile, GDPR si aplica, etc.).
4. Registra tu Aviso de Privacidad si corresponde.

## Licencia

Template de uso libre para proyectos comerciales y personales. Personalizable al 100%.