-- CreateTable
CREATE TABLE `FacebookAdInsightsActions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `metric_date` DATETIME(3) NOT NULL,
    `account_id` VARCHAR(191) NOT NULL,
    `account_name` VARCHAR(191) NOT NULL,
    `adset_id` VARCHAR(191) NOT NULL,
    `campaign_id` VARCHAR(191) NOT NULL,
    `campaign_name` VARCHAR(191) NOT NULL,
    `action_value` DOUBLE NULL,
    `action_type` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacebookAdInsights` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `metric_date` DATETIME(3) NOT NULL,
    `account_id` VARCHAR(191) NOT NULL,
    `account_name` VARCHAR(191) NOT NULL,
    `adset_id` VARCHAR(191) NOT NULL,
    `campaign_id` VARCHAR(191) NOT NULL,
    `campaign_name` VARCHAR(191) NOT NULL,
    `estimated_ad_recallers` INTEGER NULL,
    `estimated_ad_recall_rate` DOUBLE NULL,
    `cost_per_estimated_ad_recallers` DOUBLE NULL,
    `inline_link_clicks` INTEGER NULL,
    `cost_per_inline_link_click` DOUBLE NULL,
    `impressions` INTEGER NOT NULL,
    `unique_inline_link_clicks` INTEGER NULL,
    `frequency` DOUBLE NULL,
    `clicks` INTEGER NULL,
    `cpc` DOUBLE NULL,
    `ctr` DOUBLE NULL,
    `reach` INTEGER NOT NULL,
    `spend` DOUBLE NOT NULL,
    `account_currency` VARCHAR(191) NULL,
    `inline_post_engagement` INTEGER NULL,
    `region` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacebookAdInsightsActionValues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `metric_date` DATETIME(3) NOT NULL,
    `account_id` VARCHAR(191) NOT NULL,
    `account_name` VARCHAR(191) NOT NULL,
    `adset_id` VARCHAR(191) NOT NULL,
    `campaign_id` VARCHAR(191) NOT NULL,
    `campaign_name` VARCHAR(191) NOT NULL,
    `action_values_value` DOUBLE NULL,
    `action_values_7d_view` DOUBLE NULL,
    `action_values_7d_click` DOUBLE NULL,
    `action_values_28d_view` DOUBLE NULL,
    `action_values_28d_click` DOUBLE NULL,
    `action_values_action_type` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FacebookAdInsightsActions` ADD CONSTRAINT `FacebookAdInsightsActions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacebookAdInsights` ADD CONSTRAINT `FacebookAdInsights_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacebookAdInsightsActionValues` ADD CONSTRAINT `FacebookAdInsightsActionValues_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
