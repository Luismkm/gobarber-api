export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(paylaod: string, hashed: string): Promise<boolean>;
}
