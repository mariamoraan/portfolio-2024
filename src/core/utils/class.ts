export class ClassNames {
  constructor(private styles: Record<string, string>) {}
  join(classNames: string) {
    const classes = classNames.split(" ");
    return classes.map((c) => this.styles[c]).join(" ");
  }
}
