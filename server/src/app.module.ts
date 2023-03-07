import { PrismaService } from "./prisma.service";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";

@Module({
	imports: [AuthModule],
	controllers: [],
	providers: [PrismaService],
})
export class AppModule {}
