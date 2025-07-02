-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL,
    "criada_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizada_em" DATETIME NOT NULL
);
