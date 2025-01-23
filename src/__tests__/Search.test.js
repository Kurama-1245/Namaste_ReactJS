import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantBody from "../components/RestaurantBody";
import MOCK_DATA from "../testingMockData/resList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should Render the Search Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <RestaurantBody />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);
  const searchButton = screen.getByRole("button", { name: /Search/ });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);

});

test("should filter top rated resraurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <RestaurantBody />
      </BrowserRouter>
    );
  });
  const topRatedButton = screen.getByTestId("resSortButton");
  fireEvent.click(topRatedButton);
  const cardsAfterTopRated = screen.getAllByTestId("resCard");
  expect(cardsAfterTopRated.length).toBe(5);
});
