import { Module } from "@nestjs/common";
import { SubjectModule } from "./subject/subject.module";

@Module({
	imports: [
		SubjectModule,
	]
})
export class AppModule { }
