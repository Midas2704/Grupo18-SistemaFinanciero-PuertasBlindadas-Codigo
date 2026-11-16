# Puertas Blindadas

Sistema académico integrado de Finanzas, Clientes, Cotizaciones, Pagos, Seguridad M4, Auditoría M9, Presupuestos, Inventario, Producción y Terreno.

El repositorio incluye el código fuente recuperado y una base PostgreSQL 18 con datos ficticios de demostración. No contiene credenciales productivas, sesiones activas, tokens de recuperación, claves privadas ni respaldos productivos.

## Instalación completa en Windows

Requisitos:

- Windows 10/11 con virtualización habilitada.
- Git para Windows.
- Docker Desktop con WSL 2.
- PowerShell.

```powershell
git clone https://github.com/Midas2704/Grupo18-SistemaFinanciero-PuertasBlindadas-Codigo.git
cd Grupo18-SistemaFinanciero-PuertasBlindadas-Codigo
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\instalar-demo.ps1
```

La primera ejecución construye backend y frontend desde el código, restaura la base demo y valida su contenido.

- Aplicación: `http://127.0.0.1:8081/`
- Acceso: `20776101-K` (cuenta `Midas`)
- Contraseña: `Demo##Puertas2026`

La contraseña es deliberadamente pública y sólo debe utilizarse en el entorno local académico.

## Operación local

```powershell
docker compose --env-file .env -f docker-compose.local.yml -f docker-compose.source.yml stop
docker compose --env-file .env -f docker-compose.local.yml -f docker-compose.source.yml start
.\scripts\verificar-instalacion.ps1
.\scripts\respaldar-base-local.ps1
```

## Documentación

- [Base académica demo](docs/BASE_DE_DATOS_DEMO.md)
- [Importación mediante DDL y DML](docs/IMPORTACION_SQL.md)
- [Instalación local](docs/INSTALACION_LOCAL.md)
- [Restauración](docs/RESTAURACION_BASE_DATOS.md)
- [Arquitectura](docs/ARQUITECTURA.md)
- [Equivalencia VPS/local](docs/EQUIVALENCIA_VPS_LOCAL.md)

## Recuperación exacta

Las imágenes Docker exactas del VPS y el respaldo exacto cifrado se conservan fuera de Git. Su clave se mantiene separada. No deben publicarse junto con este repositorio.
