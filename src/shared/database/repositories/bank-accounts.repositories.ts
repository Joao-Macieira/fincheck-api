import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

interface FindManyResponse {
  id: string;
  userId: string;
  name: string;
  initialBalance: number;
  type: string;
  color: string;
  transactions: [
    {
      type: string;
      value: number;
    },
    {
      type: string;
      value: number;
    },
  ];
  currentBalance: number;
}

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.BankAccountFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.BankAccountFindManyArgs>,
  ) {
    return this.prismaService.bankAccount.findMany(
      findManyDto,
    ) as unknown as FindManyResponse[];
  }

  findFirst(findFirstArgs: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstArgs);
  }

  create(createArgs: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createArgs);
  }

  update(updateArgs: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateArgs);
  }

  delete(deleteArgs: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteArgs);
  }
}
