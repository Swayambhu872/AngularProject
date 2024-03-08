export class ToDo {
  serialNo: number;
  title: string;
  description: string;
  active: boolean;

  constructor(
    serialNo: number,
    title: string,
    description: string,
    active: boolean
  ) {
    this.serialNo = serialNo;
    this.title = title;
    this.description = description;
    this.active = active;
  }
}
