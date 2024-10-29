/*
  Warnings:

  - You are about to drop the `FacebookAdInsights` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FacebookAdInsightsActionValues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FacebookAdInsightsActions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GoogleAdsCustomReport` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `FacebookAdInsights` DROP FOREIGN KEY `FacebookAdInsights_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `FacebookAdInsightsActionValues` DROP FOREIGN KEY `FacebookAdInsightsActionValues_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `FacebookAdInsightsActions` DROP FOREIGN KEY `FacebookAdInsightsActions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `GoogleAdsCustomReport` DROP FOREIGN KEY `GoogleAdsCustomReport_user_id_fkey`;

-- DropTable
DROP TABLE `FacebookAdInsights`;

-- DropTable
DROP TABLE `FacebookAdInsightsActionValues`;

-- DropTable
DROP TABLE `FacebookAdInsightsActions`;

-- DropTable
DROP TABLE `GoogleAdsCustomReport`;

-- CreateTable
CREATE TABLE `facebook_ad_insights` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_id` VARCHAR(255) NULL,
    `metric_date` DATETIME(0) NULL,
    `account_name` VARCHAR(255) NULL,
    `adset_id` VARCHAR(255) NULL,
    `campaign_id` VARCHAR(255) NULL,
    `frequency` FLOAT NULL,
    `estimated_ad_recallers` FLOAT NULL,
    `estimated_ad_recall_rate` FLOAT NULL,
    `cost_per_estimated_ad_recallers` FLOAT NULL,
    `inline_link_clicks` FLOAT NULL,
    `unique_inline_link_clicks` FLOAT NULL,
    `impressions` FLOAT NULL,
    `campaign_name` VARCHAR(255) NULL,
    `unique_clicks` FLOAT NULL,
    `adset_name` VARCHAR(255) NULL,
    `objective` VARCHAR(255) NULL,
    `clicks` FLOAT NULL,
    `ad_id` VARCHAR(255) NULL,
    `reach` FLOAT NULL,
    `ad_name` VARCHAR(255) NULL,
    `account_currency` VARCHAR(255) NULL,
    `inline_post_engagement` FLOAT NULL,
    `spend` FLOAT NULL,
    `region` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facebook_ad_insights_actions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `metric_date` DATETIME(0) NULL,
    `account_id` VARCHAR(255) NULL,
    `account_name` VARCHAR(255) NULL,
    `adset_id` VARCHAR(255) NULL,
    `campaign_id` VARCHAR(255) NULL,
    `campaign_name` VARCHAR(255) NULL,
    `adset_name` VARCHAR(255) NULL,
    `ad_id` VARCHAR(255) NULL,
    `ad_name` VARCHAR(255) NULL,
    `actions_value` FLOAT NULL,
    `actions_1d_view` FLOAT NULL,
    `actions_7d_view` FLOAT NULL,
    `actions_28d_view` FLOAT NULL,
    `actions_1d_click` FLOAT NULL,
    `actions_7d_click` FLOAT NULL,
    `actions_28d_click` FLOAT NULL,
    `actions_action_type` VARCHAR(255) NULL,
    `region` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `googleads_custom_report` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kdd_account_id` VARCHAR(255) NULL,
    `adgroupad_ad_name` VARCHAR(255) NULL,
    `adgroup_id` FLOAT NULL,
    `adgroup_name` VARCHAR(255) NULL,
    `segments_date` DATETIME(0) NULL,
    `campaign_id` FLOAT NULL,
    `campaign_name` VARCHAR(255) NULL,
    `adgroupad_ad_id` FLOAT NULL,
    `metrics_cost` FLOAT NULL,
    `metrics_clicks` FLOAT NULL,
    `metrics_impressions` FLOAT NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `facebook_ad_insights` ADD CONSTRAINT `facebook_ad_insights_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `facebook_ad_insights_actions` ADD CONSTRAINT `facebook_ad_insights_actions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `googleads_custom_report` ADD CONSTRAINT `googleads_custom_report_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
