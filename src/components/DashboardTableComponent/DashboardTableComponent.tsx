import IFlashCard from "../../interfaces/IFlashCard";
import DashboardService from "../../services/DashboardService";
import React, { useEffect, useState } from "react";

function DashboardTableComponent({
  dashboardService,
}: {
  dashboardService: DashboardService;
}) {
  const [flashCards, setFlashCards] = useState<IFlashCard["FlashCard"][]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function getUserFlashCards() {
      try {
        const response = await dashboardService.getUserFlashCards();
        if (response.status == 200) setFlashCards(response.data.flashCards);
        else {
          console.error("Error fetching flash cards: ", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching flash cards: ", error);
      }
    }

    async function getAllCategory() {
      try {
        const response = await dashboardService.getAllCategory();
        console.log(response.data);
        if (response.status == 200) setCategories(response.data);
        else {
          console.error("Error fetching categories: ", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    }

    // Call functions
    getAllCategory();
    getUserFlashCards();
    //
  }, [dashboardService]);

  function getCategoryNameById(categories: IFlashCard["FlashCard"][], targetId: number) {
    const category = categories.find(
      (category) => category.flashCardCategoryID === targetId
    );
    return category ? category.flashCardCategoryID : null;
  }

  return (
    <>
      <button className="btn btn-primary mb-3">Add New Row</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flashCards.length > 0 ? (
            flashCards.map((item, index) => (
              // <FlashCardComponent key={index} FlashCard={item} />
              <tr key={item.flashCardID}>
                <td>{index + 1}</td>
                <td>
                  {getCategoryNameById(categories, item.flashCardCategoryID)}
                </td>
                <td>{item.flashCardQuestion}</td>
                <td style={{ fontWeight: "bold" }}>{item.flashCardAnswer}</td>
                <td>{item.createdDate.toISOString()}</td>
                <td>
                  <button className="btn btn-primary mr-2">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No flash cards yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default DashboardTableComponent;
