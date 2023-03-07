import { PrismaService } from "./prisma.service";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
	imports: [ConfigModule.forRoot(), AuthModule],
	controllers: [],
	providers: [PrismaService],
})
export class AppModule {}
