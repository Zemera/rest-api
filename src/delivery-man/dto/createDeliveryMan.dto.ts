import { ApiProperty } from "@nestjs/swagger";
import { TransportType } from "../../business/enum/deliveryMan/TransportType";
import { City } from "../../business/orm/interfaces/city.interface";
import { DeliveryArea } from "../../business/orm/interfaces/deliveryMan/deliveryArea.interface";
import { WorkingHours } from "../../business/orm/interfaces/workingHours.interface";

export class CreateDeliveryManDto {
    @ApiProperty({
        type: String,
      })
    fullName: string;

    @ApiProperty({
        type: String,
      })
    phone: string;
    @ApiProperty({
        type: String,
      })
    email: string;
    @ApiProperty({
        type: String,
      })
    city: City;
    @ApiProperty({
        type: String,
      })
    deliveryAreas: Array<DeliveryArea>;
    @ApiProperty({
        type: String,
      })
    workingTimes: Array<WorkingHours>;
    @ApiProperty({
        type: Number,
      })
    age: number;
    @ApiProperty({ enum: ['0', '1', '2' , '3']})
    transportType: TransportType;
}