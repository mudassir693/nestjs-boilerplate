import { applyDecorators, SetMetadata } from "@nestjs/common/decorators";

export default () => {
    return applyDecorators(
        SetMetadata('authorized', true)
    )
}