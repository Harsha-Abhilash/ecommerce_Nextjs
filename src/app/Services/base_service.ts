export abstract class Service_base {
  static API_Link = "https://heroic-beauty-85276b92ee.strapiapp.com/api";
  static get_url(name: string): string {
    return `${this.API_Link}/${name}`;
  }
}
