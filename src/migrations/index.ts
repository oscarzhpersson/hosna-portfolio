import * as migration_20250205_111133 from './20250205_111133';

export const migrations = [
  {
    up: migration_20250205_111133.up,
    down: migration_20250205_111133.down,
    name: '20250205_111133'
  },
];
