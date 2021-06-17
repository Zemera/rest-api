import { Module } from '@nestjs/common';
import {EnumReflection} from './services/EnumReflection';

@Module({
    providers: [EnumReflection],
    exports: [EnumReflection]
})

export class ToolsModule {}