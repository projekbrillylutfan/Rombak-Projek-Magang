import { ZodType } from "zod";

class Validation {
    static validate<T>(schema: ZodType<T>, data: T): T {
        return schema.parse(data)
    }
}

export default Validation