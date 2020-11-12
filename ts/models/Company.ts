class Company {
  private fullName: string;
  private shortName: string;
  private adress: string;
  private legal: string;
  private email: string;
  private secondEmail: string;
  private phone: string;
  private secondPhone: string;
  private city: string;
  private country: string;

  constructor(
    fullName?: string,
    shortName?: string,
    adress?: string,
    legal?: string,
    email?: string,
    secondEmail?: string,
    phone?: string,
    secondPhone?: string,
    city?: string,
    country?: string
  ) {
    this.fullName = fullName;
    this.shortName = shortName;
    this.adress = adress;
    this.legal = legal;
    this.email = email;
    this.secondEmail = secondEmail;
    this.phone = phone;
    this.secondPhone = secondPhone;
    this.city = city;
    this.country = country;
  }

  /**
   * Getter $fullName
   * @return {string}
   */
  public get $fullName(): string {
    return this.fullName;
  }

  /**
   * Setter $fullName
   * @param {string} value
   */
  public set $fullName(value: string) {
    this.fullName = value;
  }

  /**
   * Getter $shortName
   * @return {string}
   */
  public get $shortName(): string {
    return this.shortName;
  }

  /**
   * Setter $shortName
   * @param {string} value
   */
  public set $shortName(value: string) {
    this.shortName = value;
  }

  /**
   * Getter $adress
   * @return {string}
   */
  public get $adress(): string {
    return this.adress;
  }

  /**
   * Setter $adress
   * @param {string} value
   */
  public set $adress(value: string) {
    this.adress = value;
  }

  /**
   * Getter $legal
   * @return {string}
   */
  public get $legal(): string {
    return this.legal;
  }

  /**
   * Setter $legal
   * @param {string} value
   */
  public set $legal(value: string) {
    this.legal = value;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Getter $secondEmail
   * @return {string}
   */
  public get $secondEmail(): string {
    return this.secondEmail;
  }

  /**
   * Setter $secondEmail
   * @param {string} value
   */
  public set $secondEmail(value: string) {
    this.secondEmail = value;
  }

  /**
   * Getter $phone
   * @return {string}
   */
  public get $phone(): string {
    return this.phone;
  }

  /**
   * Setter $phone
   * @param {string} value
   */
  public set $phone(value: string) {
    this.phone = value;
  }

  /**
   * Getter $secondPhone
   * @return {string}
   */
  public get $secondPhone(): string {
    return this.secondPhone;
  }

  /**
   * Setter $secondPhone
   * @param {string} value
   */
  public set $secondPhone(value: string) {
    this.secondPhone = value;
  }

  /**
   * Setter $city
   * @param {string} value
   */
  public set $city(value: string) {
    this.city = value;
  }

  /**
   * Getter $city
   * @return {string}
   */
  public get $city(): string {
    return this.city;
  }

  /**
   * Setter $country
   * @param {string} value
   */
  public set $country(value: string) {
    this.country = value;
  }

  /**
   * Getter $country
   * @return {string}
   */
  public get $country(): string {
    return this.country;
  }
}
