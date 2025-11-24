/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Migrations1763920325712 {
    name = 'Migrations1763920325712'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user_order" ("id" character varying NOT NULL, "userId" character varying NOT NULL, "orderId" character varying NOT NULL, "dishId" character varying NOT NULL, CONSTRAINT "PK_7fc0e9648e97e4bebb340dc9f85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "truck" ("id" character varying NOT NULL, "ownerId" character varying NOT NULL, "nom" character varying NOT NULL, CONSTRAINT "PK_e4a8b9e596dde8251fe35bcb5f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" character varying NOT NULL, "clientId" character varying NOT NULL, "orderId" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" character varying NOT NULL, "clientId" character varying NOT NULL, "truckId" character varying NOT NULL, "specialRequests" character varying NOT NULL, "totalValue" integer NOT NULL, "totalCurrency" character varying NOT NULL, "state" character varying NOT NULL, "deliveryTime" TIMESTAMP NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "menu" ("id" character varying NOT NULL, "truckId" character varying NOT NULL, "description" character varying NOT NULL, "season" character varying NOT NULL, "priceValue" integer NOT NULL, "priceCurrency" character varying NOT NULL, CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inscription" ("id" character varying NOT NULL, "truckId" character varying NOT NULL, "eventId" character varying NOT NULL, "participation" boolean NOT NULL, CONSTRAINT "PK_e3ec336b4b1fd26e2370893d24b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "location" character varying NOT NULL, "fromDate" TIMESTAMP NOT NULL, "toDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dish_menu" ("id" character varying NOT NULL, "menuId" character varying NOT NULL, "dishId" character varying NOT NULL, CONSTRAINT "PK_67627299851ecd28a827bcaceb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dish" ("id" character varying NOT NULL, "truckId" character varying NOT NULL, "description" character varying NOT NULL, "availability" character varying NOT NULL, "priceValue" integer NOT NULL, "priceCurrency" character varying NOT NULL, CONSTRAINT "PK_59ac7b35af39b231276bfc4c00c" PRIMARY KEY ("id"))`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "dish"`);
        await queryRunner.query(`DROP TABLE "dish_menu"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "inscription"`);
        await queryRunner.query(`DROP TABLE "menu"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "truck"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_order"`);
    }
}
