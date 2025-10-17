# Despliegue Nginx para mudanzasbilbo.com

## Pasos (Ubuntu/Debian con Nginx y Certbot)

1. Copiar el archivo de config al servidor:

```bash
scp -r deploy/nginx/mudanzasbilbo.conf ubuntu@SERVIDOR:/tmp/
```

2. Mover a sites-available y enlazar a sites-enabled:

```bash
sudo mv /tmp/mudanzasbilbo.conf /etc/nginx/sites-available/mudanzasbilbo.conf
sudo ln -s /etc/nginx/sites-available/mudanzasbilbo.conf /etc/nginx/sites-enabled/mudanzasbilbo.conf
```

3. (Opcional) Obtener certificados con Let’s Encrypt si aún no existen:

```bash
sudo apt-get update && sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d mudanzasbilbo.com -d www.mudanzasbilbo.com
```

4. Validar config y recargar Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

5. Asegúrate de que tu app Next.js está escuchando en 127.0.0.1:3000 (PM2, systemd, Docker, etc.)

## Notas
- Las rutas de los certificados en el `conf` asumen Let’s Encrypt por defecto. Ajusta si cambian.
- `robots.txt` y `sitemap.xml` se sirven desde la carpeta `public/` de la app.
- Las redirecciones http→https y sin www→www se hacen en Nginx; no se necesita middleware en la app.
