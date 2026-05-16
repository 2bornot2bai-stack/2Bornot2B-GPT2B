# 2B OR NOT 2B AI Systems · Web premium estática

Versión premium de la web corporativa de **2B OR NOT 2B AI Systems**, preparada para publicar en GitHub Pages y migrar más adelante a WordPress si el proyecto arranca bien.

## Objetivo

Crear una presencia digital de captación para comunicar servicios de:

- web corporativa premium,
- landing pages,
- marketing digital,
- IA aplicada,
- automatización,
- social media,
- captación de leads,
- analítica,
- hubs o sistemas digitales para negocios.

La web no promete resultados garantizados. Está planteada como una base profesional, escalable y medible para mejorar claridad comercial, captación y procesos.

## Estructura del proyecto

```txt
2b-ai-systems-premium/
├── index.html
├── README.md
├── CNAME
├── .nojekyll
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── logo-2b.png
        ├── miguel-angel.jpg
        ├── favicon.png
        └── apple-touch-icon.png
```

## Stack técnico

- HTML semántico.
- CSS responsive sin framework.
- JavaScript vanilla.
- Animaciones suaves con `IntersectionObserver`.
- Fondo tecnológico con canvas ligero.
- Formulario Formspree en HTML básico.
- Botón flotante de WhatsApp.
- Preparado para GitHub Pages.
- Preparado para dominio personalizado.

## Imágenes incluidas

- `assets/img/logo-2b.png`: logotipo oficial.
- `assets/img/miguel-angel.jpg`: fotografía profesional del fundador.
- `assets/img/favicon.png`: favicon generado desde el logo.
- `assets/img/apple-touch-icon.png`: icono para dispositivos Apple.

No deformar, recolorear ni recortar el logotipo. Mantener margen visual alrededor del emblema.

## Formulario

El formulario usa Formspree:

```html
<form action="https://formspree.io/f/mrejvrjv" method="POST">
```

Campos ocultos incluidos:

```html
_subject = Nueva solicitud desde la web de 2B OR NOT 2B AI Systems
origen = Web GitHub Pages · 2B OR NOT 2B AI Systems
```

Antes de hacer campañas o tratar datos de forma intensiva, revisar textos legales, privacidad y cookies con un profesional.

## WhatsApp

Enlace configurado:

```txt
https://wa.me/34648606079
```

Teléfono visible:

```txt
648 606 079
```

## Publicación en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir todos los archivos de este proyecto a la raíz del repositorio.
3. Ir a **Settings → Pages**.
4. En **Build and deployment**, seleccionar:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guardar.
6. Esperar a que GitHub genere la URL pública.

## Dominio personalizado

El archivo `CNAME` ya incluye:

```txt
www.2bornot2bai.com
```

En GitHub Pages:

```txt
Settings → Pages → Custom domain:
www.2bornot2bai.com
```

## DNS en Webempresa

El dominio raíz debe apuntar a GitHub Pages con estos registros A:

```txt
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

El subdominio `www` debe apuntar con CNAME a:

```txt
2bornot2bai-stack.github.io
```

No tocar registros de correo:

- MX,
- TXT,
- DKIM,
- DMARC,
- SPF,
- registros relacionados con email.

## HTTPS

Cuando GitHub lo permita, activar:

```txt
Enforce HTTPS
```

Puede tardar unos minutos u horas tras configurar DNS y dominio.

## Migración futura a WordPress

Esta versión puede servir como base visual y estratégica para una migración posterior a WordPress:

- estructura de secciones,
- copy comercial,
- paleta visual,
- jerarquía responsive,
- CTA,
- formulario,
- servicios,
- método,
- fundador,
- FAQs.

En WordPress convendría convertirla en:

- tema a medida,
- plantilla con editor visual,
- bloques reutilizables,
- CPTs para servicios o casos,
- conexión con CRM/automatizaciones,
- analítica avanzada.

## Checklist final antes de publicar

### Identidad visual

- [ ] Logo visible y sin deformar.
- [ ] Logo con aire alrededor.
- [ ] Paleta navy, oro y azul eléctrico respetada.
- [ ] Tipografía Lato en titulares y navegación.
- [ ] Cuerpo en Helvetica/Arial.
- [ ] Hero premium, claro y no saturado.

### Responsive

- [ ] Menú móvil funciona.
- [ ] Hero se lee bien en móvil.
- [ ] Cards no se solapan.
- [ ] Foto del fundador no se deforma.
- [ ] Formulario es cómodo en móvil.

### Conversión

- [ ] CTA principal visible.
- [ ] Diagnóstico inicial aparece como puerta de entrada.
- [ ] WhatsApp flotante funciona.
- [ ] Email visible.
- [ ] Mensaje sin promesas exageradas.

### Formulario

- [ ] Endpoint Formspree correcto.
- [ ] Campo email obligatorio.
- [ ] Checkbox obligatorio.
- [ ] Prueba de envío realizada.
- [ ] Email de recepción confirmado en Formspree.

### Dominio

- [ ] `CNAME` subido al repositorio.
- [ ] Custom domain configurado en GitHub Pages.
- [ ] Registros A configurados en Webempresa.
- [ ] CNAME `www` configurado.
- [ ] No se han tocado MX/TXT/DKIM/DMARC/SPF.

### HTTPS

- [ ] Certificado emitido por GitHub.
- [ ] `Enforce HTTPS` activado.
- [ ] Web abre correctamente en `https://www.2bornot2bai.com`.

## Nota de alcance

Esta web es estática. No incluye backend, base de datos, login, CMS ni WordPress. El formulario depende de Formspree y los costes o límites de terceros corren por cuenta del titular del proyecto.
