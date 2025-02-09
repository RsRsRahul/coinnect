/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable @typescript-eslint/no-unsafe-assignment
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  login: publicProcedure
    .input(z.object({ name: z.string().min(1), password: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.login.findFirst({
        where: {
          uName: input.name,
          password: input.password,
        },
      });
    }),

  getBusinessData: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.transactionDetail.findMany();
  }),
  similarBusinessesUsingCrypto: publicProcedure
    .input(z.number())
    .query(async ({ input }) => {
      const avgRevenue = await db
        .select({ avgRevenue: sql`AVG(AvgRevenue)` })
        .from(business);
      const count = await db
        .select({ count: sql`COUNT(*)` })
        .from(business)
        .where(
          sql`bType = 'Crypto-Friendly' AND ABS(AvgRevenue - ${input}) < 0.2 * ${input}`,
        );
      const total = await db.select({ count: sql`COUNT(*)` }).from(business);
      const percentage = (count[0].count / total[0].count) * 100;
      return { percentage };
    }),

  userDemographicsReadyForCrypto: publicProcedure.query(async () => {
    const count = await db
      .select({ count: sql`COUNT(*)` })
      .from(transactionDetail)
      .where(
        sql`productType IN ('Gaming', 'Electronics', 'Luxury Goods', 'Subscription Services')`,
      );
    const total = await db
      .select({ count: sql`COUNT(*)` })
      .from(transactionDetail);
    const percentage = (count[0].count / total[0].count) * 100;
    return { percentage };
  }),

  internationalTransactions: publicProcedure.query(async () => {
    const count = await db
      .select({ count: sql`COUNT(*)` })
      .from(transactionDetail)
      .where(sql`transtype = 'International'`);
    const total = await db
      .select({ count: sql`COUNT(*)` })
      .from(transactionDetail);
    const percentage = (count[0].count / total[0].count) * 100;
    return { percentage };
  }),

  increasedProfitForCryptoBusinesses: publicProcedure.query(async () => {
    const profitIncrease = 82; // Placeholder, replace with actual logic if needed
    return { percentage: profitIncrease };
  }),

  stateWiseCryptoAdoption: publicProcedure.query(async () => {
    const data = await db
      .select({ state: sql`geograhicLocation`, count: sql`COUNT(*)` })
      .from(transactionDetail)
      .groupBy(sql`geograhicLocation`);
    return { data };
  }),

  possibleIncreaseInCustomerBase: publicProcedure.query(async () => {
    const data = await db
      .select({ month: sql`TO_CHAR(createdAt, 'Mon')`, count: sql`COUNT(*)` })
      .from(transactionDetail)
      .groupBy(sql`TO_CHAR(createdAt, 'Mon')`);
    return { data };
  }),

  // getLatest: publicProcedure.query(async ({ ctx }) => {
  //   const post = await ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //   });

  //   return post ?? null;
  // }),
});
