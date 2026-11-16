# Puertas Blindadas

Sistema integrado de Finanzas, Clientes, Cotizaciones, Pagos, Seguridad M4, Auditoría M9, Presupuestos, Inventario, Producción y Terreno.

Este repositorio conserva el código fuente recuperado del VPS el 16 de noviembre de 2026. Los respaldos de base de datos, imágenes Docker productivas, claves y datos reales se distribuyen por separado y nunca deben incorporarse a Git.

## Inicio rápido en Windows

Requisitos: Git para Windows, Docker Desktop, WSL 2 y PowerShell.

```powershell
git clone https://github.com/Midas2704/Grupo18-SistemaFinanciero-PuertasBlindadas-Codigo.git
cd Grupo18-SistemaFinanciero-PuertasBlindadas-Codigo
.\scripts\instalar-local.ps1 -Modo runtime -DirectorioImagenes 'D:\Respaldo\imagenes'
.\scripts\restaurar-base-local.ps1 -RespaldoCifrado 'D:\Respaldo\base-datos\pblindadas-database-backup.tar.gz.enc' -ArchivoClave 'E:\Claves\database-package.key' -ConfirmarSobrescritura
.\scripts\verificar-instalacion.ps1
```

Aplicación local: `http://127.0.0.1:8081/`.

Consulte [Instalación local](docs/INSTALACION_LOCAL.md), [restauración](docs/RESTAURACION_BASE_DATOS.md), [arquitectura](docs/ARQUITECTURA.md) y [equivalencia](docs/EQUIVALENCIA_VPS_LOCAL.md).

## Operación

```powershell
docker compose --env-file .env -f docker-compose.local.yml stop
docker compose --env-file .env -f docker-compose.local.yml start
.\scripts\respaldar-base-local.ps1
```

No ejecute semillas ni migraciones sobre la fotografía restaurada salvo que exista una autorización y un respaldo adicional.
