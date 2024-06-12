-- CreateTable
CREATE TABLE `agenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bupatiId` INTEGER NOT NULL,
    `namaAgenda` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(255) NOT NULL,
    `lokasiId` INTEGER NOT NULL,
    `jenisAcaraId` INTEGER NOT NULL,
    `tanggalMulai` DATETIME(3) NOT NULL,
    `tanggalSelesai` DATETIME(3) NOT NULL,

    INDEX `agenda_bupatiId_idx`(`bupatiId`),
    INDEX `agenda_lokasiId_idx`(`lokasiId`),
    INDEX `agenda_jenisAcaraId_idx`(`jenisAcaraId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `waktu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agendaId` INTEGER NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `jamMulai` DATETIME(3) NOT NULL,
    `jamSelesai` DATETIME(3) NOT NULL,

    INDEX `waktu_agendaId_idx`(`agendaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `agenda` ADD CONSTRAINT `agenda_bupatiId_fkey` FOREIGN KEY (`bupatiId`) REFERENCES `bupati`(`bupati_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agenda` ADD CONSTRAINT `agenda_lokasiId_fkey` FOREIGN KEY (`lokasiId`) REFERENCES `lokasi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agenda` ADD CONSTRAINT `agenda_jenisAcaraId_fkey` FOREIGN KEY (`jenisAcaraId`) REFERENCES `jenis_acara`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `waktu` ADD CONSTRAINT `waktu_agendaId_fkey` FOREIGN KEY (`agendaId`) REFERENCES `agenda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
