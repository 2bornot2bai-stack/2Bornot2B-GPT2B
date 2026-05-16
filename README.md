# 2B OR NOT 2B AI Systems · Web estática

Web corporativa one-page para **2B OR NOT 2B AI Systems**, preparada para publicarse en GitHub Pages y migrar más adelante a WordPress si el proyecto arranca bien.

## Estructura

```text
2b-ai-systems-web/
├── index.html
├── README.md
├── CNAME
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── logo-2b.png
        └── miguel-angel.jpg
```

## Publicar en GitHub Pages

1. Crea un repositorio llamado `2b-ai-systems-web`.
2. Sube todos los archivos de esta carpeta al repositorio.
3. Ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guarda los cambios.
6. Espera unos minutos hasta que GitHub publique la web.

## Dominio personalizado

La web se servirá desde:

```text
www.2bornot2bai.com
```

En GitHub Pages:

```text
Settings → Pages → Custom domain:
www.2bornot2bai.com
```

El archivo `CNAME` ya incluye:

```text
www.2bornot2bai.com
```

## DNS en Webempresa

El dominio raíz debe apuntar a GitHub Pages con estos registros A:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

El subdominio `www` debe apuntar con CNAME a:

```text
2bornot2bai-stack.github.io
```

No tocar registros de correo:

- MX
- TXT
- SPF
- DKIM
- DMARC

## HTTPS

Cuando GitHub lo permita, activar:

```text
Enforce HTTPS
```

Puede tardar unos minutos u horas tras configurar el dominio.

## Formulario

El formulario usa Formspree con Basic HTML:

```html
<form action="https://formspree.io/f/mrejvrjv" method="POST">
```

Campos ocultos incluidos:

- `_subject`: Nueva solicitud desde la web de 2B OR NOT 2B AI Systems
- `origen`: Web GitHub Pages · 2B OR NOT 2B AI Systems

## WhatsApp

Botón flotante y enlaces configurados a:

```text
https://wa.me/34648606079
```

Número visible:

```text
648 606 079
```

## Imágenes

Se incluyen imágenes placeholder:

- `assets/img/logo-2b.png`
- `assets/img/miguel-angel.jpg`

Antes de publicar la versión final, sustituirlas por el logo circular oficial y la foto profesional definitiva. Mantener los mismos nombres para no tocar el HTML.

## Checklist final de revisión

- [x] Logo circular correcto, sin deformar, sin recortar y sin elementos encima.
- [x] Foto profesional definitiva de Miguel Ángel cargada.
- [ ] Hero revisado: titular equilibrado, logo con aire y badges sin taparlo.
- [ ] Responsive probado en móvil, tablet y escritorio.
- [ ] Menú móvil funciona.
- [ ] Botón flotante de WhatsApp abre correctamente.
- [ ] Formulario envía a Formspree.
- [ ] Checkbox de consentimiento obligatorio.
- [ ] Email de contacto correcto: `2bornot2bai@gmail.com`.
- [ ] Dominio personalizado configurado en GitHub Pages.
- [ ] DNS de Webempresa revisados.
- [ ] No se han tocado registros MX, TXT, DKIM, DMARC ni correo.
- [ ] HTTPS activado cuando GitHub lo permita.
- [ ] Textos legales definitivos revisados antes de captación activa.
