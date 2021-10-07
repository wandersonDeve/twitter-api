-- DropForeignKey
ALTER TABLE `tweet` DROP FOREIGN KEY `Tweet_autorId_fkey`;

-- AlterTable
ALTER TABLE `tweet` MODIFY `autorId` VARCHAR(191);

-- AddForeignKey
ALTER TABLE `Tweet` ADD CONSTRAINT `Tweet_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `User`(`username`) ON DELETE SET NULL ON UPDATE CASCADE;
