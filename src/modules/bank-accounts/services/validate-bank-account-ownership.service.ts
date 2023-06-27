import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountRepository: BankAccountsRepository) {}

  async validate(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAccountRepository.findFirst({
      where: {
        id: bankAccountId,
        userId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank account not found');
    }
  }
}
