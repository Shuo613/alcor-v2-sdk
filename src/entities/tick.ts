import JSBI from "jsbi";
import invariant from "tiny-invariant";
import { BigintIsh } from "../internalConstants";
import { TickMath } from "../utils";

export interface TickConstructorArgs {
  id: number;
  liquidityGross: BigintIsh;
  liquidityNet: BigintIsh;
  feeGrowthOutsideAX64: BigintIsh;
  feeGrowthOutsideBX64: BigintIsh;
  tickCumulativeOutside: BigintIsh;
  secondsPerLiquidityOutsideX64: BigintIsh;
  secondsOutside: BigintIsh;
}

export class Tick {
  public readonly id: number;
  public readonly liquidityGross: JSBI;
  public readonly liquidityNet: JSBI;
  public readonly feeGrowthOutsideAX64: JSBI;
  public readonly feeGrowthOutsideBX64: JSBI;
  public readonly tickCumulativeOutside: JSBI;
  public readonly secondsOutside: JSBI;
  public readonly secondsPerLiquidityOutsideX64: JSBI;

  constructor({
    id,
    liquidityGross,
    liquidityNet,
    feeGrowthOutsideAX64 = 0,
    feeGrowthOutsideBX64 = 0,
    tickCumulativeOutside = 0,
    secondsOutside = 0,
    secondsPerLiquidityOutsideX64 = 0,
  }: TickConstructorArgs) {
    invariant(id >= TickMath.MIN_TICK && id <= TickMath.MAX_TICK, "TICK");

    this.id = id;
    this.liquidityGross = JSBI.BigInt(liquidityGross);
    this.liquidityNet = JSBI.BigInt(liquidityNet);
    this.feeGrowthOutsideAX64 = JSBI.BigInt(feeGrowthOutsideAX64);
    this.feeGrowthOutsideBX64 = JSBI.BigInt(feeGrowthOutsideBX64);
    this.tickCumulativeOutside = JSBI.BigInt(tickCumulativeOutside)
    this.secondsOutside = JSBI.BigInt(secondsOutside);
    this.secondsPerLiquidityOutsideX64 = JSBI.BigInt(secondsPerLiquidityOutsideX64);
  }
}
