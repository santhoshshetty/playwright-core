export class Env {
  public static readonly URL: string =
    process.env.URL || "https://opensource-demo.orangehrmlive.com/";
  public static readonly USER: string = process.env.USER || "Admin";
  public static readonly PASS: string = process.env.PASS || "admin123";
}
