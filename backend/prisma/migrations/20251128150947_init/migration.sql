-- CreateTable
CREATE TABLE `admin_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `first_name` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `role` VARCHAR(50) NULL DEFAULT 'admin',
    `receive_emails` BOOLEAN NULL DEFAULT false,
    `last_login` DATETIME(0) NULL,
    `last_activity` DATETIME(0) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `username`(`username`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitorId` VARCHAR(255) NULL,
    `page` VARCHAR(255) NULL,
    `timestamp` DATETIME(0) NULL,
    `event` VARCHAR(50) NULL,
    `deviceType` VARCHAR(50) NULL,
    `country` VARCHAR(50) NULL,
    `browser` VARCHAR(100) NULL,
    `visitCount` INTEGER NOT NULL DEFAULT 1,
    `userType` VARCHAR(10) NOT NULL,

    INDEX `idx_visitorId`(`visitorId`),
    INDEX `idx_timestamp`(`timestamp`),
    INDEX `idx_userType`(`userType`),
    INDEX `idx_country`(`country`),
    INDEX `idx_page`(`page`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `live_url` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inquiries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitor_id` VARCHAR(255) NOT NULL,
    `activity_id` INTEGER NULL,
    `inquiry_type` VARCHAR(50) NULL,
    `timestamp` DATETIME(0) NOT NULL,

    INDEX `activity_id`(`activity_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `performance_metrics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitorId` VARCHAR(255) NOT NULL,
    `page` VARCHAR(255) NULL,
    `fcp` FLOAT NULL,
    `lcp` FLOAT NULL,
    `tti` FLOAT NULL,
    `loadTime` FLOAT NULL,
    `timestamp` DATETIME(0) NOT NULL,
    `deviceType` VARCHAR(50) NULL,
    `country` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `error_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitorId` VARCHAR(255) NULL,
    `page` VARCHAR(255) NULL,
    `errorCode` VARCHAR(50) NULL,
    `errorMessage` TEXT NULL,
    `source` VARCHAR(50) NULL,
    `count` INTEGER NULL DEFAULT 1,
    `firstOccurrence` DATETIME(0) NULL,
    `lastOccurrence` DATETIME(0) NULL,
    `timestamp` DATETIME(0) NOT NULL,
    `deviceType` VARCHAR(50) NULL,
    `browser` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact_us` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `message` TEXT NOT NULL,
    `status` ENUM('new', 'in_progress', 'resolved') NULL DEFAULT 'new',
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_contact_status`(`status`),
    INDEX `idx_contact_created`(`created_at`),
    INDEX `idx_contact_email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_inquiries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `industry_name` VARCHAR(100) NOT NULL,
    `service_name` VARCHAR(100) NOT NULL,
    `status` ENUM('new', 'in_progress', 'resolved') NULL DEFAULT 'new',
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaigns` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `image_url` VARCHAR(500) NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaign_questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `campaign_id` INTEGER NOT NULL,
    `question_order` INTEGER NOT NULL,
    `label` VARCHAR(255) NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `options` JSON NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaign_submissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `campaign_id` INTEGER NOT NULL,
    `visitor_id` VARCHAR(255) NULL,
    `answers` JSON NOT NULL,
    `status` ENUM('submitted', 'reviewed', 'approved', 'rejected') NULL DEFAULT 'submitted',
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_campaign_id`(`campaign_id`),
    INDEX `idx_status`(`status`),
    INDEX `idx_visitor_id`(`visitor_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `short_description` TEXT NOT NULL,
    `image_url` VARCHAR(500) NULL,
    `hero_image_url` VARCHAR(500) NULL,
    `pricing_plans` JSON NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `services_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_features` (
    `id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `feature` TEXT NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_technologies` (
    `id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `technology` VARCHAR(191) NOT NULL,
    `icon_url` VARCHAR(500) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_benefits` (
    `id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `benefit` TEXT NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_keywords` (
    `id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `keyword` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_pricing` (
    `id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `starting` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,

    UNIQUE INDEX `service_pricing_service_id_key`(`service_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inquiries` ADD CONSTRAINT `inquiries_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `user_activity`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `service_features` ADD CONSTRAINT `service_features_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service_technologies` ADD CONSTRAINT `service_technologies_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service_benefits` ADD CONSTRAINT `service_benefits_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service_keywords` ADD CONSTRAINT `service_keywords_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service_pricing` ADD CONSTRAINT `service_pricing_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
