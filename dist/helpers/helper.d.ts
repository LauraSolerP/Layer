import { EntitySchema, Repository } from "typeorm";
import { Entity } from "../entities/entity";
export declare abstract class Helper<T extends Entity> {
    protected getDatabaseConnection(): Promise<import("typeorm").DataSource>;
    abstract getEntitySchema(): EntitySchema;
    getRepository(): Promise<Repository<T>>;
}
//# sourceMappingURL=helper.d.ts.map