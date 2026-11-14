# Seed mínima operativa

## Diagnóstico de origen

La auditoría de sólo lectura `estado-bd-pblindadas-codex-20261115_000204.json` acredita 82 migraciones, 474 cotizaciones y 36 meses históricos. Los catálogos comerciales estaban vacíos aunque existían 13 `item_comercial` activos. La seed reutiliza esos ítems y no crea otra historia.

| Módulo | Catálogo | Estado auditado | Acción |
|---|---|---:|---|
| M2 | Familias, extensiones y versiones comerciales | 0 | Crear cuatro productos demostrativos vinculados a ítems existentes |
| M2 | Precios comerciales B2B/B2C | 0 | Crear precios CLP referenciales, identificados `DEMO-CAT-` |
| M2 | Opcionales, compatibilidades y precios | 0 | Crear tres opcionales mínimos |
| M2 | Servicios y precios | 0 | Crear despacho y transporte demostrativos |
| M2 | Condiciones | 0 | Crear versiones demostrativas explícitas |
| M2 | Instalación | 0 | Crear sólo cobertura `REQUIERE_EVALUACION`, sin precio ficticio |
| M3 | Categorías de pago | 1 | Completar Anticipo, Abono parcial y Pago final |
| M3 | Cuotas de tarjeta | 0 | Crear 1, 3, 6 y 12 cuotas |
| M5 | Proveedores | 15 | Conservar |
| M6 | Honorarios | 10 prestadores / 125 boletas | Conservar |
| M6 | Remuneraciones | 7 esquemas / 27 parámetros / 8 tramos | Conservar; no inventar normativa |
| Inventario | Materiales y bodega | 30 / 1 | Conservar, sin crear movimientos ni stock |
| Inventario | Unidades y categorías | 0 | Crear catálogos mínimos, sin reasignar materiales históricos |

## Modos

- `npm run db:seed:minima:audit`: sólo lectura; muestra existencias, faltantes y pendientes.
- `npm run db:seed:minima:dry-run`: sólo lectura; muestra exactamente qué se incorporaría.
- `npm run db:seed:minima:apply`: requiere autorización, manifiesto DEMO36, respaldo existente, una sola cuenta raíz y migraciones sanas.
- `npm run db:seed:minima:verify`: consulta los mismos servicios usados por el frontend y comprueba B2B/B2C, precios, opcionales, servicios, categorías y cuotas.

La aplicación usa una transacción serializable y un candado PostgreSQL. Comprueba antes y después que no cambien cotizaciones, notas de venta, pagos, usuarios ni permisos. La segunda ejecución debe informar `creados: 0`.

## Pendientes empresariales

- Sustituir los precios `DEMO-CAT-` por precios aprobados mediante el mantenedor y su versionado normal.
- Definir cobertura y precios reales de instalación; la seed no presume cobertura nacional.
- Confirmar condiciones, garantías, plazos y anticipos oficiales.
- Mantener parámetros legales M6 exclusivamente desde fuentes oficiales vigentes.
- Los materiales históricos quedan sin reasignación automática de unidad o categoría para evitar alterar datos existentes.

## Recuperación

La seed no actualiza ni elimina datos históricos. Ante un error, la transacción se revierte. No se debe borrar la base activa. Se conserva el respaldo PostgreSQL creado y verificado antes de aplicar; cualquier restauración debe realizarse en una base nueva y validarse antes de sustituir el servicio activo.
