import { DateTime as LuxonDateTime } from "luxon";

export interface DatetimePrimitives {
  iso: string;
}

export class DateTime {
  private luxonDatetime: LuxonDateTime;
  constructor(datetimePrimitives: DatetimePrimitives) {
    this.luxonDatetime = LuxonDateTime.fromISO(datetimePrimitives.iso);
  }
  static fromISO = (iso: string): DateTime => {
    return new DateTime({ iso: iso });
  };
  toString = (options: string = "dd/LL/yy") => {
    return this.luxonDatetime.toFormat(options);
  };
  toISO = () => {
    return this.luxonDatetime.toISO();
  };
  toPrimitives() {
    return {
      iso: this.luxonDatetime.toISO(),
    };
  }
}
