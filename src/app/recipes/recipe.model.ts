
export  class Recipe {

  public recName: string;
  public description: string;
  public imagePath: string;

  constructor(recName: string, description: string, imagePath: string) {
    this.recName = recName;
    this.description = description;
    this.imagePath = imagePath;
  }

}
