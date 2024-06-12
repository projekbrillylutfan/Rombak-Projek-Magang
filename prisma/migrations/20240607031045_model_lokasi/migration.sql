-- CreateTable
CREATE TABLE `lokasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_lokasi` VARCHAR(200) NOT NULL,
    `alamat` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
