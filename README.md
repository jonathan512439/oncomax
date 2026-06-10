# OncoMax - Maqueta web educativa

Primera version funcional del sistema web escolar para **OncoMax - Centro Medico Integral Oncologico**.

## Tecnologias

- HTML5
- CSS3
- JavaScript basico

No usa frameworks, dependencias externas, backend, autenticacion ni base de datos.

## Estructura

```text
/
|-- index.html
|-- servicios.html
|-- asistencia.html
|-- nosotros.html
|-- oncologia.html
|-- lazos.html
|-- reserva.html
|-- css/
|   `-- styles.css
|-- js/
|   `-- app.js
`-- assets/
    |-- icons/
    |   |-- facebook.svg
    |   |-- instagram.svg
    |   |-- tiktok.svg
    |   `-- whatsapp.svg
    `-- img/
        `-- logo-oncomax.png
```

## Como abrir

Abre `index.html` directamente en el navegador.

El proyecto funciona como un router HTML simple: el menu principal esta en `index.html` y cada opcion abre su propio archivo.

## Funcionalidades incluidas

- Menu principal responsive.
- Video institucional placeholder centrado en el menu principal.
- Navegacion multipagina con enlaces HTML.
- Paginas: Inicio, Servicios, Asistencia Medica, Acerca de Nosotros, Oncologia, Lazos y Reserva de cita.
- Logos SVG locales para TikTok, Instagram, WhatsApp y Facebook.
- Botones y videos placeholder con alertas demostrativas.
- Formulario de reserva sin envio real ni almacenamiento.
- Diseno responsive preparado para celular, tablet y escritorio.

## Pendiente para la siguiente etapa

- Ajuste final de imagenes reales.
- Insercion de videos de YouTube.
- Integracion con WhatsApp.
- Conexion con Supabase.
- Almacenamiento de imagenes en Supabase Storage.
- Publicacion en Cloudflare Pages.
