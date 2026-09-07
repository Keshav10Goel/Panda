import { Injectable } from '@nestjs/common';

import { createHash, randomBytes } from 'node:crypto';

import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SessionService {
  private readonly sessionDurationMs = 1000 * 60 * 60 * 24 * 7;

  constructor(private readonly prisma: PrismaService) {}

  async createSession(userId: string) {
    const token = randomBytes(32).toString('base64url');

    const tokenHash = this.hashToken(token);

    const expiresAt = new Date(
      Date.now() + this.sessionDurationMs,
    );

    await this.prisma.session.create({
      data: {
        userId,
        tokenHash,
        expiresAt,
      },
    });

    return {
      token,
      expiresAt,
    };
  }

  async getUserByToken(token: string) {
    const tokenHash = this.hashToken(token);

    const session = await this.prisma.session.findFirst({
      where: {
        tokenHash,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

    return session?.user ?? null;
  }

  async deleteSession(token: string) {
    const tokenHash = this.hashToken(token);

    await this.prisma.session.deleteMany({
      where: {
        tokenHash,
      },
    });
  }

  private hashToken(token: string) {
    return createHash('sha256')
      .update(token)
      .digest('hex');
  }
}