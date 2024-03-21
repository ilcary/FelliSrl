export interface CardContent {
  imagePath: string;
  imagePathSmall: string;
  headingParagraph: string;
  textParagraph: string;
  callToAction?: string;
  action: () => void;
}

export interface CardInfoContent extends CardContent {
  avatarImgPath: string;
  cardActions:CardActions[]
}
export interface CardActions{
  symbol:string;
  textValue:string;
  action: () => void;
}
