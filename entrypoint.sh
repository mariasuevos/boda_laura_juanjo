#!/bin/sh

# Sustituir SOLO la variable definida (para no tocar variables internas como $host o $uri)
envsubst '$API_SECRET_KEY' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Iniciar Nginx
exec nginx -g 'daemon off;'
