-- CreateTable
CREATE TABLE `Tweet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `texto` VARCHAR(191) NOT NULL,
    `emoji` VARCHAR(191),
    `data_postagem` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `curtidas` INTEGER NOT NULL,
    `autorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tweet` ADD CONSTRAINT `Tweet_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
