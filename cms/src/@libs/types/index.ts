export interface ILivroType {
    id?: string;
    name: string;
  }
  export interface ILivroFactory {
    id?: string;
    name: string;
  }
  export interface ILivroModel {
    id?: string;
    name: string;
    factory: ILivroFactory;
  }
  export interface ILivro {
    id?: string;
    description: string;
    photo: string;
    yearFactory: number;
    yearModel: number;
    priceRent: number;
    type: ILivroType;
    model: ILivroModel;
  }

  