// Definim interfața pentru un serviciu.
export interface IServiciu {
  _id: string;
  name: string;
  link: string;
  description: string;
  icon: any; // presupunem că icon este un component de tip IconType
}