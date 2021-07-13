import { PartialType } from "@nestjs/swagger";
import { Photo } from "../entity/photo.entity";

export class ResponsePhotoDto extends PartialType(Photo) {

}