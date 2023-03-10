import { Cat } from '../cats.schema';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '63f722fd091fe3f5b9dd2ca2',
    description: 'id',
  })
  id: string;
}
