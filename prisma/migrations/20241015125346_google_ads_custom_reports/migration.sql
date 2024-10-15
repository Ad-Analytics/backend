-- CreateTable
CREATE TABLE `GoogleAdsCustomReport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kdd_account_id` VARCHAR(191) NULL,
    `adgroupad_ad_name` VARCHAR(191) NULL,
    `adgroup_id` DOUBLE NULL,
    `adgroup_name` VARCHAR(191) NULL,
    `segments_date` DATETIME(3) NULL,
    `campaign_id` DOUBLE NULL,
    `campaign_name` VARCHAR(191) NULL,
    `adgroupad_ad_id` DOUBLE NULL,
    `metrics_cost` DOUBLE NULL,
    `metrics_clicks` DOUBLE NULL,
    `metrics_impressions` DOUBLE NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GoogleAdsCustomReport` ADD CONSTRAINT `GoogleAdsCustomReport_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
