import { ApiProperty } from '@nestjs/swagger';

export class CreateMediaDto {

    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    url: string;
    @ApiProperty()
    type: string;
    @ApiProperty()
    status: string;
  
}
