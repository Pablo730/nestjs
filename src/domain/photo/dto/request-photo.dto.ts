import { PartialType } from "@nestjs/swagger";
import { Photo } from "../entity/photo.entity";

export class RequestPhotoDto extends PartialType(Photo) {

}