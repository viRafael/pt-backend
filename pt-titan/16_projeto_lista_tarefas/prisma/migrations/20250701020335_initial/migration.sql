-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL,
    "criada_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualziada_em" DATETIME NOT NULL
);
