import { prisma } from '../db';
import { ejecutarSeedMinima, type ModoSeedMinima } from './seedMinimaOperativa';

const modo = String(process.argv[2] || 'audit') as ModoSeedMinima;

ejecutarSeedMinima(prisma, modo)
  .then(resultado => console.log(JSON.stringify(
    resultado,
    (_clave, valor) => typeof valor === 'bigint' ? valor.toString() : valor,
    2,
  )))
  .catch(error => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
