interface IFlashCard {
  FlashCard: {
    userID?: string;
    flashCardID?: number;
    flashCardQuestion: string;
    flashCardAnswer: string;
    flashCardCategory: number;
    createdDate: Date;
  };
}
export default IFlashCard;
